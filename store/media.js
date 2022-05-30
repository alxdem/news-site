export const state = () => ({
  isDesktop: false,
  isTablet: false,
  isMob: false,
});

export const mutations = {
  desktopActive(state) {
    state.isDesktop = true;
    state.isTablet = false;
    state.isMob = false;
  },
  tabletActive(state) {
    state.isTablet = true;
    state.isDesktop = false;
    state.isMob = false;
  },
  mobActive(state) {
    state.isMob = true;
    state.isDesktop = false;
    state.isTablet = true;
  }
};
