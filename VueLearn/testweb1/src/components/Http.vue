<template>
  <div>
    <div>{{ msg }}</div>
    <el-button type="text" @click="get1">点击打开 get1</el-button>
    <br>
    <el-button type="text" @click="get2">点击打开 get2</el-button>
    <br>
    <el-button type="text" @click="post1">点击打开 post1</el-button>
    <br>
    <el-button type="text" @click="post2">点击打开 post2</el-button>
    <br>
    <el-button type="text" @click="post22">点击打开 post22</el-button>
    <br>
    <el-button type="text" @click="post2FormData1">点击打开 post2FormData1</el-button>
    <br>
    <el-button type="text" @click="post2FormData2">点击打开 post2FormData2</el-button>
    <br>
  </div>


</template>

<script>
import Axios from 'axios';


export default {
  name: "http.vue",
  data() {
    return {
      msg: 'Http Http.vue'
    }
  },
  methods: {
    get1() {
      let baseUrl = 'http://127.0.0.1:11112/';
      let prefixUrl = 'index/get1';
      console.log(baseUrl + prefixUrl)
      Axios({
        methods: 'get',
        url: baseUrl + prefixUrl,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
          // 'Content-Type': 'application/x-www-form-urlencoded'
        },
      }).then(resp => {
        console.log(resp)
      })
    },
    get2() {
      let baseUrl = 'http://127.0.0.1:11112/';
      let prefixUrl = 'index/get2';
      Axios({
        methods: 'get',
        url: baseUrl + prefixUrl,
        params: {
          'get2': 'get2 xuegao 2020年9月15日17:32:42'
        },
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
          // 'Content-Type': 'application/x-www-form-urlencoded'
        },
      }).then(resp => {
        if (resp === null) {
          console.log('找不到服务器⊙﹏⊙∥!')
        }
        if (resp.status === 200) {
          // 成功
          let json = resp.data
          if (json.status === 'success') {
            // _this.$router.replace({path: '/test'})
            console.log('get2 返回是200 也是 success')
          } else {
            console.log('get2 返回是200 不是 success')
          }
        } else {
          console.log('get2 返回不是200')
        }
      })
    },
    post1() {

    },
    // form date
    post2() {
      let baseUrl = 'http://127.0.0.1:11112/';
      let prefixUrl = 'index/post2';
      let userInfo = 'id=11&name=name&username=username&password=password&createTime=' + new Date().getTime();
      this.$axios({
        method: "post",
        url: baseUrl + prefixUrl,
        data: userInfo,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
        // headers: {Authorization: access_token} // 携带用户信息token
      }).then(res => {
        console.log(res); // 请求成功之后返回的值，在此处进行数据展示处理
      }).catch(err => {
        console.log(err); // 请求失败返回
      });
    },
    // query string parameter
    post22() {
      let baseUrl = 'http://127.0.0.1:11112/';
      let prefixUrl = 'index/post2';
      let userInfo = {
        id: 11,
        name: 'name',
        username: 'username',
        password: 'password',
        createTime: new Date().getTime()
      };
      this.$axios({
        method: "post",
        url: baseUrl + prefixUrl,
        params: userInfo,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
        // headers: {Authorization: access_token} // 携带用户信息token
      }).then(res => {
        console.log(res); // 请求成功之后返回的值，在此处进行数据展示处理
      }).catch(err => {
        console.log(err); // 请求失败返回
      });
    },
    // request payload
    post2FormData1() {
      let baseUrl = 'http://127.0.0.1:11112/';
      let prefixUrl = 'index/post2';
      let userInfo = new FormData();
      userInfo.append('id', 2);
      userInfo.append('name', 'name');
      userInfo.append('username', 'username');
      userInfo.append('password', 'password');
      userInfo.append('createTime', new Date().getTime());
      this.$axios({
        method: "post",
        url: baseUrl + prefixUrl,
        data: userInfo,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
        // headers: {Authorization: access_token} // 携带用户信息token
      }).then(res => {
        console.log(res); // 请求成功之后返回的值，在此处进行数据展示处理
      }).catch(err => {
        console.log(err); // 请求失败返回
      });
    },
    // 和 post2 一样
    post2FormData2() {
      let baseUrl = 'http://127.0.0.1:11112/';
      let prefixUrl = 'index/post2';
      this.$axios({
        method: "post",
        url: baseUrl + prefixUrl,
        data: this.$qs.stringify({
          id: 11,
          name: 'name',
          username: 'username',
          password: 'password',
          createTime: new Date().getTime()
        }),
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          'Content-Type': 'multipart/form-data'
        }
        // headers: {Authorization: access_token} // 携带用户信息token
      }).then(res => {
        console.log(res); // 请求成功之后返回的值，在此处进行数据展示处理
      }).catch(err => {
        console.log(err); // 请求失败返回
      });
    },
    post3() {

    },
    post4() {

    },
    post5() {

    },
    file1() {

    },
  }


}

</script>

<style scoped>

</style>