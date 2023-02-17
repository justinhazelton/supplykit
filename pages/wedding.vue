<template>
<div>
    <h1>Wedding</h1>
<div v-for="post in weddingData.blogPostCollection.items" :key="blogUnique">
    <h1>{{ post.title }}</h1>
    <nuxt-link :to="`./${post.author.name}`">Click here for {{ post.author.name }}</nuxt-link>
    <img :src="post.heroImage.url" :alt="post.title">
    <p>{{ post.author }}</p>
</div>

</div>

</template>

<script>
import { gql } from 'nuxt-graphql-request';

export default {
  async asyncData({ $graphql, params }) {
    const query = gql`
      query { 
        blogPostCollection {
    items{
      sys {
        id
      }
    
     title
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

    const weddingData = await $graphql.default.request(query);
    console.log(weddingData.blogPostCollection)
    return { weddingData };
  },
};
</script>