import { Document, Schema, model } from "mongoose";

interface iTodo {
  name: string;
  task: string;
  completed: boolean;
  time: string;
  deadLine: number;
}
interface iTodoData extends iTodo, Document {}

const TodoS = new Schema<iTodoData>(
  {
    name: {
      type: String,
    },
    task: {
      type: String,
    },
    completed: {
      type: Boolean,
    },
    time: {
      type: String,
    },
    deadLine: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default model<iTodoData>("user", TodoS);
