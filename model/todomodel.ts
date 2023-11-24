import { Document, Schema } from "mongoose";

interface iTodo {
  name: string;
  task: string;
  completed: boolean;
  time: string;
  deadLine: number;
}
interface iTodoData extends iTodo, Document {}

const TodoSchema = new Schema<iTodo>({
  name: {
    type: String,
  },
  task: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});
