const mongoose = require("mongoose");
const ayarlar = require('../config.json')
const url = ayarlar.mongodb;

mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

mongoose.connection.on("connected", () => {console.log("Mongo Bağlandı!")});
mongoose.connection.on("error", () => {console.error("Mongo Hatalı!")});