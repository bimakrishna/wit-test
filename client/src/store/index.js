import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    persons: []
  },
  mutations: {
    insertPersons (state, payloads) {
      state.persons = payloads
    }
  },
  actions: {
    getPersons (context) {
      axios({
        method: 'GET',
        url: '/'
      })
        .then(result => {
          console.log(result)
          context.commit('insertPersons', result.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addPerson (context, payload) {
      return axios({
        method: 'POST',
        url: '/',
        data: {
          name: payload.name,
          alamat: payload.alamat
        }
      })
    }
  },
  modules: {
  }
})
