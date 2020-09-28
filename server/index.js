const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose')
require('dotenv').config()

const dbName = process.env.DB_NAME
const dbPassword = process.env.DB_PASSWORD
const dbUser = process.env.DB_USER

const app = express();

//connecting to mongoDB server
mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.or615.mongodb.net/${dbName}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.once('open', () => {
    console.log('connected to database');
});



app.use('/graphql-f1', graphqlHTTP({
    schema,
    graphiql: true
}))


app.listen(4001, () => {
    console.log("Listening for request on port 4000");
})

