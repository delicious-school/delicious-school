import express from 'express';
import usersApi from './users';
import sessionApi from './sessions';
import mainAPi from './mainpage';
import cookieAPi from './cookie';
import mealInfoAPi from './meal-info';

const router = express.Router();
router.use('/cookie',cookieAPi);
router.use('/users', usersApi);
router.use('/sessions', sessionApi);
router.use('/mainpage',mainAPi);
router.use('/mealInfo',mealInfoAPi);
export default router;
