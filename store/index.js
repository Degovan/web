export const state = () => ({
  toggleNav: false,
});

// getters store
export const getters = {
  getCounter(state) {
    return state.toggleNav;
  },
};

// mutation store
export const mutations = {
  showNavbar(state) {
    state.toggleNav = !state.toggleNav;
  },
};

// action store
export const actions = {};
