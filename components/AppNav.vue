<template>
  <nav v-if='items.length' class='nav'>
    <div class='wrapper'>
      <div class='nav__inner'>
        <NuxtLink
          v-for='item in items'
          :key='item.anchor'
          :to='item.url'
          class='nav__link'
          @mouseover.native='hover'
        >
          <span class='nav__text'>{{ item.anchor }}</span>
        </NuxtLink>
      </div>
    </div>

    <div ref='accent' class='nav__accent'></div>
  </nav>
</template>

<script>
export default {
  name: 'AppNav',
  props: {
    items: {
      type: Array,
      default() {
        return [
          { anchor: 'Home', url: '/' },
          { anchor: 'News', url: '/4' },
          { anchor: 'Showbiz & TV', url: '/2' },
          { anchor: 'Sport', url: '/7' },
          { anchor: 'Comment', url: '/6' },
          { anchor: 'Finance', url: '/5' },
          { anchor: 'Travel', url: '/4' },
          { anchor: 'Entertainment', url: '/3' },
          { anchor: 'Life & Style', url: '/3' }
        ]
      }
    }
  },
  methods: {
    hover(e) {
      const target = e.target;
      this.accentSet(target);
    },
    accentSet(element) {
      const linkText = element.querySelector('.nav__text');

      if (!linkText) return;

      const box = linkText.getBoundingClientRect();
      const leftValue = box.left;
      const elementWidth = linkText.offsetWidth;

      Object.assign(this.$refs.accent.style, {
        width: `${elementWidth}px`,
        transform: `translateX(${leftValue}px)`,
      });
    },
  },
  mounted() {
    const activeLink = document.querySelector('.nav__link.nuxt-link-active');
    this.accentSet(activeLink);
  },
}
</script>

<style lang='scss'>
.nav {
  position: relative;
  border-bottom: 1px solid $gray__300;

  &__accent {
    position: absolute;
    height: 2px;
    width: 0;
    background-color: $red;
    left: 0;
    bottom: -2px;
    transform: translateX(0);
    transition: all ease-in 0.25s;
  }

  &__inner {
    display: flex;
    margin: 0 -25px;
  }

  &__link {
    font-size: 17px;
    line-height: 20px;
    display: inline-flex;
    letter-spacing: 0.08px;
    color: $gray__700;
    padding: 0 25px 16px;
    text-decoration: none;

    &.nuxt-link-active {
      color: $red;
    }
  }
}
</style>
