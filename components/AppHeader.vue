<template>
  <header class='header'>
    <div class='wrapper'>
      <div class='header__main'>
        <div class='header__date'>Th, 26 Mar, 2020</div>
        <div class='header__info'>
          London
          <div class='header__info-temperature'>
            <app-icon name='sun' />
            12°C
          </div>
        </div>
        <img
          class='header__logo'
          src='~/assets/images/logo.png'
          srcset='~/assets/images/logo@2x.png 2x'
          alt='Daily Express' />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style lang='scss'>
  .header {
    &__main {
      display: flex;
      align-items: center;
      color: $gray__500;
    }

    &__info {
      display: flex;
      align-items: center;
    }
  }
</style>
