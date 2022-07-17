<template>
  <div class='wrapper'>
    <CategoryMain
      :items='posts'
    />
  </div>
</template>

<script>
import CategoryMain from '../components/CategoryMain'
export default {
  name: 'IndexPage',
  components: { CategoryMain },
  async asyncData({$axios}) {
    // const { data } = await $axios.get('TrendingNewsAPI', {
    //   headers: {
    //     'X-RapidAPI-Key': '1b48a3c919mshd9383fb1796ecdep113439jsn4b8e4d110369'
    //   }
    // });

    // const data = await $axios.get('http://localhost:3000/data/popular/all.json');
    // const data = await $axios.get('/data/popular/all.json');

    const raw = await fetch('http://localhost:3000/data/popular/all.json');
    const data = await raw.json();

    return {
      posts: data.result.items || [],
    };
  },
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
