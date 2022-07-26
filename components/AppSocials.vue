<template>
  <div class='socials'>
    <a
      v-for='item in items'
      :key='item.name'
      :href='item.url'
      target='_blank'
      class='socials__link'
    >
      <AppIcon :name='item.name' />
    </a>
  </div>
</template>

<script>
import AppIcon from './AppIcon';
export default {
  name: 'AppSocials',
  components: {
    AppIcon
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang='scss'>
.socials {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  &__link {
    text-decoration: none;
    color: $gray__700;
    display: block;
    transition: color $easing $timing;

    &:hover {
      text-decoration: none;
      color: $gray__500;
    }
  }
}
</style>
