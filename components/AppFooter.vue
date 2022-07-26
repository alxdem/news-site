<template>
  <footer class='footer'>
    <div class='wrapper'>
      <div class='footer__inner'>
        <div class='footer__section'>
          <div
            v-if='navItems.length'
            class='footer__item'
          >
            <FooterList
              title='Categories'
              :items='navItems'
            />
          </div>

          <div
            v-if='entertainmentInfo.items'
            class='footer__item footer__item_entertainment'
          >
            <FooterList
              :title='entertainmentInfo.title'
              :items='entertainmentInfo.items'
            />
          </div>
        </div>

        <div v-if='isDesktop' class='footer__section'>
          <div
            v-if='sportInfo.items'
            class='footer__item footer__item_sport'
          >
            <FooterList
              :title='sportInfo.title'
              :items='sportInfo.items'
            />
          </div>
        </div>

        <div v-if='isDesktop' class='footer__section'>
          <div
            v-if='picturesInfo.items'
            class='footer__item footer__item_sport'
          >
            <FooterList
              :title='picturesInfo.title'
              :items='picturesInfo.items'
            />
          </div>

          <div
            v-if='commentInfo.items'
            class='footer__item footer__item_sport'
          >
            <FooterList
              :title='commentInfo.title'
              :items='commentInfo.items'
            />
          </div>

          <div
            v-if='financeInfo.items'
            class='footer__item footer__item_sport'
          >
            <FooterList
              :title='financeInfo.title'
              :items='financeInfo.items'
            />
          </div>

          <div
            v-if='travelInfo.items'
            class='footer__item footer__item_sport'
          >
            <FooterList
              :title='travelInfo.title'
              :items='travelInfo.items'
            />
          </div>
        </div>

        <div v-if='isDesktop' class='footer__section'>
          <div
            v-if='lifeInfo.items'
            class='footer__item footer__item_sport'
          >
            <FooterList
              :title='lifeInfo.title'
              :items='lifeInfo.items'
            />
          </div>

          <div
            v-if='showbizInfo.items'
            class='footer__item footer__item_sport'
          >
            <FooterList
              :title='showbizInfo.title'
              :items='showbizInfo.items'
            />
          </div>
        </div>

        <div class='footer__section'>
          <div
            v-if='siteInfo.items'
            class='footer__item footer__item_sport'
          >
            <FooterList
              :title='siteInfo.title'
              :items='siteInfo.items'
            />
          </div>
        </div>

        <div class='footer__section footer__section_info'>
          <div
            v-if='paper.text || paper.image'
            class='footer__item'
          >
            <FooterPaper
              :title='paper.title'
              :date='paper.date'
              :text='paper.text'
              :image='paper.image'
            />
          </div>

          <div v-if='socials' class='footer__item'>
            <AppSocials :items='socials'/>
          </div>

          <div v-if='creators.items' class='footer__item'>
            <FooterList
              :title='creators.title'
              :items='creators.items'
            />
          </div>
        </div>
      </div>

      <div class='footer__copyright'>
        IPSO RegulatedCopyright &copy;{{getCurrentYear}} Express Newspapers. &laquo;Daily Express&raquo; is&nbsp;a&nbsp;registered trademark. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script>
import FooterList from './FooterList';
import FooterPaper from './FooterPaper';
import AppSocials from './AppSocials';

export default {
  name: 'AppFooter',
  components: {FooterList, FooterPaper, AppSocials},
  props: {
    sections: {
      type: Object,
      default: () => {}
    },
    navItems: {
      type: Array,
      default: () => []
    },
    entertainmentInfo: {
      type: Object,
      default: () => {}
    },
    sportInfo: {
      type: Object,
      default: () => {}
    },
    picturesInfo: {
      type: Object,
      default: () => {}
    },
    commentInfo: {
      type: Object,
      default: () => {}
    },
    financeInfo: {
      type: Object,
      default: () => {}
    },
    travelInfo: {
      type: Object,
      default: () => {}
    },
    lifeInfo: {
      type: Object,
      default: () => {}
    },
    showbizInfo: {
      type: Object,
      default: () => {}
    },
    siteInfo: {
      type: Object,
      default: () => {}
    },
    paper: {
      type: Object,
      default: () => {}
    },
    socials: {
      type: Array,
      default: () => []
    },
    creators: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    getCurrentYear() {
      const now = new Date();

      return now.getFullYear();
    },
    isDesktop() {
      return this.$store.state.media.isDesktop;
    }
  }
}
</script>

<style lang='scss'>
  .footer {
    $f: &;
    padding: 3.1vw 0;
    margin-top: 6.6vw;
    border-top: 1px solid $gray__300;

    @media ($md) {
      padding: 4.2vw 0;
    }

    @media ($sm) {
      padding: 5.7vw 0;
    }

    @media ($xs) {
      padding: 8vw 0;
    }

    &__inner {
      display: grid;
      gap: 30px;
      grid-template-columns: repeat(6, 1fr);

      @media ($md) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media ($sm) {
        grid-template-columns: 1fr;
        grid-gap: 0;
      }
    }

    &__section {
      &_info {
        @media ($sm) {
          margin-top: 4.5vw;
        }

        @media ($xs) {
          margin-top: 6vw;
        }
      }
    }

    &__item {
      &:not(:last-child) {
        margin-bottom: 2.1vw;

        @media ($lg) {
          margin-bottom: 2.5vw;
        }

        @media ($sm) {
          margin-bottom: 0;
        }

        #{$f}__section_info & {
          @media ($sm) {
            margin-bottom: 4.5vw;
            display: flex;
            justify-content: center;
          }

          @media ($xs) {
            margin-bottom: 6vw;
          }
        }
      }

      @media ($xs) {
        margin-left: -10px;
        margin-right: -10px;
        margin-bottom: 0;
      }
    }

    &__copyright {
      font-size: 13px;
      line-height: 140%;
      color: $gray__700;
      text-align: center;
      margin-top: 3.1vw;

      @media ($sm) {
        margin-top: 5.7vw;
      }

      @media ($xs) {
        margin-top: 8vw;
      }
    }
  }
</style>
