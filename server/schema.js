const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const { 
  GraphQLSchema, 
  GraphQLObjectType, 
  GraphQLList, 
  GraphQLInt, 
  GraphQLString 
} = require('graphql');

const ItemType = new GraphQLObjectType({
  name: 'ItemType',
  fields: () => ({
    cook_time_minutes: { type: GraphQLInt },
    slug: { type: GraphQLString },
    video_url: { type: GraphQLString },
    prep_time_minutes: { type: GraphQLInt },
    name: { type: GraphQLString },
    thumbnail_url: { type: GraphQLString },
    num_servings: { type: GraphQLInt },
    total_time_tier: { type: TotaltimeType },
    id: { type: GraphQLInt }
  })
})

const TotaltimeType = new GraphQLObjectType({
  name: 'TotaltimeType',
  fields: () => ({
    display_tier: { type: GraphQLString }
  })
})

const SectionsType = new GraphQLObjectType({
  name: 'SectionsType',
  fields: () => ({
    components: { type: ComponentsType }
  })
})

const ComponentsType = new GraphQLObjectType({
  name: 'ComponentsType',
  fields: () => ({
    raw_text: { type: GraphQLString }
  })
})

const TopicsType = new GraphQLObjectType({
  name: 'TopicsType',
  fields: () => ({
    slug: { type: GraphQLString }
  })
})

const RecipeType = new GraphQLObjectType({
  name: 'RecipeType',
  fields: () => ({
    sections: { type: SectionsType },
    name: { type: GraphQLString },
    topics: { type: TopicsType },
    instructions: { type: InstructionType }
  })
})

const InstructionType = new GraphQLObjectType({
  name: 'InstructionType',
  fields: () => ({
    display_text: { type: GraphQLString },
    position: { type: GraphQLInt }
  })
})

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    results: {
      type: ItemType,
      resolve(parent, args) {
        return axios
          .get('https://tasty.p.rapidapi.com/recipes/list?from=0&size=10', {
            headers: {
              'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
              'X-RapidAPI-Key': process.env.API_KEY
            }
          })
          .then(res => res.data)
      }
    },
    item: {
      type: RecipeType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve(parent, args) {
        return axios
          .get(`https://tasty.p.rapidapi.com/recipes/detail?id=${args.id}`, {
            headers: {
              'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
              'X-RapidAPI-Key': process.env.API_KEY
            }
          })
          .then(res => res.data)
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQueryType
});

