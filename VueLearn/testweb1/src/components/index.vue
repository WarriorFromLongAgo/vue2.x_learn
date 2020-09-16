<template>
  <div id="main">
    <div class="post box">
      <p>POST: 请输入url</p>
      <input type="text" v-model="postUrl" />
      <p>POST: 请输入请求的内容</p>
      <div class="params">
        <div v-for="(item, index) in postParams" :key="index" class="clearfix">
          <p>key</p>
          <input type="text" v-model="item.key" />
          <p>value</p>
          <input type="text" v-model="item.value" />
          <button @click="removeParam(index)">删除</button>
        </div>
        <button @click="addParam">增加</button>
      </div>
      <button @click="postRequest">请求</button>
      <div class="result">结果：{{ postResult }}</div>
      <button @click="clear('post')">清空</button>
    </div>
    <div class="get box">
      <p>GET: 请输入url</p>
      <input type="text" v-model="getUrl" />
      <button @click="getRequest">请求</button>
      <div class="result">结果：{{ getResult }}</div>
      <button @click="clear('get')">清空</button>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/composition-api'
export default {
  setup(props, context) {
    // 声明一个that，指向vue原型，取代vue2中的this
    // const that = context.parent
    // 注册变量为响应式，对应vue中data的内容
    // reactive接收一个普通对象然后返回该普通对象的响应式代理。等同于 2.x 的 Vue.observable()
    const state = reactive({
      postResult: '',
      getResult: '',
      postUrl: '',
      getUrl: '',
      postParams: [
        {
          key: '',
          value: ''
        }
      ]
    })
    // get请求的方法
    const getRequest = async () => {
      const res = await this.$http.get(state.getUrl)
      state.getResult = JSON.stringify(res)
    }
    // post请求的方法
    const postRequest = async () => {
      const params = {}
      state.postParams.map(item => {
        params[item.key] = item.value
      })
      console.log(params)
      const res = await this.$http.post(state.postUrl, params)
      state.postResult = JSON.stringify(res)
    }

    // 增加params项
    const addParam = () => {
      state.postParams.push({
        key: '',
        value: ''
      })
    }

    // 删除params项
    const removeParam = index => {
      state.postParams.splice(index, 1)
    }

    // 清空数据
    const clear = str => {
      state[str + 'Result'] = ''
      state[str + 'Url'] = ''
      if (str === 'post') {
        state.postParams = [
          {
            key: '',
            value: ''
          }
        ]
      }
    }

    return {
      ...toRefs(state),
      getRequest,
      postRequest,
      addParam,
      removeParam,
      clear
    }
  }
}
</script>
<style lang="less" scope>
#main {
  width: 100vw;
  height: 100vh;
  div.box {
    width: 50%;
    box-sizing: border-box;
    height: 100%;
    border: 1px solid #333;
    float: left;
    overflow: scroll;
    padding: 10px;
    div {
      margin: 10px;
    }
    p {
      margin: 10px;
    }
    .params {
      width: 100%;
      p,
      input {
        float: left;
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        margin: 0 5px;
      }
      button {
        height: 20px;
        line-height: 20px;
        margin: 0 5px;
      }
    }
  }
  button {
    width: 40px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #333;
    margin: 10px;
  }
}
::-webkit-scrollbar {
  display: none;
}
</style>
