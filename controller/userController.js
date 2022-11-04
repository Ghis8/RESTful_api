//Get all Users
import {v4 as uuidv4} from 'uuid'
let users=[]
export const getUsers=(req,res)=>{
    res.send(users)
}

//add user 

export const addUser=(req,res)=>{
    const user=req.body
    users.push({...user,id:uuidv4()})
    res.status(200).send("User added successfully")
    
}

// get single user

export const getUser=(req,res)=>{
    const {id}=req.params
    res.send(users.find(user => user.id === id))
}

//delete a user

export const deleteUser=(req,res)=>{

    const {id}=req.params
    res.status(200).json(users.filter(user=>user.id !== id))
    res.send(`user with id ${id} deleted successfully`)
}

//Update user

export const updateUser=(req,res)=>{
    const {id}=req.params
    const {firstname,lastname,age}=req.body

    const user=users.find(user=>user.id === id)
    if(firstname) user.firstname =firstname
    if(lastname) user.lastname =lastname
    if(age) user.age =age
    res.status(200).send(`user with ${id} updated successfully`)
}