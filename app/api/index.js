import express from 'express';
import usersApi from './users';
import sessionApi from './sessions';
import mainAPi from './mainpage';
import mealInfoApi from './mealInfo';

const router = express.Router();

router.use('/users', usersApi);
router.use('/sessions', sessionApi);
router.use('/mainpage',mainAPi);
router.use('/mealInfo',mealInfoApi);
export default router;
