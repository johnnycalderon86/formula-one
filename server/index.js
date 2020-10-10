const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose')
const cors = require('cors');
const path = require('path');

require('dotenv').config()

const dbName = process.env.DB_NAME
const dbPassword = process.env.DB_PASSWORD
const dbUser = process.env.DB_USER

const app = express();
//allow cross-origin
app.use(cors())

//connecting to mongoDB server
mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.or615.mongodb.net/${dbName}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.once('open', () => {
    console.log('connected to database');
});



app.use('/graphql-f1', graphqlHTTP({
    schema,
    graphiql: true
}))

app.use(express.static('public'))

app.get('*', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Listening for request on port ${PORT}`);
})

