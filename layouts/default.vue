<template>
  <div>
    <AppHeader :nav-items='navItems' />
    <Nuxt />
    <AppNavMob :items='navItems'/>
    <AppFooter
      :nav-items='navItems'
      :entertainment-info='entertainmentInfo'
      :sport-info='sportInfo'
      :pictures-info='picturesInfo'
      :comment-info='commentInfo'
      :finance-info='financeInfo'
      :travel-info='travelInfo'
      :life-info='lifeInfo'
      :showbiz-info='showbizInfo'
      :site-info='siteInfo'
      :paper='footerPaper'
      :socials='socials'
      :creators='creators'
    />
  </div>
</template>

<script>
import { md, sm } from '../plugins/utils';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import AppNavMob from '../components/AppNavMob';

export default {
  name: 'LayoutDefault',
  components: { AppFooter, AppHeader, AppNavMob },
  MQ_SM: null,
  MQ_MD: null,
  MQ_LG: null,
  data() {
    return {
      navItems: [],
      entertainmentInfo: {},
      sportInfo: {},
      picturesInfo: {},
      commentInfo: {},
      financeInfo: {},
      travelInfo: {},
      lifeInfo: {},
      showbizInfo: {},
      siteInfo: {},
      footerPaper: {},
      socials: [],
      creators: {},
    }
  },
  created() {
    this.navGetData();
    this.footerData();
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
    async footerData() {
      const res = await this.$axios.$get('/data/footer.json');
      const {
        entertainment,
        sport,
        pictures,
        comment,
        finance,
        travel,
        life,
        showbiz,
        site,
        paper,
        socials,
        creators,
      } = res.result;

      this.entertainmentInfo = entertainment;
      this.sportInfo = sport;
      this.picturesInfo = pictures;
      this.commentInfo = comment;
      this.financeInfo = finance;
      this.travelInfo = travel;
      this.lifeInfo = life;
      this.showbizInfo = showbiz;
      this.siteInfo = site;
      this.footerPaper = paper;
      this.socials = socials;
      this.creators = creators;
    }
  }
}
</script>
