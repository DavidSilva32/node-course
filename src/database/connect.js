const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@coursenodejs.fj3d0hn.mongodb.net/database?retryWrites=true&w=majority`
    );

    console.log("Conexão ao banco de dados realizado com sucesso!");
  } catch (error) {
    console.log(
      "Ocorreu um error ao se conectar com o banco de dados: ",
      error
    );
  }
};

module.exports = connectToDatabase;
