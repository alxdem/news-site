<template>
  <div>
    <div class='wrapper'>
      <NuxtLink to='/about'>About</NuxtLink>
      About page

      <category-main
        title='Trending on Daily Express'
        :items='posts'
      />
    </div>
  </div>
</template>

<script>
import CategoryMain from '../components/CategoryMain'
export default {
  name: 'IndexPage',
  components: { CategoryMain },
  // async asyncData({$axios}) {
  //   const { data } = await $axios.get('TrendingNewsAPI', {
  //     headers: {
  //       'X-RapidAPI-Key': '1b48a3c919mshd9383fb1796ecdep113439jsn4b8e4d110369'
  //     }
  //   });
  //
  //   return {posts: data.value};
  // },
  data() {
    return {
      title: 'My Main Page',
      posts: null,
      data: null,
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Main page of news site',
        }
      ]
    }
  },
}
</script>
