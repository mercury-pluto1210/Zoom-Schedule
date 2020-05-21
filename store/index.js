import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

export const state = () => ({
  lists: [],
  lists2: [],
})

export const mutations = {
  insert: function(state, obj){
    state.lists.unshift({
      subject: obj.subject,
      meeting: obj.meeting,
      password: obj.password
    })

  },
  remove: function(state, obj) {
    state.lists.splice(state.lists.indexOf(obj), 1);
  },
}

export const plugins = [
  createPersistedState()
]
