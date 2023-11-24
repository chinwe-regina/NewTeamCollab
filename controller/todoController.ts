import express, { Request, Response } from "express";
export const createTodo = async (req: Request, res: Response) => {
  try {
    const { name, age } = req.body;
    const user = await todoModel.create({ name, age });
    res.status(200).json({
      message: "created",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      message: "failed",
    });
  }
};
