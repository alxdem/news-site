<template>
  <div>
    <NuxtLink to='/about'>About</NuxtLink>
    About page
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      title: 'My Main Page',
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
