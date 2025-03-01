
// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

// // aquire connection if it is succesful
// const db = 'mongodb+srv://wankhadeabhi3:abhi123456@cluster0.jhzupam.mongodb.net/?retryWrites=true&w=majority';
// // connect from mongodb
// // mongoose.connect('mongodb://127.0.0.1:27017/Review-System');
//    mongoose.connect(db).then(() => {
//     console.log(`Connection is succesfull`);
//    }).catch((err) => console.log(`no Connection`));
// module.exports = db;

const mongoose = require("mongoose");

// here we connect the odm(object document maper) mongoose to the dbms mongodb.
// mongoose.connect("mongodb+srv://employee-system-user:employee-system-password@employee-system-0.o4qxi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", 
mongoose.connect("mongodb+srv://cossin322:mynameisavnish@cluster0.hrxkika.mongodb.net/employee?retryWrites=true&w=majority",
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection; // db store the connection

// cheacking the connection
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DATABASE connection is Established");
});

// exporting the connection.
module.exports = db;