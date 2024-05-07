const UserModel=require("../models/UserModel");

const UserController={
    async SignUp (req, res){
        try {
            const { name, email, password, role } = req.body;
            const newUser = new UserModel({
                name: name,
                email: email,
                password: password,
                role: role
            });
            console.log({ name, email, password, role })
            await newUser.save();
            res.status(201).json({ message: "true", user: newUser });
        } catch (error) {
            console.error("Error creating user:", error);
            res.status(500).json({ message: "Error creating user" });
        }
    },
    async login(req,res){
        try{
            const {email,password}=req.body
            const user =await UserModel.findOne({email:email, password:password,role:"customer"});
            if(user){
                console.log("Found");
                res.status(201).json({message: "true",user});
            }
            else{
                console.log("User not found");
                res.status(201).json({message: "false",user});
            }
        }
        catch{
            console.log("error")
        }
    }
}
module.exports=UserController