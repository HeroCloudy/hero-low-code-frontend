<!--
 * @Title: preview-list.vue
 * @Description:
 * @Author: dscloudy 小云哥
 * @Date: 2022/6/27 15:23
 *     Date          UpdateBy        Description
 * 2022/6/27 15:23   dscloudy    Create File.
 -->
<template>
  <div>
    <block title="JSON Schema 预览" height="300px">
      <template #opt>
        <el-button link size="small" type="primary" @click="onCopyClick(schema)">复制</el-button>
      </template>
      <pre>{{ JSON.stringify(schema, null, 2)}}</pre>
    </block>

    <block title="UI Schema 预览" height="200px">
      <template #opt>
        <el-button link size="small" type="primary" @click="onCopyClick(uiSchema)">复制</el-button>
      </template>
      <pre>{{ JSON.stringify(uiSchema, null, 2)}}</pre>
    </block>

    <block title="Data 预览" height="100px">
      <template #opt>
        <el-button link size="small" type="primary" @click="onCopyClick(data)">复制</el-button>
      </template>
      <pre>{{ JSON.stringify(data, null, 2)}}</pre>
    </block>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, PropType } from 'vue'
import Block from './block.vue'
import { buildPreviewValues, Preview, Prop } from '../common/commons'
import { ElMessage } from 'element-plus'

const props = defineProps({
  propList: {
    type: Array as PropType<Prop[]>,
    required: true
  }
})

const preview = computed<Preview>(() => buildPreviewValues(props.propList))

const schema = computed(() => preview.value.schema)
const uiSchema = computed(() => preview.value.uiSchema)
const data = computed(() => preview.value.model)

const onCopyClick = (data: any) => {
  // 模拟 输入框
  const input = document.createElement('input')
  input.value = JSON.stringify(data)
  document.body.appendChild(input)
  input.select() // 选取文本框内容

  // 执行浏览器复制命令
  // 复制命令会将当前选中的内容复制到剪切板中（这里就是创建的input标签）
  // Input要在正常的编辑状态下原生复制方法才会生效

  document.execCommand('copy')

  ElMessage({
    type: 'success',
    message: '复制成功'
  })
  // 复制成功后再将构造的标签 移除
  document.body.removeChild(input)
}
</script>

<style scoped lang="scss">
</style>
