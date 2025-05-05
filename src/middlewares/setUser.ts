import { NextFunction, Request, Response } from 'express';

// Extend the Request type to include `user`
// declare module 'express-serve-static-core' {
//   interface Request {
//     user?: { id: number; name: string };
//     body: {
//       createdBy?: number;
//       updatedBy?: number;
//       deletedBy?: number;
//       [key]: any
//     }
//   }
// }

declare global {
  namespace Express {
    interface Request {
      user?: { id: number; name: string };
      body: {
        createdBy?: number;
        updatedBy?: number;
        deletedBy?: number;
        [key: string]: any; // This allows any other fields that may be part of the body
      };
    }
  }
}


const attachUserId = (userId: number, method: string, body: any): void => {

  // if (!userId) {
  //   return res.status(401).json({ message: 'User not authenticated' });
  // }

  // Automatically attach the userId to create/update/delete operations
  if (method === 'POST') {
    body.createdBy = userId; // For create operation
  }

  if (method === 'PUT') {
    body.updatedBy = userId; // For update operation
  }

  if (method === 'DELETE') {
    body.deletedBy = userId; // For delete operation
  }

};

export function setUser(req: Request, res: Response, next: NextFunction) {
  // This is a mock user. Replace with actual auth logic (e.g., from JWT, session, etc.)
  req.user = {
    id: 1,
    name: 'Demo User',
  };

  // Attach the userId to the body properties based on HTTP method
  attachUserId(req.user.id, req.method, req.body)

  next();
}
