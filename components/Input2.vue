<template>
  <div>
      <input type="text" v-model="subject2" placeholder="科目名を入力してください">
      <input type="text" v-model="meeting2" placeholder="IDを入力してください">
      <input type="text" v-model="password2" placeholder="パスワードを入力してください">
      <div class="Status">
        <ul>
          <li>Subject: </li>
          <li>Meeting ID: </li>
          <li>Password: </li>
        </ul>
      </div>
      <div class="List">
        <ul>
          <li v-for="(list2, index) in lists2" :key="index">
            <span>{{ list2.subject2 }}</span>
            <span>{{ list2.meeting2 }}</span>
            <span>{{ list2.password2 }}</span>
          </li>
        </ul>
      </div>
      <div class="button">
        <button v-on:click="insert">登録</button>
        <button v-on:click="remove(list2)">削除</button>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  data: function(){
    return{
      subject2: '',
      meeting2: '',
      password2: '',
    }
  },
  computed: {
    ...mapState(['lists2'])
  },
  methods: {
    insert: function(){
      this.$store.commit('insert', {subject2: this.subject2});
      this.subject2 = '';
      this.$store.commit('insert', {meeting2: this.meeting2});
      this.meeting2 = '';
      this.$store.commit('insert', {password2: this.password2});
      this.password2 = '';
    },
    remove: function(list2){
      this.$store.commit('remove', list2)
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
