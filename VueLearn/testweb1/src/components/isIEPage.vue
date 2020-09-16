<template>
  <div class="ieMain">
    <h1>暂不支持IE浏览器，请用Chrome打开</h1>
  </div>
</template>
<script>
export default {
  created() {
    this.IEVersion()
  },
  methods: {
    // ie浏览器判断操作
    IEVersion() {
      var userAgent = navigator.userAgent // 取得浏览器的userAgent字符串
      var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 // 判断是否IE<11浏览器
      var isEdge = userAgent.indexOf('Edge') > -1 && !isIE // 判断是否IE的Edge浏览器
      var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1
      if (isIE || isEdge || isIE11) {
      } else {
        //  不是ie浏览器
        this.$router.push('./')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.ieMain {
  width: 100vw;
  height: 100vh;
  position: relative;
  h1 {
    width: 900px;
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    left: 0;
    right: 0;
    font-weight: 500;
    top: 100px;
    margin: auto;
    position: absolute;
  }
}
</style>
