const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const app = express();




app.use('/graphql-f1', graphqlHTTP({
    schema,
    graphiql:true
}))


app.listen(4001, () => {
    console.log("Listening for request on port 4000");
})

