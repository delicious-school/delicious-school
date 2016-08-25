import db from '../app/db/connect';
import async from 'async';
import User from '../app/db/entity/user';
import user from './initdata/user.json';
import Dish from '../app/db/entity/dish';
import dish from './initdata/dishes.json';
import Store from '../app/db/entity/store';
import store from './initdata/store.json';
import Order from '../app/db/entity/order';

async.series([
  (cb) => db.connect('production', cb),
  (cb) => {
    console.log('connected');
    cb();
  },
  (cb) => Store.find().remove(cb),
  (cb) => {
    console.log('store deleted');
    cb();
  },
  (cb) => Dish.find().remove(cb),
  (cb) => {
    console.log('dish deleted');
    cb();
  },
  (cb) => User.find().remove(cb),
  (cb) => {
    console.log('user deleted');
    cb();
  },
  (cb) => Order.find().remove(cb),
  (cb) => {
    console.log('order deleted');
    cb();
  },
  (cb) => User.create(user, cb),
  (cb) => {
    console.log('user created');
    cb();
  },
  (cb) => Dish.create(dish, cb),
  (cb) => {
    console.log('dishes');
    cb();
  },
  (cb) => Store.create(store, cb),
  (cb) => db.close(cb)
], ()=> {
  console.log('Complete!');
});
