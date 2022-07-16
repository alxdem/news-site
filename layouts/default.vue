<script>
import { md, sm } from '../plugins/utils';

export default {
  name: 'LayoutDefault',
  MQ_SM: null,
  MQ_MD: null,
  MQ_LG: null,
  data() {
    return {
      navItems: [],
    }
  },
  created() {
    this.navGetData();
  },
  mounted() {
    this.mediaStatusInit();
    this.mediaSet();
  },
  methods: {
    mediaSet() {
      if (this.$options.MQ_SM.matches) {
        this.$store.commit('media/mobActive');
      }

      if (this.$options.MQ_MD.matches) {
        this.$store.commit('media/tabletActive');
      }

      if (this.$options.MQ_LG.matches) {
        this.$store.commit('media/desktopActive');
        this.$store.commit('nav/switchActive', false);
      }
    },
    mediaStatusInit() {
      this.$options.MQ_SM = window.matchMedia(`(max-width:${sm}px)`);
      this.$options.MQ_MD = window.matchMedia(`(min-width: ${sm + 1}px) and (max-width: ${md}px)`);
      this.$options.MQ_LG = window.matchMedia(`(min-width: ${md + 1}px)`);

      this.$options.MQ_SM.onchange = (e) => {
        if (e.matches) {
          this.$store.commit('media/mobActive');
        }
      }

      this.$options.MQ_MD.onchange = (e) => {
        if (e.matches) {
          this.$store.commit('media/tabletActive');
        }
      }

      this.$options.MQ_LG.onchange = (e) => {
        if (e.matches) {
          this.$store.commit('media/desktopActive');
          this.$store.commit('nav/switchActive', false);
        }
      }
    },
    async navGetData() {
      this.navItems = await this.$axios.$get('/data/nav.json');
    },
  }
}
</script>

<template>
  <div>
    <app-header :nav-items='navItems' />
    <Nuxt />
    <app-nav-mob :items='navItems'/>
  </div>
</template>
