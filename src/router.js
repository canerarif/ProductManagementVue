import VueRoutes from 'vue-router'
import Vue from 'vue'
import ProductList from './Components/Products/ProductList.vue'
import ProductSell from './Components/Products/ProductSell.vue'
import ProductPurchase from './Components/Products/ProductPurchase.vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    { path : "/", component:ProductList},
    { path : "/urun-islemleri", component:ProductPurchase},
    { path : "/urun-cikis", component:ProductSell},
    { path : "*", redirect:"/"}
];

export const router = new VueRouter({
    mode:"history",
    routes
});