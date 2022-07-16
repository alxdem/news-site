<template>
  <NuxtLink
    v-if='url'
    :to='url'
    :title='title'
    :class='["card-news", indexClassSet, typeClassSet]'
  >
    <div class='card-news__photo'>
      <nuxt-img
        v-if='image'
        :src='image'
        :alt='title'
        sizes='sm:224px md:768px lg:190px'
        class='card-news__image'
      />
    </div>

    <div class='card-news__info'>
      <div class='card-news__category'>{{ category }}</div>
      <div class='card-news__title'>{{ title }}</div>
      <div class='card-news__date'>{{ date }}</div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'CardNews',
  props: {
    category: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    date: {
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
    indexNumber: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      default: '',
    }
  },
  computed: {
    indexClassSet() {
      return this.indexNumber ? `card-news_order_${this.indexNumber}` : null;
    },
    typeClassSet() {
      return this.type ? `card-news_type_${this.type}` : null;
    }
  }
}
</script>

<style lang='scss'>
.card-news {
  $parent: &;
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  text-decoration: none;

  &_order {
    &_1 {
      padding-bottom: 20px;
    }

    &_2 {
      padding: 10px 0;
    }

    &_3 {
      padding-top: 20px;
    }
  }

  &_type_horizontal {
    display: flex;
    flex-direction: column;
    padding-top: 30px;
  }

  @media ($md) {
    display: flex;
    flex-direction: column;
  }

  &__photo {
    flex-shrink: 0;
    width: 48.1%;
    overflow-x: hidden;
    opacity: 1;
    margin-right: 30px;
    background-color: $gray__700;
    transition: opacity $easing $timing;

    @media ($xl) {
      margin-right: 2.5vw;
    }

    @media ($md) {
      width: 100%;
      margin: 0 0 15px;
      height: 18vw;
    }

    @media ($sm) {
      width: 100%;
      margin: 0 0 15px;
      height: 26vw;
    }

    @media ($xs) {
      width: 100%;
      margin: 0 0 15px;
      height: 51vw;
    }

    .card-news_type_horizontal & {
      width: 100%;
      margin: 0 0 10px;
      height: 13.1vw;
      max-height: 176px;
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
    display: flex;
    flex-direction: column;

    .card-news_type_horizontal & {
      flex-grow: 1;
    }
  }

  &__category {
    color: $red;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.08em;
    margin-bottom: 10px;
  }

  &__title {
    color: $black;
    font-family: $ff-title;
    font-size: 11px;
    line-height: 13px;
    margin: auto 0;
    overflow: hidden;
    max-height: 54px;
    transition: color $easing $timing;

    .card-news_type_horizontal & {
      margin: 0 0 10px;
    }

    #{$parent}:hover & {
      color: $red;
    }
  }

  &__date {
    color: $gray__500;
    font-size: 10px;
    line-height: 12px;
    font-weight: 500;
    margin-top: 10px;

    .card-news_type_horizontal & {
      margin-top: auto;
    }
  }
}
</style>
