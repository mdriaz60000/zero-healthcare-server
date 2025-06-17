import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";

const createAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    
    const result = await userService.createAdminDb(req.body);
    res.send(result)

    res.status(201).json({
      success: true,
      message: "Admin created successfully",
      data: result
    });
  } catch (error) {
    next(error); // Pass error to global error handler
  }
};

export const userController = {
  createAdmin
};
