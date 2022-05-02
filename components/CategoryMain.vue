<template>
  <div class='category-main'>
    <h2 v-if='title' class='category-main__title'>{{ title }}</h2>
    <nuxt-img
      src='/tmp/new-1.jpg'
      alt=''
      sizes='sm:460px md:768px lg:790px'
    />
  </div>
</template>

<script>
export default {
  name: 'CategoryMain',
  props: {
    title: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    }
  }
}
</script>

<style lang='scss'>
  .category-main {
    &__title {
      font-family: $ff-base;
      font-size: 21px;
      line-height: 26px;
      font-weight: 400;
      margin: 0 0 20px;
    }
  }
</style>
