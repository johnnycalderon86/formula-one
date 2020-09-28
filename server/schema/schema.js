const graphql = require('graphql');
const _ = require('lodash');

const Circuit = require('../models/Circuit')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,

} = graphql
//dummy data for
const circuits = [
    { name: 'Spa-FrancoChamps', city: 'Stavelot', id: '1', fastestLap: "1:46.286", fastestLapDriver: "Valtterie Bottas", length: "7.004 km", country: "Belgium", fastestLapYear: "2018", fastestLapTeam: "Mercedes", fastestLapCar: "AMG F1 W09 EQ Power+" },
    { name: "Circuit de Monaco", city: 'Monte-Carlo', id: '2', fastestLap: "1:14.260", fastestLapDriver: "Max Verstappen", length: "3.340 km", country: "Monaco", fastestLapYear: "2018", fastestLapTeam: "Red Bull Racing", fastestLapCar: "RB14" },
    { name: 'Autódromo José Carlos Pace', city: 'São Paulo', id: '3', fastestLap: "1:10.540 ", fastestLapDriver: "Valtterie Bottas", length: "4.309 km", country: "Brazil", fastestLapYear: "2018", fastestLapTeam: "Mercedes", fastestLapCar: "AMG F1 W09 EQ Power+" },
]

const CircuitType = new GraphQLObjectType({
    name: 'Circuit',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        city: { type: GraphQLString },
        fastestLap: { type: GraphQLString },
        fastestLapDriver: { type: GraphQLString },
        fastestLapYear: { type: GraphQLString },
        fastestLapTeam: { type: GraphQLString },
        fastestLapCar: { type: GraphQLString },
        length: { type: GraphQLString },
        country: { type: GraphQLString },


    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        circuit: {
            type: CircuitType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                //code to get data from db/other sourse
                return _.find(circuits, { id: args.id });
            }
        },
        circuits: {
            type: GraphQLList(CircuitType),
            resolve(parent, args) {
                return circuits
            }

        }
    }
})
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addCircuit: {
            type: CircuitType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                city: { type: new GraphQLNonNull(GraphQLString) },
                fastestLap: { type: new GraphQLNonNull(GraphQLString) },
                fastestLapDriver: { type: new GraphQLNonNull(GraphQLString) },
                fastestLapYear: { type: new GraphQLNonNull(GraphQLString) },
                fastestLapTeam: { type: new GraphQLNonNull(GraphQLString) },
                fastestLapCar: { type: GraphQLString },
                length: { type: new GraphQLNonNull(GraphQLString) },
                country: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                let circuit = new Circuit({
                    name: args.name,
                    city: args.city,
                    fastestLap: args.fastestLap,
                    fastestLapDriver: args.fastestLapDriver,
                    fastestLapYear: args.fastestLapYear,
                    fastestLapTeam: args.fastestLapTeam,
                    fastestLapCar: args.fastestLapCar,
                    length: args.length,
                    country: args.country,
                });
                return circuit.save()
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation:Mutation
})
// const TeamsType = new GraphQLObjectType({
//     name: 'Teams',
//     fields: () => ({
//         id: { type: GraphQLString },
//         name: { type: GraphQLString },
//         drivers: { type: GraphQLString },
//         teamPrincipal: { type: GraphQLString },

//     })
// })

// const DriversType = new GraphQLObjectType({
//     name: 'Drivers',
//     fields: () => ({
//         id: { type: GraphQLString },
//         name: { type: GraphQLString },
//         team: { type: GraphQLString },


//     })
// })

        // teams: {
        //     type: TeamsType,
        //     args: { id: { type: GraphQLString } },
        //     resolve(parent, args) {
        //         //code to get data from db/other sourse
        //     }
        // },
        // drivers: {
        //     type: DriversType,
        //     args: { id: { type: GraphQLString } },
        //     resolve(parent, args) {
        //         //code to get data from db/other sourse
        //     }
        // }

