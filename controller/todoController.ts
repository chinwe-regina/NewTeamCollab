import express, { Request, Response } from "express";
import todomodel from "../model/todomodel";
export const createTodo = async (req: Request, res: Response) => {
  try {
    const { name, age } = req.body;
    const user = await todomodel.create({ name, age });
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
export const viewTodo = async (req: Request, res: Response) => {
  try {
    const user = await todomodel.find();
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
