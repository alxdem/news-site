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
          <NuxtImg
            src='/images/logo.png'
            alt='Daily Express'
            sizes='xs:120px md:250px xl:300px'
            class='header__logo-image'
          />
        </NuxtLink>

        <div class='header__main-right'>
          <div
            v-if='!isDesktop'
            class='header__burger'
          >
            <BtnMobNavClose/>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if='isDesktop'
      class='header__nav'
    >
      <AppNav :items='navItems'/>
    </div>
  </header>
</template>

<script>
import AppNav from './AppNav'
import BtnMobNavClose from './BtnMobNavClose'
export default {
  name: 'AppHeader',
  components: { AppNav, BtnMobNavClose },
  props: {
    navItems: {
      type: Array,
      default: () => [],
    }
  },
  computed: {
    isDesktop() {
      return this.$store.state.media.isDesktop;
    }
  },
}
</script>

<style lang='scss' scoped>
  .header {
    padding: 60px 0 0;
    margin-bottom: 65px;

    @media ($xl) {
      margin-bottom: 5vw;
    }

    @media ($md) {
      padding: 5.5vw 0 0;
    }

    @media ($xs) {
      padding: 0;
      margin-bottom: 0;
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

      @media ($xs) {
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
      position: relative;
      width: 40px;
      height: 36px;

      @media ($xs) {
        width: 50px;
        height: 50px;
        margin-right: -10px;
      }
    }
  }
</style>
