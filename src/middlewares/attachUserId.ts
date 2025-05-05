import { NextFunction, Request, Response } from 'express';

const attachUserId = (req: Request, res: Response, next: NextFunction): void => {
  const userId = req.user?.id;  // Assuming user is attached to req via authentication middleware

  // if (!userId) {
  //   return res.status(401).json({ message: 'User not authenticated' });
  // }

  // Automatically attach the userId to create/update/delete operations
  if (req.method === 'POST') {
    req.body.createdBy = userId; // For create operation
  }

  if (req.method === 'PUT') {
    req.body.updatedBy = userId; // For update operation
  }

  if (req.method === 'DELETE') {
    req.body.deletedBy = userId; // For delete operation
  }

  // Call next() to pass control to the next middleware or route handler
  next();
};

export default attachUserId;
