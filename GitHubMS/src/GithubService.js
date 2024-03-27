import { Octokit } from 'octokit';
import axios from "axios";

const octokit = new Octokit({
    //on PRD we will use .env file
    auth: process.env.GITHUB_TOKEN,
});

const userMsBaseUrl = process.env.USERMS_URL || 'http://localhost:3001/api/';

class GithubService {
    async getAllRepositories(username, order = 'desc', onlyFav = false) {
        try {
            // we are filtering only repos with stars >= 10k to make the call smaller and faster
            const repos = await octokit.paginate('GET /search/repositories', {
                q: 'stars:>=100000',
                sort: 'stars',
                order: order,
            });

            if (!repos) {
                throw new Error("No repositories found");
            }

            const filteredRepos = repos.map((repo) => {
                return {
                    name: repo.name,
                    stars: repo.stargazers_count,
                    owner: repo.owner?.login,
                    open_issues_count: repo.open_issues_count,
                    forks: repo.forks,
                    watchers: repo.watchers,
                    size: repo.size,
                    avatarUrl: repo.avatar_url,
                    id: repo.id,
                    key: repo.id
                }
            })

            if (onlyFav) {
                const response = await axios.get(`${userMsBaseUrl}/getFavorites/?username=${username}`);
                const favRepoIds = response.data.data;
                if (!favRepoIds) return [];
                return filteredRepos.filter(repo => favRepoIds.includes(repo?.id.toString()));
            }

            return filteredRepos;

        } catch (error) {
            console.error(`Error in githubService: ${error}.`);
            throw error;
        }
    }
};

export default new GithubService();
