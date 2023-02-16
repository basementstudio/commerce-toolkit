require('dotenv').config()

module.exports = {
  projects: {
    app: {
      schema: ['./src/storefront/sdk-gen/generated/graphql.schema.json'],
      documents: ['./src/**/*.{graphql,gql}']
    }
  }
}
