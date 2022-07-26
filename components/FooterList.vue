<template>
  <div :class='["footer-list", {"footer-list_open": isOpen}]'>
    <h5
      v-if='title'
      class='footer-list__title'
      @click='titleClick'
    >
      {{ title }}
      <div v-if='isMob' class='footer-list__title-icon'>
        <AppIcon name='arrow' />
      </div>
    </h5>
    <div class='footer-list__wrapper' :style="{ height: height }">
      <ul
        v-if='items && items.length'
        ref='list'
        class='footer-list__items'
      >
        <li
          v-for='(item, index) in items'
          :key='index'
          class='footer-list__item'
        >
          <a
            v-if='item.isExternal'
            target='_blank'
            :title='item.anchor'
            :href='item.url'
            class='footer-list__link'
          >
            {{ item.anchor }}
          </a>

          <NuxtLink
            v-else
            :to='item.url'
            :title='item.anchor'
            class='footer-list__link'
          >
            {{ item.anchor }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterList',
  props: {
    title: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      isOpen: false,
      height: 'auto',
    }
  },
  computed: {
    isMob() {
      return this.$store.state.media.isMob;
    }
  },
  watch: {
    isMob() {
      this.heightSet();
    }
  },
  methods: {
    titleClick() {
      if (this.isMob && this.$refs.list) {
        const height = this.$refs.list.offsetHeight;

        this.isOpen = !this.isOpen;
        this.height = this.isOpen ? height + 'px' : 0;
      }
    },
    heightSet() {
      this.height = this.isMob ? 0 : 'auto';

      if (!this.isMob) {
        this.isOpen = false;
      }
    }
  },
}
</script>

<style lang='scss'>
  .footer-list {
    $fl: &;

    &__title {
      @include h5;
      margin: 0 0 10px;

      @media ($sm) {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 11px 10px;
        background-color: $gray__300;
        margin-bottom: 0;
      }
    }

    &__title-icon {
      width: 12px;
      height: 12px;
      color: $black;
      flex-shrink: 0;
      display: block;
      margin-left: 8px;
      transform: rotate(180deg);
      transition: transform $easing $timing;

      #{$fl}_open & {
        transform: rotate(0);
      }
    }

    &__wrapper {
      @media ($sm) {
        position: relative;
        overflow: hidden;
        height: 0;
        transition: height $easing $timing;
      }
    }

    &__items {
      margin: 0;
      padding: 0;
      font-size: 13px;
      line-height: 120%;
      font-weight: 300;

      @media ($sm) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        font-size: 16px;
      }
    }

    &__item {
      list-style: none;

      &:not(:last-child) {
        margin-bottom: 8px;

        @media ($sm) {
          margin: 0;
        }
      }
    }

    &__link {
      text-decoration: none;
      color: $gray__700;
      transition: color $easing $timing;

      @media ($sm) {
        padding: 10px 10px;
        display: block;
        text-align: center;
      }

      #{$fl}__item:not(:last-child) & {
        @media ($sm) {
          border-bottom: 1px solid $gray__300;
        }
      }

      &:hover {
        color: $red;
      }
    }
  }
</style>
