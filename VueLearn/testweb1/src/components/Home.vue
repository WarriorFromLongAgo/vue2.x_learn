<template>
  <el-container class="home_container">
    <!-- <router-view /> -->
    <el-header>
      <div class="home_title">V部落博客管理平台</div>
      <div class="home_userinfoContainer">
        <el-dropdown>
          <span class="el-dropdown-link home_userinfo">
            我的名字
            <i class="el-icon-arrow-down el-icon--right home_userinfo"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="sysMsg">系统消息</el-dropdown-item>
            <el-dropdown-item command="MyArticle">我的文章</el-dropdown-item>
            <el-dropdown-item command="MyHome">个人主页</el-dropdown-item>
            <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>

    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="0"
          class="el-menu-vertical-demo"
          style="background-color: #ECECEC"
          router
        >
          <template v-for="(item,index) in this.$router.options.routes">
            <template v-if="!item.hidden">
              <el-submenu :index="index+''" v-if="item.children.length > 1" :key="index">
                <template slot="title">
                  <i :class="item.iconCls"></i>
                  <span>{{item.name}}</span>
                </template>

                <el-menu-item v-for="child in item.children"  :index="child.path" :key="child.path">
                  <template v-if="!child.hidden">
                    <template >
                      {{child.name}}
                    </template>
                  </template>
                </el-menu-item>
              </el-submenu>
            </template>

            <!-- <template v-else>
              <el-menu-item :index="item.children[0].path">
                <i :class="item.children[0].iconCls"></i>
                <span slot="title">{{item.children[0].name}}</span>
              </el-menu-item>
            </template> -->

          </template>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <!-- 跳转页面 -->
            <el-breadcrumb-item :to="{ path: '/test' }">首页</el-breadcrumb-item>
            <!-- this.$router.currentRoute.name 当前路由的 名字 -->
            <el-breadcrumb-item v-text="this.$router.currentRoute.name"></el-breadcrumb-item>
          </el-breadcrumb>
        </el-main>
      </el-container>
    </el-container>

    <!-- <el-main>Main</el-main>
    <p>home.vue</p>
    <el-popconfirm title="这是一段内容确定删除吗？" @onConfirm="open2">
      <el-button slot="reference" @click="open2">点击后，点击确认跳转</el-button>
    </el-popconfirm>-->
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      currentUserName: ''
    }
  },
  mounted: function () {
    // this.$alert(
    //   console.log('4-mounted 被创建'),
    //   '为了确保所有的小伙伴都能看到完整的数据演示，数据库只开放了查询权限和部分字段的更新权限，其他权限都不具备，完整权限的演示需要大家在自己本地部署后，换一个正常的数据库用户后即可查看，这点请大家悉知!',
    //   '友情提示',
    //   {
    //     confirmButtonText: '确定',
    //     callback: (action) => {}
    //   }
    // )
  },
  methods: {
    open2 () {
      // alert('open2open2open2')
      setTimeout(() => {
        this.$router.go(-1)
      }, 1000)
    }
  }
}
</script>

<style>
.home_container {
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
}

.el-header {
  background-color: #20a0ff;
  color: #333;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.el-aside {
  background-color: #ececec;
}

.el-main {
  background-color: #fff;
  color: #000;
  text-align: center;
}

.home_title {
  color: #fff;
  font-size: 22px;
  display: inline;
}

.home_userinfo {
  color: #fff;
  cursor: pointer;
}

.home_userinfoContainer {
  display: inline;
  margin-right: 20px;
}
</style>
