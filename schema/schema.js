const typeDefs = `#graphql
    type Game {
        id: ID!
        name: String!
        description: String!
        year: Int!
        rating: Float
        designer: String
        platform:[String!]!
        Review: [Review]
    }
    type Review {
        id: ID!
        game: Game!
        title: String!
        body: String!
        rating: Int!
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
    }
    type Query {
        games: [Game!]!
        game(id: ID!): Game
        reviews: [Review!]!
        review(id: ID!): Review
        authors: [Author!]!
        author(id: ID!): Author
    }
`

module.exports = {
    typeDefs
}

