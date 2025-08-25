import jsonServer from'json-server';
import auth from 'json-server-auth';
import cors from 'cors';

const app = jsonServer.create();
const router = jsonServer.router('database.json');

app.db = router.db;

app.use(cors());
app.use(jsonServer.bodyParser);
app.use(auth);
app.use(router);

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`JSON Server with auth running on http://localhost:${PORT}`)
});