<template>
  <section
    v-if='items.length'
    :class='["nav-mob", {"nav-mob_active": isActive}]'
  >
    <div class='nav-mob__inner'>
      <NuxtLink to='/' class='nav-mob__logo'>
        <nuxt-img
          src='/images/logo.png'
          alt='Daily Express'
          sizes='xs:120px md:250px xl:300px'
          class='nav-mob__logo-image'
        />
      </NuxtLink>

      <NuxtLink
        v-for='(item, index) in items'
        :key='index'
        :to='item.url'
        class='nav-mob__link'
      >
        {{ item.anchor }}
      </NuxtLink>
    </div>

    <div class='nav-mob__close'>
      <btn-mob-nav-close/>
    </div>

    <div class='nav-mob__bg' @click='close'></div>
  </section>
</template>

<script>
import BtnMobNavClose from './BtnMobNavClose'
export default {
  name: 'AppNavMob',
  components: { BtnMobNavClose },
  props: {
    items: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      activeLink: null
    }
  },
  computed: {
    isActive() {
      return this.$store.state.nav.isActive;
    }
  },
  methods: {
    close() {
      this.$store.commit('nav/switchActive', false);
    }
  }
}
</script>

<style lang='scss' scoped>
.nav-mob {
  $parent: &;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 50;
  overflow: hidden;
  background-color: rgba($black, 0.2);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s $easing $timing;

  &_active {
    pointer-events: auto;
    opacity: 1;
    transition: opacity $easing $timing;
  }

  &__inner {
    width: calc(100% - 51px);
    max-width: 400px;
    height: 100%;
    position: relative;
    z-index: 5;
    background-color: $white;
    transform: translateX(-100%);
    transition: transform $easing $timing;

    #{$parent}_active & {
      transform: translateX(0);
    }
  }

  &__link {
    display: block;
    text-decoration: none;
    padding: 18px 20px;
    color: $gray__700;
    font-size: 17px;
    line-height: 20px;

    @media($xs) {
      padding: 16px 10px;
    }
  }

  @media($lg) {
    overflow: hidden;
  }

  &__bg {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 1;
  }

  &__close {
    position: absolute;
    z-index: 5;

    @media($md) {
      top: 5.5vw;
      right: 20px;
      background-color: $white;
      width: 40px;
      height: 36px;
      box-sizing: border-box;
    }

    @media($xs) {
      top: 0;
      right: 0;
      padding: 0;
      background-color: transparent;
      width: 50px;
      height: 50px;
    }
  }

  &__logo {
    display: flex;
    align-items: center;

    @media($md) {
      padding: 5.5vw 20px 5vw;
      border-bottom: 1px solid $gray__300;
    }

    @media($xs) {
      padding: 0 10px;
      height: 50px;
      border-bottom: 0;
    }
  }
}
</style>
