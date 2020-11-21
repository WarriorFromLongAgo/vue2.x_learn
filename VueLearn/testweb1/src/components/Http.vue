<template>
  <div>
    <div>{{ msg }}</div>
    <el-button type="text" @click="get1">点击打开 get1</el-button>
    <br />
    <el-button type="text" @click="get2">点击打开 get2</el-button>
    <br />
    <el-button type="text" @click="post1">点击打开 post1</el-button>
    <br />
    <el-button type="text" @click="post2">点击打开 post2</el-button>
    <br />
    <el-button type="text" @click="post22">点击打开 post22</el-button>
    <br />
    <el-button type="text" @click="post2FormData1"
      >点击打开 post2FormData1</el-button
    >
    <br />
    <el-button type="text" @click="post2FormData2"
      >点击打开 post2FormData2</el-button
    >
    <br />
    <el-button type="text" @click="post3">点击打开 post3</el-button>
    <br />
    <el-button type="text" @click="post4">点击打开 post4</el-button>
    <br />
    <el-button type="text" @click="post4_v2">点击打开 post4_v2</el-button>
    <br />
    <el-button type="text" @click="post5">点击打开 post5</el-button>
    <br />
    <el-button type="text" @click="courseWareModify"
      >测试修改课件名称</el-button
    >
    <br />
    onChange————onProgress————onSuccess————onChange
    <el-upload
      class="upload-demo"
      drag
      action="http://127.0.0.1:11112/index/file1"
      :on-preview="onPreview"
      :on-remove="onRemove"
      :on-success="onSuccess"
      :on-error="onError"
      :on-progress="onProgress"
      :on-change="onChange"
      :on-exceed="onExceed"
      multiple
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
    <br />
    <el-upload
      class="upload-demo"
      drag
      action="123_http:-//127.0.-0.1:-11112-/index-/f-ile1"
      :before-upload="file1"
      multiple
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
    <br />
    <el-upload
      class="upload-demo"
      ref="upload"
      action="http://127.0.0.1:11112/index/file1"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-success="onSuccess"
      :on-error="onError"
      :on-progress="onProgress"
      :on-change="onChange"
      :on-exceed="onExceed"
      :file-list="fileList"
      :auto-upload="false"
    >
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button
        style="margin-left: 10px"
        size="small"
        type="success"
        @click="submitUpload"
        >上传到服务器</el-button
      >
      <!--      <el-button style="margin-left: 10px;" size="small" type="success" @click="file1">上传到服务器</el-button>-->
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "http.vue",
  data() {
    return {
      msg: "Http Http.vue",
      fileList: [],
    };
  },
  methods: {
    get1() {
      let baseUrl = "http://127.0.0.1:11112/";
      let prefixUrl = "index/get1";
      console.log(baseUrl + prefixUrl);
      Axios({
        methods: "get",
        url: baseUrl + prefixUrl,
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          // 'Content-Type': 'application/x-www-form-urlencoded'
        },
      }).then((resp) => {
        console.log(resp);
      });
    },
    get2() {
      let baseUrl = "http://127.0.0.1:11112/";
      let prefixUrl = "index/get2";
      Axios({
        methods: "get",
        url: baseUrl + prefixUrl,
        params: {
          get2: "get2 xuegao 2020年9月15日17:32:42",
        },
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          // 'Content-Type': 'application/x-www-form-urlencoded'
        },
      }).then((resp) => {
        if (resp === null) {
          console.log("找不到服务器⊙﹏⊙∥!");
        }
        if (resp.status === 200) {
          // 成功
          let json = resp.data;
          if (json.status === "success") {
            // _this.$router.replace({path: '/test'})
            console.log("get2 返回是200 也是 success");
          } else {
            console.log("get2 返回是200 不是 success");
          }
        } else {
          console.log("get2 返回不是200");
        }
      });
    },
    // request payload
    post1() {
      let baseUrl = "http://127.0.0.1:11112/";
      let prefixUrl = "index/post1";
      let userInfo = {
        id: 11,
        name: "post1",
        username: "post1",
        password: "post1",
        createTime: new Date().getTime(),
      };
      this.$axios({
        method: "post",
        url: baseUrl + prefixUrl,
        data: JSON.stringify(userInfo),
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
        // headers: {Authorization: access_token} // 携带用户信息token
      })
        .then((res) => {
          console.log(res); // 请求成功之后返回的值，在此处进行数据展示处理
        })
        .catch((err) => {
          console.log(err); // 请求失败返回
        });
    },
    // form date
    post2() {
      let baseUrl = "http://127.0.0.1:11112/";
      let prefixUrl = "index/post2";
      let userInfo =
        "id=11&name=name&username=username&password=password&createTime=" +
        new Date().getTime();
      this.$axios({
        method: "post",
        url: baseUrl + prefixUrl,
        data: userInfo,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        // headers: {Authorization: access_token} // 携带用户信息token
      })
        .then((res) => {
          console.log(res); // 请求成功之后返回的值，在此处进行数据展示处理
        })
        .catch((err) => {
          console.log(err); // 请求失败返回
        });
    },
    // query string parameter
    post22() {
      let baseUrl = "http://127.0.0.1:11112/";
      let prefixUrl = "index/post2";
      let userInfo = {
        id: 11,
        name: "name",
        username: "username",
        password: "password",
        createTime: new Date().getTime(),
      };
      this.$axios({
        method: "post",
        url: baseUrl + prefixUrl,
        params: userInfo,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        // headers: {Authorization: access_token} // 携带用户信息token
      })
        .then((res) => {
          console.log(res); // 请求成功之后返回的值，在此处进行数据展示处理
        })
        .catch((err) => {
          console.log(err); // 请求失败返回
        });
    },
    // request payload
    post2FormData1() {
      let baseUrl = "http://127.0.0.1:11112/";
      let prefixUrl = "index/post2";
      let userInfo = new FormData();
      userInfo.append("id", 2);
      userInfo.append("name", "name");
      userInfo.append("username", "username");
      userInfo.append("password", "password");
      userInfo.append("createTime", new Date().getTime());
      this.$axios({
        method: "post",
        url: baseUrl + prefixUrl,
        data: userInfo,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        // headers: {Authorization: access_token} // 携带用户信息token
      })
        .then((res) => {
          console.log(res); // 请求成功之后返回的值，在此处进行数据展示处理
        })
        .catch((err) => {
          console.log(err); // 请求失败返回
        });
    },
    // 和 post2 一样
    post2FormData2() {
      let baseUrl = "http://127.0.0.1:11112/";
      let prefixUrl = "index/post2";
      this.$axios({
        method: "post",
        url: baseUrl + prefixUrl,
        data: this.$qs.stringify({
          id: 11,
          name: "name",
          username: "username",
          password: "password",
          createTime: new Date().getTime(),
        }),
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          "Content-Type": "multipart/form-data",
        },
        // headers: {Authorization: access_token} // 携带用户信息token
      })
        .then((res) => {
          console.log(res); // 请求成功之后返回的值，在此处进行数据展示处理
        })
        .catch((err) => {
          console.log(err); // 请求失败返回
        });
    },
    post3() {
      let baseUrl = "http://127.0.0.1:11112/";
      let prefixUrl = "index/post3";
      let params = {
        post3: "post3",
      };
      this.$axios({
        method: "post",
        url: baseUrl + prefixUrl,
        params: params,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        // headers: {Authorization: access_token} // 携带用户信息token
      })
        .then((res) => {
          console.log(res); // 请求成功之后返回的值，在此处进行数据展示处理
        })
        .catch((err) => {
          console.log(err); // 请求失败返回
        });
    },
    // 前端无法做到，同时传递两个对象，并且是有重复属性的对象
    post4() {
      // let baseUrl = 'http://127.0.0.1:11112/';
      // let prefixUrl = 'index/post4';
      // let userInfo = {
      //   id: 11,
      //   name: 'post1',
      //   username: 'post1',
      //   password: 'post1',
      //   createTime: new Date().getTime()
      // };
      // let requestDTO = {
      //   id: 11,
      //   name: 'post4',
      //   price: 'post4',
      //   stocks: 100,
      //   description: 'post4'
      // };
      // // const obj = {
      // //   userInfo: userInfo,
      // //   requestDTO: requestDTO
      // // }
      // const obj = {
      //   postParams: [{
      //     key: '',
      //     value: ''
      //   }]
      // }
      // const params = {}
      // obj.postParams.map(userInfo => {
      //   params[userInfo.key] = userInfo.value
      // })
      // obj.postParams.map(requestDTO => {
      //   params[requestDTO.key] = requestDTO.value
      // })
      // console.log(obj)
      // this.$axios({
      //   method: "post",
      //   url: baseUrl + prefixUrl,
      //   data: obj,
      //   headers: {
      //     'Content-Type': 'application/json;charset=UTF-8'
      //   }
      //   // headers: {Authorization: access_token} // 携带用户信息token
      // }).then(res => {
      //   console.log(res); // 请求成功之后返回的值，在此处进行数据展示处理
      // }).catch(err => {
      //   console.log(err); // 请求失败返回
      // });
    },
    post4_v2() {
      let baseUrl = "http://127.0.0.1:11112/";
      let prefixUrl = "index/post4_v2";
      let userInfo = {
        id: 11,
        name: "post4_v2",
        username: "post4_v2",
        password: "post4_v2",
        createTime: new Date().getTime(),
      };
      let pageQuery = {
        pageNum: 10,
        pageSize: 10,
        queryData: userInfo,
      };
      this.$axios({
        method: "post",
        url: baseUrl + prefixUrl,
        data: JSON.stringify(pageQuery),
        // data: {userInfo: JSON.stringify(userInfo)},
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
        // headers: {Authorization: access_token} // 携带用户信息token
      })
        .then((res) => {
          console.log(res); // 请求成功之后返回的值，在此处进行数据展示处理
        })
        .catch((err) => {
          console.log(err); // 请求失败返回
        });
    },
    post5() {
      let baseUrl = "http://127.0.0.1:11112/";
      let prefixUrl = "index/post5";
      let userInfo = {
        id: 11,
        name: "post5",
        username: "post5",
        password: "post5",
        createTime: new Date().getTime(),
      };
      let params = {
        post5: "post5",
      };
      this.$axios({
        method: "post",
        url: baseUrl + prefixUrl,
        data: JSON.stringify(userInfo),
        params: params,
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
        // headers: {Authorization: access_token} // 携带用户信息token
      })
        .then((res) => {
          console.log(res); // 请求成功之后返回的值，在此处进行数据展示处理
        })
        .catch((err) => {
          console.log(err); // 请求失败返回
        });
    },
    courseWareModify() {
      let baseUrl = "http://127.0.0.1:9000/";
      let prefixUrl = "courseWare/modify";
      let params = {
        id: "26",
        name: "courseWareModify_26"
      };
      this.$axios({
        method: "post",
        url: baseUrl + prefixUrl,
        params: params,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        // headers: {Authorization: access_token} // 携带用户信息token
      })
        .then((res) => {
          console.log(res); // 请求成功之后返回的值，在此处进行数据展示处理
        })
        .catch((err) => {
          console.log(err); // 请求失败返回
        });
    },

    // https://www.cnblogs.com/youngniu/p/12533346.html
    file1(uploadFile) {
      console.log("file1");
      let baseUrl = "http://127.0.0.1:11112/";
      let prefixUrl = "index/file1";
      let file = new FormData();
      file.append("file", uploadFile);
      this.$axios({
        method: "post",
        url: baseUrl + prefixUrl,
        data: file,
        // headers: {
        //   'Content-Type': 'multipart/form-data'
        // }
        // headers: {Authorization: access_token} // 携带用户信息token
      })
        .then((res) => {
          console.log(res); // 请求成功之后返回的值，在此处进行数据展示处理
        })
        .catch((err) => {
          console.log(err); // 请求失败返回
        });
    },
    submitUpload() {
      console.log("submitUpload");
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
      console.log("handleRemove");
    },
    handlePreview(file) {
      console.log(file);
      console.log("handlePreview");
    },
    onPreview() {
      console.log("onPreview");
    },
    onRemove() {
      console.log("onRemove");
    },
    onSuccess() {
      console.log("onSuccess");
    },
    onError() {
      console.log("onError");
    },
    onProgress() {
      console.log("onProgress");
    },
    onChange() {
      console.log("onChange");
    },
    onExceed() {
      console.log("onExceed");
    },
    // 文件上传
    fileUploadSuccess(respones, file, fileList) {
      console.log("fileUploadSuccess", respones, file, fileList);
      const img = new Image();
      img.src = this.$global.imgHost + respones.data[0].fullPath;
      let width = "";
      let height = "";
      img.onload = () => {
        width = img.width;
        height = img.height;
        if (width < 730 || width > 770 || height < 410 || height > 430) {
          this.$message.warning("尺寸不符合");
        } else {
          this.$emit("callBack", respones.data[0].fullPath);
        }
        this.$emit("callBack", respones.data[0].fullPath);
        this.imgSrc = img.src;
        console.log(width + "  " + height);
      };
    },
  },
};
</script>

<style scoped>
</style>
