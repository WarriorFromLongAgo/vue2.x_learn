<template>
  <el-table class="bookTable" :data="bookArr" style="width: 100%">
    <el-table-column prop="id" label="主键" width="50"></el-table-column>
    <el-table-column prop="name" label="书籍名称" width="150"></el-table-column>
    <el-table-column prop="date" label="出版日期" width="100"></el-table-column>
    <el-table-column prop="price" label="书籍价格" width="100"></el-table-column>
    <el-table-column prop="count" label="购买次数" width="150">
      <template slot-scope="scope">
        <el-button size="mini">-</el-button>
            {{scope.row.count}}
        <el-button size="mini" type="danger">+</el-button>
      </template>
    </el-table-column>
    <!-- <el-table-column fixed="right" label="操作" width="120">
      <template slot-scope>
        <el-button type="text" size="small">移除</el-button>
      </template>
    </el-table-column> -->
    <!-- <el-table-column  class="parentNodeColumn" prop="projectName,projectCode" label="项目名称(代码)"  width="300"> -->
      <!-- // 使用作用域插槽，可以获取这一行返回的数据 -->
      <!-- <template slot-scope="scope"> {{scope.row.projectName}}{{scope.row.projectCode}} </template> -->
    <!-- </el-table-column> -->
    <el-table-column label="操作" width="150">
      <template slot-scope="scope">
        <el-button size="mini">编辑</el-button>
        <el-button size="mini" type="danger"  @click.native.prevent="deleteRow(scope.$index, bookArr)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      bookArr: [
        {
          id: 1,
          name: '《算法导论》',
          date: '2006-9',
          price: 49.6,
          count: 10
        },
        {
          id: 1,
          name: '《Linux》',
          date: '2006-9',
          price: 59.6,
          count: 10
        },
        {
          id: 1,
          name: '《Java》',
          date: '2006-9',
          price: 29.6,
          count: 10
        },
        {
          id: 1,
          name: '《编程之美》',
          date: '2006-9',
          price: 39.6,
          count: 10
        }
      ]
    }
  },
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    }
  }
}
</script>

<style>
.bookTable {
    align-items: center;
}
table {
  border: 1px solid #e9e9e9;
  border-collapse: collapse;
  border-spacing: 0;
}
th,
td {
  padding: 8px 16px;
  border: 1px solid #e9e9e9;
  text-align: left;
}
th {
  background-color: #f7f7f7;
  color: #5c6b77;
  font-weight: 600;
}
</style>
