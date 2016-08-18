import express from 'express';
import usersApi from './users';

const router = express.Router();

router.use('/users', usersApi);
export default router;
