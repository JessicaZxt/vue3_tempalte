<template>
  <el-dialog
    v-model="show"
    :title="props.type === 'add' ? '添加品牌' : '修改品牌'"
    width="500"
    center
  >
    <el-form ref="ruleFormRef" :model="form" label-width="120px" status-icon>
      <el-form-item label="品牌名称" prop="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="品牌LOGO" prop="logo">
        <el-input v-model="form.name" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="show = false">Cancel</el-button>
        <el-button type="primary" @click="show = false"> Confirm </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import { reactive, defineProps, computed, defineEmits } from "vue";
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "add",
  },
});

const emits = defineEmits(["update:visible"]);
const show = computed({
  get() {
    return props.visible;
  },
  set(val) {
    emits("update:visible", val);
  },
});

interface Form {
  name: string;
  logo: string;
}
const form = reactive<Form>({
  name: "",
  logo: "",
});
</script>

<style lang="scss" scoped></style>
