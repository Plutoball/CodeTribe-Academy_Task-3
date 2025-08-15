const jsonServer = require ('json-server');
const auth = require ('json-sever-auth');
const cors = require ('cors');

const app = jsonServer.create();
const router = jsonServer.router('database.json');

app.db = router.db;

app.use(cors());
app.use(jsonServer.bodyParse);
app.use(auth);
app.use(router);

app.listen(4000, () => {
    console.log('JSON Server with auth running on http://localhost:8100');
});