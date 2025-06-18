import { NextFunction, Request, Response } from "express";
import { adminService } from "./admin.service";
import pick from "../../shared/pick";
import { adminFilterableFields } from "./admin.constant";


const getAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
         // console.log(req.query)
        const filters = pick(req.query, adminFilterableFields);
        const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder'])
        console.log(options)
    
    const result = await adminService.getAllAdminDb(filters, options) ;
    res.send(result)

    res.status(201).json({
      success: true,
      message: "Admin get successfully",
      data: result
    });
  } catch (err) {
      res.status(500).json({
      success: false,
      message: err || "somethings went wrong",
      error: err
      
    });
  }
};

export const adminController = {
  getAdmin
};
