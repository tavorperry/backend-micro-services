import express from 'express';
import cors from 'cors';
import routes from './src/routes.js'

const app = express();
const port = 3000;

app.get('/healthCheck', (req, res) => {
    res.send('Up');
});

app.use(cors());
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Zest app listening at http://localhost:${port}`);
})
