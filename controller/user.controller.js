import User from "../models/user.model.js";

//get users
export const getUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.json(users);   
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

//add user
export const addUser = async (req, res) => {
    const { id, name , email, password } = req.body;
    const newUser = new User({
        id, name , email, password
    });
    try {
        const createdUser = await newUser.save();
        console.log(createdUser);
        res.status(200).json(createdUser);
    }catch(err){
        res.status(400).json({message: err.message});
    }
}

//update user
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const {name , email, password} = req.body;
    try{

        // const user = await User.findById(id);
        const user = await User.findOne({id : parseInt(id) });
        if(!user){
            return res.status(404).json({message: 'user Not found!!'})
        }
        user.name = name || user.name
        user.email = email || user.email
        user.password = password || user.password

        const updatedUser = await user.save();
        res.json(updatedUser);
    }catch(err){
        res.status(400).json({message: err.message});
    }
}

//delete user
export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try{
        const user = await User.findOne({ id : parseInt(id) });
        if(!user){
            return res.status(404).json({message: 'user Not Found!'});
        }
        await User.deleteOne({id : parseInt(id)});
        res.json({message: 'user Deleted!!'});
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

//getById user
export const getByUserId = async (req, res) => {
    const { id } = req.params;
    try{
        // const user = await user.findOne({id});
        const user = await User.findOne({ id : parseInt(id) });
        if(!user){
            return res.status(404).json({message: 'User not found!!'})
        }
        res.json(user);
    }catch(err){
        res.status(500).json({message: 'Error display data by Id'});
    }
}

//getByName user
export const getByUserName = async (req, res) => {
    const { name } = req.params;
    try{
        const user = await User.findOne({ name });
        if(!user){
            return res.status(404).json({message: 'User not found!!'})
        }
        res.json(user);
    }catch(err){
        res.status(500).json({message: 'Error display data by name'});
    }
}

//get MongoDB id By User data (id - obj)
export const getByMongoId = async (req, res) => {
    const { id } = req.params
    try{
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({message: 'user Not Found'})
        }
        res.json(user);
    }catch(err){
        res.status(500).json({message:'error display data by MongoId'})
    }
}

