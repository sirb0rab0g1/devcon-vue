import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      personalInfo: []
    },

    actions: {
    fetchPersonalInfo: ({ commit }) => {
    	let url = `http://localhost:8000/basic/`
      return new Promise((resolve, reject) => {
	      axios.get(url)
	          .then(response => {
	            resolve(response.data)
	          })
	          .catch(error => {
	            reject(error.response)
	          })
	    })
	  },
    removePersonalInfo: ({ commit }, id) => {
      let url = `http://localhost:8000/basic/` + id + `/`
      return new Promise((resolve, reject) => {
        axios.delete(url)
            .then(response => {
              resolve(response.data)
            })
            .catch(error => {
              reject(error.response)
            })
      })
    },
    postPersonalInfo: ({ commit }, payload) => {
      let url = `http://localhost:8000/basic/`
      return new Promise((resolve, reject) => {
        axios.post(url, payload)
            .then(response => {
              resolve(response.data)
            })
            .catch(error => {
              reject(error.response)
            })
      })
    },
    updatePersonalInfo: ({ commit }, payload) => {
      let url = `http://localhost:8000/basic/${payload.id}/`
      return new Promise((resolve, reject) => {
        axios.patch(url, payload)
            .then(response => {
              resolve(response.data)
            })
            .catch(error => {
              reject(error.response)
            })
      })
    }
    },

    mutations: {
        setPersonalInfo: (state, personalInfo) => {
    	    state.personalInfo = personalInfo
    	  }
    },

    getters: {
      personalInfo: state => state.personalInfo
    }
  })
}