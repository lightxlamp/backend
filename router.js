import { Router } from "express";
import Post from "./Post.js";

const router = new Router();

router.post('/create_post', async (req, res) => {
    try {
        const {author, title, content, picture} = req.body;
        const post = await Post.create({author, title, content, picture});
        res.json(post)
    }
    catch(e) {
        res.status(500).json(e);
    }
});

router.get('/posts');
router.get('/posts/:id');
router.put('/posts/:id');
router.put('/delete/:id');

export default router;