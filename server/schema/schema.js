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
const circuits22 = [
    {
        name: "Spa-FrancoChamps",
        city: "Stavelot",
        fastestLap: "1:46.286",
        fastestLapDriver: "Valtterie Bottas",
        length: "7.004 km", country: "Belgium"
        , fastestLapYear: "2018",
        fastestLapTeam: "Mercedes",
        fastestLapCar: "AMG F1 W09 EQ Power+",
        trackImage: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Belgium_Circuit.png.transform/9col/image.png",
        weekendDate: "27-29",
        month: "AUGUST"
    },
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
        trackImage: { type: GraphQLString },
        weekendDate: { type: GraphQLString },
        month: { type: GraphQLString },


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
                return Circuit.findById(args.id)
            }
        },
        circuits: {
            type: GraphQLList(CircuitType),
            resolve(parent, args) {
                return Circuit.find({})
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
                fastestLap: { type: GraphQLString },
                fastestLapDriver: { type: new GraphQLNonNull(GraphQLString) },
                fastestLapYear: { type: GraphQLString },
                fastestLapTeam: { type: GraphQLString },
                fastestLapCar: { type: GraphQLString },
                length: { type: new GraphQLNonNull(GraphQLString) },
                country: { type: new GraphQLNonNull(GraphQLString) },
                trackImage: { type: new GraphQLNonNull(GraphQLString) },
                weekendDate: { type: new GraphQLNonNull(GraphQLString) },
                month: { type: new GraphQLNonNull(GraphQLString) },
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
                    trackImage: args.trackImage,
                    weekendDate: args.weekendDate,
                    month: args.month
                });
                return circuit.save()
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
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

