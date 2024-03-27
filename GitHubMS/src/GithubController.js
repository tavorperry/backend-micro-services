import GitHubService from './GithubService.js';

class GithubController {
    async getAllRepos(req, res) {
        const {order, username, onlyFav} = req.query;
        try {
            const reposInfo = await GitHubService.getAllRepositories(username, order, onlyFav);
            res.status(200).json({
                success: true,
                data: reposInfo
            });
        } catch (error) {
            //for demo purposes, return all the errors as is
            console.error(`Error: ${error}`);
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    };
}

export default new GithubController();
