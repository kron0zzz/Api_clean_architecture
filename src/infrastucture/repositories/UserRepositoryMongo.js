import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    password: String,
    status: Boolean
  });

const UserModel = mongoose.model("User", UserSchema);

class UserRepositoryMongo {

    async create(userData) {
      const user = new UserModel(userData);
      return await user.save();
    }

    async findAll(){
      return await UserModel.find();
    }

    async findById(id){
      return await UserModel.findById(id);
    }
}

export default UserRepositoryMongo;