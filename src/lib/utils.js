const { default: mongoose } = require("mongoose");

const connection = {};

export const connectoDB = async () => {
try {
  if(connection.isConnected){
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  }
  const db = mongoose.connect(process.env.MONGO);
  connection.isConnected = db.connections[0].readyState;
} catch (error) {
  console.log(error)
  throw new Error(error);
}
}