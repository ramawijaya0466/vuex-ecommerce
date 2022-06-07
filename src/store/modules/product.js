import axios from 'axios'

export const product = {
    namespaced: true,
    state: {
        products: []
    },
    getters: {
        getProducts: (state) => {
            return state.products
        }
    },
    mutations: {
        setProducts(state, payload) {
            state.products = payload
        } 
    },
    actions: {
        fetchProducts({ commit }) {
            axios.get('https://629f940f8b939d3dc29b0ada.mockapi.io/api/products').then((response) => {
                commit('setProducts', response.data)
            })
        }
    },
}