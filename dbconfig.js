//FOR CONNECTING MONGODATABASE
const mongoose = require("mongoose");
mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.ez75xfb.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
