import { Request, Response } from "express";

import { User } from "../entities/user";
import { AppDataSource } from "../config/data-source";
import { UserResponce } from "../dto/userDto";

export class UserController {
  static async signup(req: Request, res: Response) {
    const { name, email, password, role } = req.body;
    const user = new User();
    user.name = name;
    user.email = email;
    user.password = password;
    user.role = role;
    
    const userRepository = AppDataSource.getRepository(User);
    await userRepository.save(user);
    // Use the UserResponse DTO to structure the data being sent in the response
    const userDataSent = new UserResponce()
    userDataSent.name = user.name;
    userDataSent.email = user.email;
    userDataSent.role = user.role;
    // console.log(user.name , "userName ")
    return res

     .status(201)
     .json({ message: "User created successfully", userDataSent });
  }
}
