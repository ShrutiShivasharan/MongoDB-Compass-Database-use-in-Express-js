import express from 'express';
import { getUsers, addUser, updateUser, deleteUser, getByUserId, getByUserName, getByMongoId } from '../controller/user.controller.js';

const router = express.Router();

//get users
router.get('/', getUsers);
//add user
router.post('/adduser',addUser);
//update user
router.put('/:id', updateUser);
//delete user
router.delete('/:id', deleteUser);
//user by id display
router.get('/id/:id', getByUserId);
//user by name display
router.get('/name/:name', getByUserName);
//user by Mongo id display
router.get('/mongoId/:id', getByMongoId);

export default router;