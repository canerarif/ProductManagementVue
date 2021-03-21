const state = {
    products: []
}

const getters = {
    getProducts(state) {
        return state.products;
    },
    getProduct(state) {

    }
}

const mutations = {
    updateProductList(state, product) {
        state.products.push(product);
    }
}

const actions = {
    initApp({ commit }) {
        // Vue Resource işlemleri
    },
    saveProduct({ commit }, payload) {
        // Vue Resource işlemleri   
    },
    sellProduct({ commit }, payload) {
        // Vue Resource işlemleri   
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}