<template>
  <a :href='url' class='card-news-main'>
    <div class='card-news-main__photo'>
      <nuxt-img
        v-if='image'
        :src='image'
        :alt='title'
        sizes='sm:460px md:768px lg:790px'
        class='card-news-main__image'
      />
    </div>

    <div class='card-news-main__info'>
      <div class='card-news-main__category'>{{ category }}</div>
      <div class='card-news-main__inner'>
        <div class='card-news-main__title'>{{ title }}</div>
        <div class='card-news-main__text'>{{ text }}</div>
      </div>
      <div class='card-news-main__date'>{{ date }}</div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'CardNewsMain',
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang='scss'>
.card-news-main {
  $parent: &;
  display: flex;
  width: 100%;
  height: 100%;
  text-decoration: none;

  @media ($xsm) {
    display: block;
  }

  &__photo {
    flex-shrink: 0;
    width: 48.2%;
    overflow-x: hidden;
    opacity: 1;
    background-color: $gray__700;
    transition: opacity $easing $timing;

    @media ($xl) {
      width: 48%;
    }

    @media ($sm) {
      width: 48.6%;
    }

    @media ($xsm) {
      width: 100%;
      height: 73vw;
    }

    #{$parent}:hover & {
      opacity: 0.9;
    }
  }

  &__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__info {
    background-color: $gray__100;
    padding: 30px;
    display: flex;
    flex-direction: column;

    @media ($sm) {
      padding: 30px 20px;
    }

    @media ($xsm) {
      padding: 16px 10px;
      background-color: $white;
    }
  }

  &__category {
    color: $red;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.08em;
    margin-bottom: auto;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    margin: 16px 0;
    overflow: hidden;
  }

  &__title {
    color: $black;
    font-family: $ff-title;
    font-size: 20px;
    line-height: 28px;
    overflow: hidden;
    transition: color $easing $timing;

    #{$parent}:hover & {
      color: $red;
    }
  }

  &__text {
    color: $black;
    font-size: 12px;
    line-height: 18px;
    font-weight: 300;
    margin-top: 26px;
    overflow: hidden;

    @media ($xsm) {
      margin-top: 10px;
    }
  }

  &__date {
    color: $gray__500;
    font-size: 13px;
    line-height: 16px;
    font-weight: 500;
    margin-top: auto;

    @media ($xsm) {
      font-size: 12px;
      line-height: 12px;
    }
  }
}
</style>
