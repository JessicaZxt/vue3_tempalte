<template>
  <div>
    <div>
      <el-button type="primary" @click="handleAdd">添加品牌</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%; margin-top: 10px">
      <el-table-column type="index" width="80" label="序号" />
      <el-table-column prop="b" label="品牌名称" />
      <el-table-column prop="c" label="品牌LOGO" />
      <el-table-column prop="d" label="品牌操作">
        <template #default="scope">
          <el-button size="small" @click="handleUpdate">修改</el-button>
          <el-button size="small" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="margin-top: 10px"
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[100, 200, 300, 400]"
      small
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    <Modal v-model:visible="visible" :type="type" />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import Modal from "./modal/index.vue";

const tableData = reactive([{ id: 1 }]);
const currentPage = ref(1);
const pageSize = ref(10);
const visible = ref(false);
const type = ref("add");

const handleSizeChange = () => {};
const handleCurrentChange = () => {};

const handleAdd = () => {
  visible.value = true;
  type.value = "add";
  tableData.push({ id: Math.random() });
};

const handleUpdate = () => {
  visible.value = true;
  type.value = "update";
};
</script>

<style lang="scss" scoped></style>
