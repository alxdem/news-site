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
import { throttle } from '@/plugins/utils';

export default {
  name: 'AppNav',
  THROTTLED_TIME: 300,
  THROTTLE_ACCENT_SET: null,
  props: {
    items: {
      type: Array,
      default() {
        return [
          { anchor: 'Home', url: '/' },
          { anchor: 'News', url: '/about' },
          { anchor: 'Test', url: '/4' },
          { anchor: 'Test', url: '/3' },
          { anchor: 'Test', url: '/3' }
        ]
      }
    }
  },
  data() {
    return {
      activeLink: null
    }
  },
  watch: {
    async $route() {
      await this.$nextTick()
      this.activeLink = document.querySelector('.nav__link.nuxt-link-exact-active')
      this.accentSet(this.activeLink)
    }
  },
  mounted() {
    this.activeLink = document.querySelector('.nav__link.nuxt-link-exact-active')
    this.accentSet(this.activeLink)
    window.addEventListener('mouseover', this.mouseover);
    this.$options.THROTTLE_ACCENT_SET = throttle(this.accentSetToCurrentItem, this.$options.THROTTLED_TIME);
  },
  methods: {
    hover(e) {
      const target = e.target
      this.accentSet(target)
    },
    accentSet(element) {
      if (!element) return

      const linkText = element.querySelector('.nav__text')

      if (!linkText) return

      const box = linkText.getBoundingClientRect()
      const leftValue = box.left
      const elementWidth = linkText.offsetWidth

      if (this.$refs.accent) {
        Object.assign(this.$refs.accent.style, {
          width: `${elementWidth}px`,
          transform: `translateX(${leftValue}px)`
        })
      }
    },
    mouseover(e) {
      this.$options.THROTTLE_ACCENT_SET(e);
    },

    accentSetToCurrentItem(e) {
      const target = e.target
      const prevElement = e.fromElement
      const isNotNav = !target.classList.contains('nav__link') && !target.closest('.nav__link')

      if (!prevElement) return

      if (isNotNav) {
        this.accentSet(this.activeLink)
      }
    },
  }
}
</script>

<style lang='scss'>
.nav {
  position: relative;
  border-bottom: 1px solid $gray__300;

  @media($lg) {
    overflow: hidden;
  }

  &__accent {
    position: absolute;
    height: 2px;
    width: 0;
    background-color: $red;
    left: 0;
    bottom: -2px;
    transform: translateX(0);
    transition: all ease-in 0.25s;

    @media (hover: none) {
      display: none;
    }
  }

  &__inner {
    display: flex;
    flex-wrap: wrap;
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

    @media($lg) {
      font-size: 16px;
    }

    &.nuxt-link-exact-active {
      color: $red;
    }

    & > * {
      pointer-events: none;
    }
  }
}
</style>
