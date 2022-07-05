import { PropItem, PropItemTypes, UI_OPTIONS, UI_WIDGET, UiSchemaItem, UiWidgets } from '@/common/types'
import { buildOfItem } from '@/views/schema-gen/common/commons'

export interface ComponentItem {
  code: string;
  name: string;
}

export interface ComponentGroup {
  groupName: string;
  componentList: ComponentItem[];
}

const initComponentItem = (code: string, name : string) : ComponentItem => {
  const componentItem: ComponentItem = {
    code,
    name
  }
  return componentItem
}

export const componentGroupList: ComponentGroup[] = [
  {
    groupName: '基础表单组件',
    componentList: [
      initComponentItem('inputText', '单行文本框'),
      initComponentItem('inputNumber', '数字输入框'),
      initComponentItem('inputPassword', '密码输入框'),
      initComponentItem('textarea', '多行文本框'),
      initComponentItem('radioGroup', '单选框组'),
      initComponentItem('checkboxGroup', '复选框组'),
      initComponentItem('singleSelect', '单选下拉选'),
      initComponentItem('multiSelect', '多选下拉选')
    ]
  },
  {
    groupName: '高级表单组件',
    componentList: [
      initComponentItem('imgUploader', '图片上传'),
      initComponentItem('fileUploader', '文件上传')
    ]
  }
]

export interface Template {
  schema: PropItem;
  uiSchema: UiSchemaItem;
}

export const templateMap: { [key: string]: Template} = {
  inputText: {
    schema: {
      type: PropItemTypes.STRING,
      title: '文本输入框'
    },
    uiSchema: {
      [UI_OPTIONS]: {
        placeholder: '请输入文本',
        clearable: true
      }
    }
  },
  inputNumber: {
    schema: {
      type: PropItemTypes.NUMBER,
      title: '数字输入框'
    },
    uiSchema: {
      [UI_OPTIONS]: {
        placeholder: '请输入数字',
        clearable: true
      }
    }
  },
  inputPassword: {
    schema: {
      type: PropItemTypes.STRING,
      title: '密码输入框'
    },
    uiSchema: {
      [UI_OPTIONS]: {
        placeholder: '请输入密码',
        type: 'password'
      }
    }
  },
  textarea: {
    schema: {
      type: PropItemTypes.STRING,
      title: '多行文本框'
    },
    uiSchema: {
      [UI_OPTIONS]: {
        placeholder: '请输入内容',
        type: 'textarea',
        row: 10
      }
    }
  },
  radioGroup: {
    schema: {
      type: PropItemTypes.STRING,
      title: '单选框组',
      oneOf: [
        buildOfItem('item1', '选项1'),
        buildOfItem('item2', '选项2'),
        buildOfItem('item3', '选项3')
      ]
    },
    uiSchema: {
      [UI_OPTIONS]: {
        placeholder: '请选择'
      },
      [UI_WIDGET]: UiWidgets.RADIO
    }
  },
  checkboxGroup: {
    schema: {
      type: PropItemTypes.ARRAY,
      title: '复选框组',
      anyOf: [
        buildOfItem('item1', '选项1'),
        buildOfItem('item2', '选项2'),
        buildOfItem('item3', '选项3')
      ]
    },
    uiSchema: {
      [UI_OPTIONS]: {
        placeholder: '请选择'
      },
      [UI_WIDGET]: UiWidgets.CHECKBOX
    }
  },
  singleSelect: {
    schema: {
      type: PropItemTypes.STRING,
      title: '单选下拉选',
      oneOf: [
        buildOfItem('item1', '选项1'),
        buildOfItem('item2', '选项2'),
        buildOfItem('item3', '选项3')
      ]
    },
    uiSchema: {
      [UI_OPTIONS]: {
        placeholder: '请选择'
      }
    }
  },
  multiSelect: {
    schema: {
      type: PropItemTypes.ARRAY,
      title: '多选下拉选',
      anyOf: [
        buildOfItem('item1', '选项1'),
        buildOfItem('item2', '选项2'),
        buildOfItem('item3', '选项3')
      ]
    },
    uiSchema: {
      [UI_OPTIONS]: {
        placeholder: '请选择'
      }
    }
  }
}
