import express from 'express';
import usersApi from './users';
import sessionApi from './sessions';
import mainAPi from './mainpage';
import mealInfoApi from './meal-info';
import cookieUsername from './cookie-username';
import storesInfoApi from './stores-info';

const router = express.Router();

router.use('/users', usersApi);
router.use('/sessions', sessionApi);
router.use('/mainpage', mainAPi);
router.use('/mealInfo', mealInfoApi);
router.use('/cookieusername', cookieUsername);
router.use('/stores',storesInfoApi);
export default router;
