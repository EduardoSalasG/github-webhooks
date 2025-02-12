import express from 'express'
import { envs } from './config/envs';
import { GithubController } from './presentation/github/controller';
import { GitHubSha256MiddleWare } from './presentation/middlewares/github-sha256.middleware';


(() => {
    main();
})();

function main() {
    const app = express();
    const controller = new GithubController;

    app.use(express.json());

    app.use(GitHubSha256MiddleWare.verifyGithubSignature);

    app.post('/api/github', controller.webhookHandler)



    app.listen(envs.PORT, () => {
        console.log(`App running on port ${envs.PORT}`)
    });



}