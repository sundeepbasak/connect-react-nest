import { NestMiddleware, Injectable } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";


//class based middleware
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("logger middleware...");
    next();
  }
}


/* //*functional middleware --> much more simpler to write
import { Request, Response, NextFunction } from 'express';

export function LoggerMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log(`Request...`);
  next();
};
*/