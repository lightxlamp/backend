import { Router } from "express";
import PostController from "./PostController.js";

const router = new Router();

router.post('/create_post', PostController.create);
router.get('/posts', PostController.getAll);
router.get('/posts/:id', PostController.getOne);
router.put('/posts/:id', PostController.update);
router.delete('/delete/:id', PostController.delete);

export default router;