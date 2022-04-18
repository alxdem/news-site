<template>
  <div>
    <NuxtLink to='/about'>About</NuxtLink>
    <Tutorial />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
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
  data() {
    return {
      title: 'My Main Page',
    }
  }
}
</script>
