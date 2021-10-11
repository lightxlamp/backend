import express from "express";
import mongoose from "mongoose";
import { config } from "./config/index.js";
// import Post from "./Post.js"
import router from "./router.js";

const PORT = 5051;
// taken from MongoDB -> connect app tab
const DB_URL = 'mongodb+srv://'+ config.user +':' + config.password + '@cluster0.imdui.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express();
app.use(express.json()) // so we can handle JSON response
app.use('/api', router)

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

// app.post('/create_post', async (req, res) => {
//     try {
//         const {author, title, content, picture} = req.body;
//         const post = await Post.create({author, title, content, picture});
//         res.json(post)
//     }
//     catch(e) {
//         res.status(500).json(e);
//     }
// })

async function startApp() {
    try {
        // Launching server
        // localhost:PORT
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => {
            console.log('Server started');
        })
    }
    catch(e) {
        console.log(e);
    }
}

startApp();