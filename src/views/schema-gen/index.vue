<!--
 * @Title: index.vue
 * @Description: JSON Schema 生成器新版本
 * @Author: dscloudy 小云哥
 * @Date: 2022/6/27 14:37
 *     Date          UpdateBy        Description
 * 2022/6/27 14:37   dscloudy    Create File.
 -->
<template>
  <gen-demo-page>
    <template #header>
      <tool-preview :prop-list="list"></tool-preview>
    </template>

    <template #left>
      <!--  左侧：属性 prop 列表  -->
      <prop-list :prop-list="list"
                 @current-prop-change="onCurrentPropChange"/>
    </template>

    <template #center>
      <!--  中间：属性值 attr 列表  -->
      <attr-list v-if="currentProp"
                 :current-prop="currentProp"/>
    </template>

    <template #right>
      <preview-list :prop-list="list"/>
    </template>
  </gen-demo-page>
</template>

<script lang="ts" setup>
import PropList from './component/prop-list.vue'
import { ref } from 'vue'
import PreviewList from './component/preview-list.vue'
import AttrList from './component/attr-list.vue'
import { buildPropItem, Prop } from './common/commons'
import ToolPreview from './component/tool-preview.vue'
import GenDemoPage from '@/components/gen-demo-page.vue'

const currentProp = ref<Prop>()

const list = ref<Prop[]>([buildPropItem(0)])

const onCurrentPropChange = (prop: Prop) => {
  currentProp.value = prop
}
</script>

<style scoped lang="scss">
@import "../../scss/common.scss";

.page {
  width: 100%;
  height: 100%;

  // 可删除 BEGIN
  .left,
  .right {
    background-color: $bg;
  }

  // 可删除 END
}
</style>
