import { Schema } from "mongoose";

// export interface IBoard extends Document {
//   total: Number;
//   boardItems: IBoardItem[];
// }

export interface IBoardItem extends Document {
  uuid: string;
  category: string;
  content: string;
  like: number;
  dislike: number;
}

export const BoardItemSchema = new Schema({
  uuid: String,
  category: String,
  content: String,
  like: Number,
  dislike: Number,
});

// export const BoardSchema = new Schema(
//   {
//     boardItems: {
//       type: [BoardItemSchema],
//     },
//   },
//   { versionKey: false, collection: "board" }
// );
