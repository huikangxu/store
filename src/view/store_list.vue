<template>
  <div class="block">
    <el-breadcrumb class="Breadcrumb" separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">产品管理系统</el-breadcrumb-item>
      <el-breadcrumb-item>门店管理</el-breadcrumb-item>
      <el-breadcrumb-item>门店列表</el-breadcrumb-item>  
    </el-breadcrumb>  
    
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="company"
        label="运营方"
        width="180">
      </el-table-column>
      <el-table-column
        prop="store_name"
        label="门店名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="store_number"
        label="门店编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="city"
        label="所在城市"
        width="180">
      </el-table-column>
      <el-table-column
        prop="area"
        label="销售面积/㎡"
        width="180">
      </el-table-column>
      <el-table-column
        prop="open_status"
        label="开业状态"
        width="180">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

   <!--  <span class="demonstration">显示总数</span> -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          company: '侠客岛',
          store_name: '希顿C座',
          store_number: 'XD',
          city: '成都市',
          area: '118',
          open_status: '开业'
        }, {
          company: '青侠',
          store_name: '磨子桥岛',
          store_number: 'MZ',
          city: '成都市',
          area: '2000',
          open_status: '未开业'
        }, {
          company: '阳侠',
          store_name: '望京岛',
          store_number: 'WJ',
          city: '北京市',
          area: '3000',
          open_status: '开业'
        }, {
          company: '侠客岛',
          store_name: '希顿C座',
          store_number: 'XD',
          city: '成都市',
          area: '118',
          open_status: '开业'
        }]
      }
    }
  }
</script>

<style >
  .Breadcrumb {
      display: inner-block;
      width: 300px;
      height: 20px;
      size: 14px;
      color: #676767;
  }
</style>