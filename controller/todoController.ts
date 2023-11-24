import express, { Request, Response } from "express";
export const createTodo = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(404).json({
      message: "failed",
    });
  }
};
