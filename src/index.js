import {GraphQLServer } from 'graphql-yoga';

//Float,DATETIME
const typeDefs = `
    type Query {
        me: User!
    }

    type User {
        id: ID!
        name: String!
        age: Int,
        employed: Boolean!
    }
`

const resolvers = {
    Query: {
        id() {
            return '123'
        },
        name() {
            return 'Abhimanyu Singh'
        },
        age() {
            return 35
        },
        employed() {
            return true
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => {
    console.log('server is up');
})