import Vue from "vue";
import VueResource from "vue-resource";

Vue.use(VueResource);

export const setTradeResult = ({ state, commit }, tradeResult) => {
  commit("updateTradeResult", tradeResult);
  let tradeData = {
    purchase: tradeResult.purchase,
    sale: tradeResult.sale,
  };
  Vue.http
    .put(
      "https://urun-islemleri-7a6d1-default-rtdb.firebaseio.com/product.json",
      tradeData
    )
    .then((response) => {
      console.log(response);
    });
};

export const getTradeResult = ({ commit }) => {};
