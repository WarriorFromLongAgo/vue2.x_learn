<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <button @click="getData">getData</button> -->
    <!-- <button @click="axiosGet2">axiosGet</button> -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  /* eslint-disable */
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      TUserInfo: {
        id: 0,
        userName: "",
        accountName: "",
        passWord: "",
        idCard: 0
      },
      WrappedResponse: {
        successful: false,
        code: 0,
        message: "",
        data: ""
      }
    };
  },
  created() {
    this.getData(); // 在页面渲染完成即加载
    this.getData2(11); // 在页面渲染完成即加载
    this.deleted(); // 在页面渲染完成即加载
    let TUserInfo = {
      id: 1,
      userName: "userName",
      accountName: "accountName",
      passWord: "passWord",
      idCard: 430109198910102020
    };
    this.deleted2(TUserInfo); // 在页面渲染完成即加载
    this.deleted3(11);
  },
  methods: {
    getData() {
      axios
        .get("http://localhost:9191/axios_get")
        .then(response => {
          // console.log("axios_get = " + response.data.code);
          // console.log("axios_get = " + response.data.successful);
          // console.log("axios_get = " + response.data.message);
          // console.log("axios_get = " + response.data.data);
          let WrappedResponse = response.data;
          console.log("========================");
          console.log("axios_get = " + JSON.stringify(WrappedResponse));
          console.log("========================");
        })
        .catch(error => {
          console.log("axios_get = " + error);
        });
    },
    getData2(id) {
      console.log("getData2 = " + id);
      axios
        .get("http://localhost:9191/axios_get2?id=" + id)
        .then(response => {
          // console.log("axios_get2 = " + response.data.code);
          // console.log("axios_get2 = " + response.data.successful);
          // console.log("axios_get2 = " + response.data.message);
          // console.log("axios_get2 = " + response.data.data);
          let WrappedResponse = response.data;
          console.log("========================");
          console.log("axios_get2 = " + JSON.stringify(WrappedResponse));
          console.log("========================");
        })
        .catch(error => {
          console.log("axios_get2 = " + error);
        });
    },
    deleted() {
      axios({
        method: "post",
        url: "http://localhost:9191/axios_post"
      })
        .then(response => {
          // console.log("axios_post = " + response.data.code);
          // console.log("axios_post = " + response.data.successful);
          // console.log("axios_post = " + response.data.message);
          // console.log("axios_post = " + response.data.data);
          let WrappedResponse = response.data;
          console.log("========================");
          console.log("axios_post = " + JSON.stringify(WrappedResponse));
          console.log("========================");
        })
        .catch(error => {
          console.log("axios_post = " + error);
        });
    },
    // deleted2(TUserInfo) {
    //   console.log("deleted2 = " + JSON.stringify(TUserInfo));
    //   axios({
    //     method: "post",
    //     url: "http://localhost:9191/axios_post2",
    //     data:
    //       "?id=" +
    //       TUserInfo.id +
    //       "&userName=" +
    //       TUserInfo.userName +
    //       "&accountName=" +
    //       TUserInfo.accountName +
    //       "&password=" +
    //       TUserInfo.passWord +
    //       "&idCard=" +
    //       TUserInfo.idCard,
    //     // headers: "application/x-www-form-urlencoded;charset=UTF-8"
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json"
    //     }
    //   })
    //     .then(response => {
    //       // console.log("axios_post = " + response.data.code);
    //       // console.log("axios_post = " + response.data.successful);
    //       // console.log("axios_post = " + response.data.message);
    //       // console.log("axios_post = " + response.data.data);
    //       let WrappedResponse = response.data;
    //       console.log("========================");
    //       console.log("axios_post2 = " + JSON.stringify(WrappedResponse));
    //       console.log("========================");
    //     })
    //     .catch(error => {
    //       console.log("axios_post2 = " + error);
    //     });
    // },
    deleted2(TUserInfo) {
      console.log("deleted2 = " + JSON.stringify(TUserInfo));
      axios({
        method: "post",
        url: "http://localhost:9191/axios_post2",
        data: JSON.stringify(TUserInfo),
        // headers: "application/x-www-form-urlencoded;charset=UTF-8"
        // headers: "application/json;charset=UTF-8"
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
        .then(response => {
          // console.log("axios_post = " + response.data.code);
          // console.log("axios_post = " + response.data.successful);
          // console.log("axios_post = " + response.data.message);
          // console.log("axios_post = " + response.data.data);
          let WrappedResponse = response.data;
          console.log("========================");
          console.log("axios_post2 = " + JSON.stringify(WrappedResponse));
          console.log("========================");
        })
        .catch(error => {
          console.log("axios_post2 = " + error);
        });
    },
    deleted3(id) {
      console.log("deleted3 = " + id);
      axios({
        method: "post",
        url: "http://localhost:9191/axios_post3?id=" + id
      })
        .then(response => {
          // console.log("axios_post3 = " + response.data.code);
          // console.log("axios_post3 = " + response.data.successful);
          // console.log("axios_post3 = " + response.data.message);
          // console.log("axios_post3 = " + response.data.data);
          let WrappedResponse = response.data;
          console.log("========================");
          console.log("axios_post3 = " + JSON.stringify(WrappedResponse));
          console.log("========================");
        })
        .catch(error => {
          console.log("axios_post3 = " + error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
