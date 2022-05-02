const mongoose = require('mongoose');

module.exports = {
  ConnectDB: function() {
    mongoose.connect(process.env.MONGO_URI).then(() => {
      console.log("Connected to Database");
    }).catch((err) => {
      console.log("Not Connected to Database ERROR! ", err);
    });
  }
}