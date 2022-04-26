<template>
  <div>
    <NuxtLink to='/'>Main</NuxtLink>
    About Page
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  layout: 'default',
  head() {
    return {
      title: 'About',
    }
  },
}
</script>
