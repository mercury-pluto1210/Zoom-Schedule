<template>
  <div>
      <input type="text" v-model="subject" placeholder="科目名を入力してください">
      <input type="text" v-model="meeting" placeholder="IDを入力してください">
      <input type="text" v-model="password" placeholder="パスワードを入力してください">
      <div class="Status">
        <ul>
          <li>Password: </li>
          <li>Meeting ID: </li>
          <li>Subject: </li>
        </ul>
      </div>
      <div class="List">
        <ul>
          <li v-for="(list, index) in lists" :key="index">
            <span>{{ list.subject }}</span>
            <span>{{ list.meeting }}</span>
            <span>{{ list.password }}</span>
          </li>
        </ul>
      </div>
      <div class="button">
        <button v-on:click="insert">登録</button>
        <button v-on:click="remove(list)">削除</button>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  data: function(){
    return{
      subject: '',
      meeting: '',
      password: '',
    }
  },
  computed: {
    ...mapState(['lists'])
  },
  methods: {
    insert: function(){
      this.$store.commit('insert', {subject: this.subject});
      this.subject = '';
      this.$store.commit('insert', {meeting: this.meeting});
      this.meeting = '';
      this.$store.commit('insert', {password: this.password});
      this.password = '';
    },
    remove: function(list){
      this.$store.commit('remove', list)
    }
  }
}
</script>

<style>
  input{
    background-color: #fff;
    color: #000;
    display: block;
    margin-top: 5px;
  }

  .Status{
    float: left;
  }

  .button{
    clear: both;
  }
</style>
