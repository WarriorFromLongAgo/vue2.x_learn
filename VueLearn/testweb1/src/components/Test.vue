<template>
  <div>
    <router-view />
    <p>{{ msg }}</p>
    <el-button type="text" @click="open4">点击打开 bookShop</el-button>
    <br>
    <p>test1111</p>
    <el-button type="text" @click="open">点击打开 jump</el-button>
    <br>
    <el-popconfirm title="这是一段内容确定删除吗？" @onConfirm="open2">
      <!-- 点击就执行 open3 -->
      <el-button slot="reference" @click="open3">点击后，点击确认跳转</el-button>
      <br>
      <el-button slot="reference">点击就跳转删除</el-button>
    </el-popconfirm>
    <br>
    <el-button type="text" @click="http">点击打开 http</el-button>
  </div>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {
      msg: 'test1111111111111111111111'
    }
  },
  methods: {
    open() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
              type: 'success',
              message: '删除成功!'
            },
            setTimeout(() => {
              this.$router.replace({path: '/jump'})
            }, 1000)
        )
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    open2() {
      // alert('open2open2open2')
      setTimeout(() => {
        this.$router.replace({path: '/home'})
      }, 1000)
    },
    open3() {
      // alert('open3open3open3')
      setTimeout(() => {
        // this.$router.replace({ path: '/home' })
        // this.$router.push({ path: '/home' })
        this.$router.push({path: '/home'})
      }, 1000)
    },
    open4() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
              type: 'success',
              message: '删除成功!'
            },
            setTimeout(() => {
              this.$router.replace({path: '/bookShop'})
            }, 1000)
        )
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    http() {
      console.log('http')
      setTimeout(() => {
        // 强行修改路由
        // this.$router.replace({ path: '/http' })
        // push就是跳转
        this.$router.push({path: '/http'})
      }, 500)
    }
  }
}
</script>

<style>
</style>
