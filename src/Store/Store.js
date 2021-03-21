import Vue from "vue";
import Vuex from "vuex";
import Product from "./Modules/Product";
import * as Getters from "./Getters";
import * as Actions from "./Actions";
import * as Mutations from "./Mutations";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        purchase:0.0,
        sale : 0.0,
        balance : 0.0 
    },
    Getters,
    Actions,
    Mutations,
    modules: {
        Product
    }
});