<template>
  <div class='footer-paper'>
    <h5 v-if='title' class='footer-paper__title'>{{title}}</h5>

    <div class='footer-paper__inner'>
      <NuxtImg
        v-if='image'
        :src='image'
        :alt='title'
        sizes='xl:70px'
        class='footer-paper__image'
      />

      <div v-if='text || date' class='footer-paper__text'>
        <div v-if='date' class='footer-paper__date'>{{date}}</div>
        {{text}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FooterPaper',
    props: {
      title: {
        type: String,
        default: ''
      },
      date: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      },
      image: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang='scss'>
.footer-paper {
  max-width: 260px;

  @media ($sm) {
    text-align: center;
  }

  &__title {
    @include h5;
    margin: 0 0 10px;
  }

  &__inner {
    display: flex;
    align-items: flex-start;

    @media ($xl) {
      display: block;
    }
  }

  &__image {
    display: block;
    flex-shrink: 0;
    margin-right: 10px;

    @media ($xl) {
      margin: 0 0 10px;
    }

    @media ($sm) {
      margin: 0 auto 10px;
    }
  }

  &__text {
    font-size: 10px;
    line-height: 140%;
    font-weight: 300;
    color: $gray__700;
  }

  &__date {
    color: $black;
  }
}
</style>
