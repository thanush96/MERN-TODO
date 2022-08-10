import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  favourite: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
