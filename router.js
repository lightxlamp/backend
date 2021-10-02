import { Router } from "express";
import PostController from "./PostController";

const router = new Router();

router.post('/create_post', PostController.create);

router.get('/posts');
router.get('/posts/:id');
router.put('/posts/:id');
router.put('/delete/:id');

export default router;