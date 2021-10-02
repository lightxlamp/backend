console.log('Test Server...');

import express from "express";
import mongoose from "mongoose";

const PORT = 5051;
// readPWD();
// taken from MongoDB -> connect app tab
const DB_URL = 'mongodb+srv://lightxlamp:<password>@cluster0.imdui.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express();
app.use(express.json()) // so we can handle JSON response

// Creating Endpoint, that will handle GET query
// 1st parameter is address, on which endpoint will work
// 2nd parameter is function, that will be performed after "visiting" this endpoint
app.get('/', (req, res)=> {
    res.status(200).json('Server is working');
});

app.get('/my_experiment', (req, res)=> {
    //res.status(200).json('New endpoint to test nodemon');
    res.send('Hello World!')
});

app.get('/my_experiment_2', (req, res)=> {
    // res.status(200).json(req.headers);
    res.status(200).json(req.query);
    // res.status(200).json(req.query.sex);
    // res.status(200).json(req.hostname);
});

app.post('/print_params_of_post_request', (req, res) => {
    console.log(req.body);
    res.status(200).json(req.body)
})

// Launching server
// localhost:PORT
app.listen(PORT, () => {
    console.log('Server started');
})


// function readPWD() {
//     const fs = require('fs');

//     fs.readFile('/pwd.txt', 'utf8' , (err, data) => {
//       if (err) {
//         console.error(err)
//         return
//       }
//       console.log(data)
//     })
// }
