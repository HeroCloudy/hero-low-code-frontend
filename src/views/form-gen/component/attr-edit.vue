<!--
 * @Title: attr-edit.vue
 * @Description:
 * @Author: dscloudy 小云哥
 * @Date: 2022/7/4 12:24
 *     Date          UpdateBy        Description
 * 2022/7/4 12:24   dscloudy    Create File.
 -->
<template>
  <el-tabs type="border-card" stretch class="attr-edit" v-model="innerTab">
    <el-tab-pane label="字段属性" name="field">User</el-tab-pane>
    <el-tab-pane label="表单属性" name="form">
      <ha-form :schema="formAttrSchema"
               :model="innerFormAttrModel"
               :ui-schema="formAttrUiSchema"
               :column="1"
      ></ha-form>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { defineProps, ref, watch } from 'vue'
import { formAttrSchema, formAttrUiSchema } from '../common/schemas'

const props = defineProps({
  tab: {
    type: String,
    required: true
  },
  formAttrModel: {
    type: Object,
    required: true
  }
})

const innerTab = ref<string>(props.tab)

const innerFormAttrModel = ref<any>(props.formAttrModel)

watch(() => props.tab, () => {
  innerTab.value = props.tab
})

</script>

<style scoped lang="scss">
.attr-edit {
  height: 100%;
  overflow: auto;
}
.el-tabs--border-card {
  //:deep() {
  border-left: none;
  border-top: none;
  //}
}
</style>
