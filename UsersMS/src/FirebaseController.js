import { createNewUser, addFavRepoToUser, removeFavRepoFromUser, getAllFavToUser } from './FirebaseService.js';

class FirebaseController {
    async handleCreateNewUser(req, res) {
        const { username } = req.query;
        try {
            const response = await createNewUser(username);
            res.status(200).json({
                success: true,
                data: response
            });
        } catch (error) {
            console.error(`Error creating user: ${error.message}`);
            res.status(500).json({ success: false, error: error.message });
        }
    }

    async handleAddFavRepoToUser(req, res) {
        const { username, repoId } = req.query;

        try {
            const response = await addFavRepoToUser(username, repoId);
            res.status(200).json({
                success: true,
                data: response
            });
        } catch (error) {
            console.error(`Error adding favorite repository: ${error.message}`);
            res.status(500).json({ success: false, error: error.message });
        }
    }

    async handleRemoveFavRepoFromUser(req, res) {
        const { username, repoId } = req.params;
        try {
            const response = await removeFavRepoFromUser(username, repoId);
            res.status(200).json({
                success: true,
                data: response
            });
        } catch (error) {
            console.error(`Error removing favorite repository: ${error.message}`);
            res.status(500).json({ success: false, error: error.message });
        }
    }

    async handleGetAllFavToUser(req, res) {
        const username = req.query.username;

        try {
            const response = await getAllFavToUser(username);
            res.status(200).json({
                success: true,
                data: response
            });
        } catch (error) {
            console.error(`Error getting all favorites to user: ${error.message}`);
            res.status(500).json({ success: false, error: error.message });
        }
    }
}

export default new FirebaseController();
