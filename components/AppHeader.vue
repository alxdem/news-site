<template>
  <header class='header'>
    <div class='header__main'
    >
      <div class='wrapper header__main-wrapper'>
        <div class='header__main-left'>
          <div class='header__date'>Th, 26 Mar, 2020</div>
          <div class='header__info'>
            London
            <div class='header__info-temperature'>
              <app-icon name='sun' />
              12°C
            </div>
          </div>
        </div>

        <NuxtLink to='/' class='header__logo'>
          <nuxt-img
            src='/images/logo.png'
            alt='Daily Express'
            sizes='xsm:120px md:250px xl:300px'
            class='header__logo-image'
          />
        </NuxtLink>

        <div class='header__main-right'>
          <button
            v-if='!isDesktop'
            type='button'
            class='header__burger'
            @click='burgerBtnClick'
          ></button>
        </div>
      </div>
    </div>

    <div
      v-if='isDesktop'
      class='header__nav'
    >
      <app-nav/>
    </div>

    <div
      v-if='isMobNavActive'
      class='header__nav-mob'
    >
      fdsfsdf<br/>
      fdsfsdf<br/>
      fdsfsdf<br/>
      fdsfsdf<br/>
    </div>
  </header>
</template>

<script>
import AppNav from './AppNav'
export default {
  name: 'AppHeader',
  components: { AppNav },
  props: {
    navItems: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      isMobNavActive: false,
    }
  },
  computed: {
    isDesktop() {
      return this.$store.state.media.isDesktop;
    }
  },
  methods: {
    burgerBtnClick() {
      this.isMobNavActive = !this.isMobNavActive;
    }
  },
}
</script>

<style lang='scss'>
  .header {
    padding: 60px 0 0;
    margin-bottom: 65px;

    @media ($xl) {
      margin-bottom: 5vw;
    }

    @media ($md) {
      padding: 5.5vw 0 0;
    }

    @media ($xsm) {
      padding: 38px 0 0;
    }

    &__main-wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: center;
      color: $gray__500;

      @media ($md) {
        display: flex;
        justify-content: space-between;
      }
    }

    &__main-left {
      display: flex;
      align-items: center;

      @media ($md) {
        display: none;
      }
    }

    &__info {
      display: flex;
      align-items: center;
      margin-left: 50px;
    }

    &__logo {
      display: block;
      margin: 0 auto;

      @media ($md) {
        margin: 0 30px 0 0;
      }
    }

    &__logo-image {
      display: block;

      @media ($md) {
        width: 250px;
      }

      @media ($xsm) {
        width: 120px;
      }
    }

    &__nav {
      margin-top: 55px;

      @media ($md) {
        margin-top: 5.5vw;
      }
    }

    &__burger {
      @include reset-button;
      position: relative;
      width: 40px;
      height: 36px;

      &:before,
      &:after {
        content: '';
        position: absolute;
        left: 0;
        height: 1px;
        width: 100%;
        background-color: $black;
      }

      &:before {
        top: 8px;
      }

      &:after {
        bottom: 8px;
      }
    }
  }
</style>
