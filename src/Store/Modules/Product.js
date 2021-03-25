import Vue from "Vue";
import VueResource from "vue-resource";

Vue.use(VueResource);

const state = {
  products: [],
};

const getters = {
  getProducts(state) {
    return state.products;
  },
  getProduct(state) {},
};

const mutations = {
  updateProductList(state, product) {
    state.products.push(product);
  },
};

const actions = {
  initApp({ commit }) {
    // Vue Resource işlemleri
  },
  saveProduct({ dispatch, commit, state }, payload) {
    Vue.http
      .post(
        "https://urun-islemleri-7a6d1-default-rtdb.firebaseio.com/product.json",
        payload
      )
      .then((Response) => {
        // payload.key = Response.body.name;
        // commit("updateProductList", payload);

        let tradeResult = {
          purchase: payload.price,
          sale: 0,
          count: payload.count,
        };
        this.$store.dispatch("setTradeResult", tradeResult);
      });
  },
  sellProduct({ commit }, payload) {
    // Vue Resource işlemleri
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
