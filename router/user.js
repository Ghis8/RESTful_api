import express from 'express'
import { getUsers, addUser,getUser, deleteUser, updateUser } from '../controller/userController.js'
const router=express.Router()



router.get('/users',getUsers)
router.post('/user',addUser)
router.get('/user/:id',getUser)
router.delete('/user/:id',deleteUser)
router.patch('/user/:id',updateUser)


export default router