<template>
  <div>
    <el-button type="text" @click="get1">点击请求_get1</el-button>
    <br />
    <el-button type="text" @click="get2">点击请求_get2</el-button>
    <br />
    <el-button type="text" @click="post1">点击请求_post1</el-button>
    <br />
    <el-button type="text" @click="post2">点击请求_post2</el-button>
    <br />
    <el-button type="text" @click="post3">点击请求_post3</el-button>
    <br />
    <el-button type="text" @click="post4">点击请求_post4</el-button>
    <br />
    <el-button type="text" @click="post5">点击请求_post5</el-button>
    <br />
  </div>
</template>

<script>
export default {
  name: "http_test",
  data() {
    return {
      msg: "http_test",
    };
  },
  methods: {
    get1() {
      console.log("get1");
    },
    get2() {
      console.log("get2");
    },
    post1() {
      console.log("post1");
    },
    post2() {
      console.log("post2");
    },
    post3() {
      console.log("post3");
    },
    post4() {
      console.log("post4");
    },
    post5() {
      console.log("post5");
    },
  },
};
</script>

<style>
</style>
