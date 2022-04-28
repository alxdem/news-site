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
          <img
            class='header__logo-image'
            src='~/assets/images/logo.png'
            srcset='~/assets/images/logo@2x.png 2x'
            alt='Daily Express' />
        </NuxtLink>

        <div class='header__main-right'></div>
      </div>
    </div>

    <div class='header__nav'>
      <app-nav/>
    </div>
  </header>
</template>

<script>
import AppNav from './AppNav'
export default {
  name: 'AppHeader',
  components: { AppNav },
}
</script>

<style lang='scss'>
  .header {
    padding: 60px 0 0;

    &__main-wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: center;
      color: $gray__500;
    }

    &__main-left {
      display: flex;
      align-items: center;
    }

    &__info {
      display: flex;
      align-items: center;
      margin-left: 50px;
    }

    &__logo {
      display: block;
      margin: 0 auto;
    }

    &__logo-image {
      display: block;
    }

    &__nav {
      margin-top: 55px;
    }
  }
</style>
