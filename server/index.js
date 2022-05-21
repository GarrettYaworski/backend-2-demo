const express = require('express');
const cors = require('cors');
const { getUsers, createUsers, editUsers, deleteUsers } = require('./controller');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/api/getUsers', getUsers);
app.post('/api/users', createUsers);
app.put('/api/editName/:newName', editUsers);
app.delete('/api/deleteUser', deleteUsers);

const PORT = 3001;
app.listen(PORT, () => console.log( `listening on port ${PORT}`));