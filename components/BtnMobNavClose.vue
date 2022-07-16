<template>
  <button
    type='button'
    :class='["btn-mob-nav-close", {
      className: className,
      "btn-mob-nav-close_active": $store.state.nav.isActive
    }]'
    @click='burgerBtnClick'
  >
    <span class='btn-mob-nav-close__inner'></span>
  </button>
</template>

<script>
export default {
  name: 'BtnMobNavClose',
  props: {
    className: {
      type: String,
      default: null
    }
  },
  methods: {
    burgerBtnClick() {
      this.$store.commit('nav/switchActive', !this.$store.state.nav.isActive);
    }
  },
}
</script>

<style lang='scss' scoped>
.btn-mob-nav-close {
  $parent: &;

  @include reset-button;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &__inner {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    pointer-events: none;

    @media ($xs) {
      width: 30px;
      height: 30px;
    }

    &:before,
    &:after {
      content: '';
      position: absolute;
      left: 0;
      height: 1px;
      width: 100%;
      background-color: $black;
      transition: transform $easing $timing;
    }

    &:before {
      top: 8px;

      #{$parent}_active & {
        transform: translateY(9px) rotate(45deg);

        @media($xs) {
          transform: translateY(6px) rotate(45deg);
        }
      }
    }

    &:after {
      bottom: 8px;

      #{$parent}_active & {
        transform: translateY(-9px) rotate(-45deg);

        @media($xs) {
          transform: translateY(-6px) rotate(-45deg);
        }
      }
    }
  }
}
</style>
