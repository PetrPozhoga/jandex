import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import convertBytes from './resources/convertBytes'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    path: ''
  },
  getters: {
    convertBytes(state) {
      return state.items.map(item => {
        if (item.size) item.size = convertBytes(item.size)
        return item
      })
    },
    breadCrumbs(state) {
      let arr = state.path.split('/'), breadCrumbs = []
      arr.map((item, index) => {
        if (index <= 0) return false; else breadCrumbs.push({ path: item, title: item })
      })
      breadCrumbs.map((item, index) => {
        if (index === 0) return false
        else item.path = breadCrumbs[ index - 1 ].path + '/' + breadCrumbs[ index ].path
      })
      return breadCrumbs
    }
  },
  mutations: {
    setItems(state, { type, items }) {
      state[ type ] = items
    }
  },
  actions: {
    getYandexApi({ state, commit }, path) {
      const api = 'https://cloud-api.yandex.net:443/v1/disk/resources?path='
      let token = 'Your token'
      path = path || '/'
      let req = { headers: { Authorization: `OAuth ${token}` } }
      axios.get(`${api}${path}`, req).then(res => {
        if (!res) return
        commit('setItems', { type: 'items', items: res.data._embedded.items })
        commit('setItems', { type: 'path', items: res.data.path })
      }).catch(err => console.log(err))
    }
  }
})
