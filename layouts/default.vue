<script>
import { md, sm } from '../plugins/utils';

export default {
  name: 'LayoutDefault',
  data() {
    return {
      navItems: [],
    }
  },
  created() {
    this.navGetData();
  },
  mounted() {
    this.mediaSet();
    window.addEventListener('resize', this.resize);
  },
  methods: {
    mediaSet() {
      const isMob = window.matchMedia(`(max-width: ${sm}px)`).matches;
      const isTablet = window.matchMedia(`(min-width: ${sm + 1}px) and (max-width: ${md}px)`).matches;

      if (isMob) {
        this.$store.commit('media/mobActive');
      } else if (isTablet) {
        this.$store.commit('media/tabletActive');
      } else {
        this.$store.commit('media/desktopActive');
        this.$store.commit('nav/switchActive', false);
      }
    },
    async navGetData() {
      this.navItems = await this.$axios.$get('/data/nav.json');
    },
    resize() {
      this.mediaSet();
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
