import { Document, Schema } from "mongoose";

interface iTodo {
  name: string;
  task: string;
  completed: boolean;
  time: string;
  deadLine: number;
}
interface iTodoData extends iTodo, Document {}
