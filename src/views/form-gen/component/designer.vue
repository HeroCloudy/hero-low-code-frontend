<!--
 * @Title: designer.vue
 * @Description:
 * @Author: dscloudy 小云哥
 * @Date: 2022/7/3 15:03
 *     Date          UpdateBy        Description
 * 2022/7/3 15:03   dscloudy    Create File.
 -->
<template>
  <div class="designer"
       :class="isEnter ? 'active' : ''"
       @click="onDesignerClick"
       @dragenter="onDragEnter"
       @dragleave="isEnter = false"
       @drop="onDrop"
       @dragover="e=>e.preventDefault()">
<!--    <div>{{currentIndex}}</div>-->
<!--    <pre>-->
<!--      {{JSON.stringify(codeList, null, 2)}}-->

<!--      {{schema}}-->
<!--    </pre>-->
    <ha-form :schema="schema"
             :model="formData"
             :ui-schema="uiSchema"
             :column="1"
             v-bind="formAttr"
    ></ha-form>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps, nextTick, ref, watchEffect } from 'vue'
import { Schema } from '@/common/types'
import { UiSchema } from 'hero-admin-ui/dist/types'
import { templateMap } from '@/views/form-gen/common/components'
import { uuid } from '@/common/uuid'
import { ElMessage } from 'element-plus'

const emits = defineEmits(['form-click', 'field-click'])

defineProps({
  formAttr: {
    type: Object,
    required: true
  }
})

const schema = ref<Schema>({
  properties: {},
  required: []
})
const uiSchema = ref<UiSchema>({})
const formData = ref<any>({})
const selectedClassName = 'selected-item'
const selectedOptClassName = 'selected-item-opt'

const isEnter = ref(false)

const codeList = ref<{code: string; key: string}[]>([])
const currentIndex = ref<number>(-1)

const onDragEnter = (e: DragEvent) => {
  isEnter.value = true
}
const onDrop = (e: DragEvent) => {
  isEnter.value = false
  console.log('放置元素', e)
  if (!e.dataTransfer) {
    return
  }
  const code = e.dataTransfer.getData('code')
  const template = templateMap[code]
  if (!template) {
    ElMessage.warning('该组件正在开发中....')
    return
  }
  const key = uuid(6)

  codeList.value.push({ code, key })
  currentIndex.value = codeList.value.length - 1
}

const createOptBtn = (type: string) => {
  const btn = document.createElement('div')
  btn.className = 'opt-btn opt-btn-' + type
  if (type === 'copy') {
    btn.onclick = onBtnCopyClick
  } else if (type === 'delete') {
    btn.onclick = onBtnDeleteClick
  }
  return btn
}

const onBtnCopyClick = () => {
  const index = currentIndex.value
  if (index === -1) {
    return
  }
  const item = codeList.value[index]
  const key = uuid(6)
  codeList.value.splice(index + 1, 0, { code: item.code, key })

  currentIndex.value = index + 1
}

const onBtnDeleteClick = () => {
  const index = currentIndex.value
  if (index === -1) {
    return
  }
  codeList.value.splice(index, 1)
  currentIndex.value = -1
}

const createSelectedOptDomList = () => {
  const div = document.createElement('div')
  div.className = selectedOptClassName
  div.appendChild(createOptBtn('copy'))
  div.appendChild(createOptBtn('delete'))
  return div
}

const onFormFieldClick = (index: number): void => {
  const eltList = document.querySelectorAll('.designer .HaForm .el-form-item')
  if (!eltList) {
    return
  }

  currentIndex.value = index

  const optEltList = document.querySelectorAll('.designer .' + selectedOptClassName)
  optEltList.forEach(optElt => {
    optElt.remove()
  })

  eltList.forEach((item, i) => {
    const elt = item as HTMLElement

    if (i === index) {
      elt.classList.add(selectedClassName)
      elt.appendChild(createSelectedOptDomList())
    } else {
      elt.classList.remove(selectedClassName)
    }
  })

  emits('field-click')
}

const onDesignerClick = () => {
  emits('form-click')
}

watchEffect(() => {
  schema.value = { properties: {}, required: [] }
  uiSchema.value = {}
  codeList.value.forEach(item => {
    const template = templateMap[item.code]
    if (template) {
      schema.value.properties[item.key] = { ...template.schema }
      uiSchema.value[item.key] = { ...template.uiSchema }
    }
  })
  console.log('render schema')
  nextTick(() => {
    const elts = document.querySelectorAll('.designer .HaForm .el-form-item')
    elts.forEach((e: Element, index: number) => {
      const elt = e as HTMLElement
      elt.draggable = true
      elt.onclick = (e: Event) => {
        onFormFieldClick(index)
        e.stopPropagation()
        return false
      }
    })

    if (currentIndex.value >= 0) {
      onFormFieldClick(currentIndex.value)
    }
  })
})

</script>

<style scoped lang="scss">
.designer {
  //background-color: #efefef;
  box-sizing: border-box;
  margin: 10px;
  height: 100%;
  overflow: auto;
}
.active {
  border: 2px dashed green;
  background-color: #f6fff6;
}

</style>
