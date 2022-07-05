<!--
 * @Title: component-list.vue
 * @Description:
 * @Author: dscloudy 小云哥
 * @Date: 2022/7/2 23:34
 *     Date          UpdateBy        Description
 * 2022/7/2 23:34   dscloudy    Create File.
 -->
<template>
  <div>
    <div v-for="(group, index) in componentGroupList"
         :key="index"
         class="component-group">
      <div class="group-title">{{group.groupName}}</div>

      <div class="component-list">
        <div v-for="c in group.componentList"
             :key="c.code"
             class="component-item"
             @dragstart="(e) => onDragStart(e, c)"
             @dragend="(e) => onDragEnd(e, c)"
             draggable="true"
        >{{c.name}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import { ComponentGroup, ComponentItem } from '@/views/form-gen/common/components'

defineProps({
  componentGroupList: {
    type: Array as PropType<ComponentGroup[]>,
    required: false,
    default: () => ([])
  }
})

const onDragStart = (e: DragEvent, component: ComponentItem) => {
  // console.log('开始拖动', e, component)
  e.dataTransfer && e.dataTransfer.setData('code', component.code)
}

const onDragEnd = (e: DragEvent, component: ComponentItem) => {
  // console.log('结束拖动', e, component)
}
</script>

<style scoped lang="scss">
@import "~@/scss/common.scss";

.component-group {
  padding: 10px;

  .group-title {
    font-weight: bold;
    line-height: 28px;
  }

  .component-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .component-item {
      width: 48%;
      height: 30px;
      line-height: 30px;
      font-size: 12px;
      margin-top: 10px;
      text-align: center;
      box-sizing: border-box;
      color: #3c3c3c;
      background-color: $itemBgColor;
      border: 1px solid $itemBgColor;
      cursor: move;

      &:hover {
        border: 1px dashed $itemSolidColor;
      }
    }
  }
}
</style>
