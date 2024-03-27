import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, runTransaction, get } from "firebase/database";
import {firebaseConfig} from "./firbaseConfig.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const createNewUser = async (username) => {
    const userRef = ref(db, 'users/' + username);

    const snapshot = await get(userRef);
    if (snapshot.exists()) {
        console.log('User already exists. No action taken.');
        return;
    }

    return await set(userRef, {
        username,
        fav_repos: []
    });
}

export const addFavRepoToUser = async (username, repoId) => {
    const userRef = ref(db, 'users/' + username);

    try {
        await runTransaction(userRef, (currentUserData) => {
            if (currentUserData === null) {
                // we want to create a new user if not found
                currentUserData = { fav_repos: [] };
            }
            if (currentUserData) {
                if (!Array.isArray(currentUserData.fav_repos)) {
                    currentUserData.fav_repos = [];
                }
                currentUserData.fav_repos.push(repoId);
                return currentUserData;
            } else {
                throw new Error("No such user");
            }
        });
    } catch (error) {
        throw new Error('Failed to add favorite repository: ' + error.message);
    }
};

export const removeFavRepoFromUser = async (username, repoId) => {
    const userRef = ref(db, 'users/' + username);

    try {
        await runTransaction(userRef, (currentUserData) => {
            if (currentUserData) {
                if (!Array.isArray(currentUserData.fav_repos)) {
                    return currentUserData;
                }
                currentUserData.fav_repos.filter(repoId);
            }
            return currentUserData;
        });
    } catch (error) {
        throw new Error('Failed to add favorite repository: ' + error.message);
    }
};

export const getAllFavToUser = async (username) => {
    const userFavRef = ref(db, `users/${username}/fav_repos`);

    try {
        const snapshot = await get(userFavRef);
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            return [];
        }
    } catch (error) {
        throw new Error('Failed to get all favorites: ' + error.message);
    }
};
