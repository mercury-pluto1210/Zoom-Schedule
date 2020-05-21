import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

export const state = () => ({
  lists2: [],
})

export const mutations = {
  insert: function(state, obj2){
    state.lists2.unshift({
      subject2: obj2.subject2,
      meeting2: obj2.meeting2,
      password2: obj2.password2
    })
  },
  remove: function(state, obj2) {
    state.lists2.splice(state.lists2.indexOf(obj2), 1);
  }
}

export const plugins = [
  createPersistedState()
]
