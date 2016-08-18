/**
 * Created by yoyo on 16-8-18.
 */
import express from 'express';
import usersApi from './users';

const router = express.Router();

router.use('/users', usersApi);
export default router;
