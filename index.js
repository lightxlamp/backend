console.log('Test Server...');

import express from "express";

const PORT = 5051;

const app = express();

// Creating Endpoint, that will handle GET query
// 1st parameter is address, on which endpoint will work
// 2nd parameter is function, that will be performed after "visiting" this endpoint
app.get('/', (req, res)=> {
    res.status(200).json('Server is working');
});

app.get('/my_experiment', (req, res)=> {
    res.status(200).json('New endpoint to test nodemon');
});

app.get('/my_experiment_2', (req, res)=> {
    // res.status(200).json(req.headers);
    res.status(200).json(req.query);
    // res.status(200).json(req.query.sex);
    // res.status(200).json(req.hostname);
});

// Launching server
// localhost:PORT
app.listen(PORT, () => {
    console.log('Server started');
})