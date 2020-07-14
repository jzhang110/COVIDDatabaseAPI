const mongoose = require('mongoose');

const connectDB = async ()=>{
    const conn = await mongoose.connect('mongodb+srv://jzhang110:junjie302027@covidproject.iunl5.mongodb.net/<dbname>?retryWrites=true&w=majority',{

        useNewUrlParser:true,

        useCreateIndex:true,

        useFindAndModify:false,

        useUnifiedTopology: true

    });



    console.log(`MongoDB connected: ${conn.connection.host}`);

}



module.exports = connectDB;

