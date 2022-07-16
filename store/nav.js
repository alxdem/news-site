export const state = () => ({
  isActive: false,
});

export const mutations = {
  switchActive(state, value) {
    state.isActive = value;
  }
};
