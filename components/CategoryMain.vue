<template>
  <div class='category-main'>
    <div
      v-if='isTablet'
      class='category-main__tablet'
    >
      <card-news-main
        v-if='items[0]'
        :title='items[0].title'
        :text='items[0].text'
        :url='items[0].url'
        :image='items[0].images'
        :date='items[0].date'
        :category='items[0].category'
      />

      <div class='category-main__slider'>
        <div
          ref='mySwiper'
          v-swiper:partners='swiperOptions'
          class='category-main__slider-container swiper-container'
        >
          <div class='category-main__slider-wrapper swiper-wrapper'>
            <div
              v-for='(item, index) in itemsSwiper'
              :key='item.title'
              class='category-main__item swiper-slide'
              :class='`category-main__item_${index}`'
            >
              <card-news
                :title='item.title'
                :url='item.url'
                :image='item.images'
                :date='item.date'
                :category='item.category'
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-else
      class='category-main__grid'
    >
      <div
        v-for='(item, index) in items'
        :key='item.title'
        class='category-main__item'
        :class='`category-main__item_${index}`'
      >
        <card-news-main
          v-if='index === 0'
          :title='item.title'
          :text='item.text'
          :url='item.url'
          :image='item.images'
          :date='item.date'
          :category='item.category'
        />

        <card-news
          v-if='index >= 1 && index <= 3'
          :title='item.title'
          :url='item.url'
          :image='item.images'
          :date='item.date'
          :category='item.category'
          :index-number='index'
        />

        <card-news
          v-if='index >= 4 && index <= 9'
          :title='item.title'
          :url='item.url'
          :image='item.images'
          :date='item.date'
          :category='item.category'
          type='horizontal'
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { md, sm, xsm } from '../plugins/utils';
import CardNewsMain from './CardNewsMain'
import CardNews from './CardNews'
export default {
  name: 'CategoryMain',
  components: {
    CardNews,
    CardNewsMain
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
          [`${md}`]: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          [`${sm}`]: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          [`${xsm}`]: {
            slidesPerView: 'auto',
            spaceBetween: 10,
          },
        },
      },
      itemsSwiper: [],
    }
  },
  computed: {
    isTablet() {
      return this.$store.state.media.isTablet;
    }
  },
  mounted() {
    this.itemsSwiper = this.items.slice(1);
    window.addEventListener('resize', this.resize);
  },
  methods: {

  },
}
</script>

<style lang='scss'>
  .category-main {
    &__tablet {
      @media ($xsm) {
        margin-left: -10px;
        margin-right: -10px;
      }
    }

    &__grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: 132px 132px 132px 320px;
      grid-column-gap: 30px;
      grid-template-areas:
      'a a a a b b'
      'a a a a c c'
      'a a a a d d'
      'e f g h i j';

      @media ($xl) {
        grid-template-rows: 132px 132px 132px 300px;
      }
    }

    &__title {
      font-family: $ff-base;
      font-size: 21px;
      line-height: 26px;
      font-weight: 400;
      margin: 0 0 20px;
    }

    &__item {
      position: relative;
      overflow: hidden;

      &:nth-child(1) {
        grid-area: a;
      }

      &:nth-child(2) {
        grid-area: b;
      }

      &:nth-child(3) {
        grid-area: c;
      }

      &:nth-child(4) {
        grid-area: d;
      }

      &:nth-child(5) {
        grid-area: e;
      }

      &:nth-child(6) {
        grid-area: f;
      }

      &:nth-child(7) {
        grid-area: g;
      }

      &:nth-child(8) {
        grid-area: h;
      }

      &:nth-child(9) {
        grid-area: i;
      }

      &:nth-child(10) {
        grid-area: j;
      }

      @media ($xsm) {
        width: 70vw;
      }
    }

    img {
      width: 100%;
      display: block;
      height: 100%;
      object-fit: cover;
    }

    &__slider {
      position: relative;
      width: 100%;
      overflow: hidden;
      margin-top: 30px;
    }

    &__slider-wrapper {
      @media ($xsm) {
        padding: 0 10px;
      }
    }
  }
</style>
