<!--
 * @Title: index.vue
 * @Description:
 * @Author: dscloudy 小云哥
 * @Date: 2022/6/30 18:29
 *     Date          UpdateBy        Description
 * 2022/6/30 18:29   dscloudy    Create File.
 -->
<template>
  <gen-demo-page>
    <template #left>
      <component-list :component-group-list="componentGroupList"></component-list>
    </template>
    <template #center>
      <designer :form-attr="commonFormAttrModel" @form-click="onFormClick" @field-click="onFieldClick"></designer>
    </template>
    <template #right>
      <attr-edit :tab="tab" :form-attr-model="commonFormAttrModel"></attr-edit>
    </template>
  </gen-demo-page>
</template>

<script lang="ts" setup>
import GenDemoPage from '@/components/gen-demo-page.vue'
import ComponentList from './component/component-list.vue'
import { componentGroupList } from './common/components'
import Designer from './component/designer.vue'
import AttrEdit from './component/attr-edit.vue'
import { ref } from 'vue'

const tab = ref<string>('form')

const onFormClick = () => {
  tab.value = 'form'
}
const onFieldClick = () => {
  tab.value = 'field'
}
const commonFormAttrModel = ref({
  column: 3,
  labelPosition: 'right',
  labelWidth: 'auto',
  labelSuffix: ':',
  size: 'small',
  disabled: false
})

</script>

<style scoped lang="scss">
</style>
