import express from 'express';
import usersApi from './users';
import sessionApi from './sessions';
import mainAPi from './mainpage';

const router = express.Router();

router.use('/users', usersApi);
router.use('/sessions', sessionApi);
router.use('/mainpage',mainAPi);
export default router;
