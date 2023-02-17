<template>
    <div>
        <h1>Wedding</h1>
    <div v-for="post in weddingData.blogPostCollection.items" :key="blogUnique">
        <h1>{{ post.title }}</h1>
        <nuxt-link to="/wedding">Go Back</nuxt-link>

        <p>{{ $route.params.slug }}</p>
        <img :src="post.heroImage.url" :alt="post.title">
        <p>{{ post.author }}</p>
        <pre>{{ post }}</pre>
    </div>
    
    </div>
    
    </template>
    
    <script>
    import { gql } from 'nuxt-graphql-request';
    
    export default {
      async asyncData({ $graphql, params }) {
        const query = gql`
          query($name: String) { 
            blogPostCollection(where: { author: {name: $name} }) {
        items{
          sys {
            id
          }
        
         title
         slug
         heroImage {
            url(transform: {width: 500, height: 400})
         }
        author {
          name
          title
          company
          shortBio
          email
          phone
          facebook
          twitter
          github
        }
      }
    }
    }
        `;
    
        const variables = { name: params.slug }
        const weddingData = await $graphql.default.request(query, variables);
        console.log(weddingData.blogPostCollection)
        return { weddingData };
      },
    };
    </script>