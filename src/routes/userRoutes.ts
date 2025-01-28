import * as express from "express";
import { UserController } from "../controllers/userController";
const router = express.Router();


router.post('/register', async (req, res) => {
    try {
      await UserController.signup(req, res);
    } catch (err) {
        console.log(err)
      res.status(500).json({ message: 'Internal server error' });
    }
  });

export default router;