import { Schema, UiSchema } from '@/common/types'

export const formAttrSchema: Schema = {
  properties: {
    column: {
      type: 'number',
      title: '列数'
    },
    labelPosition: {
      type: 'string',
      title: '标签位置',
      oneOf: [{
        const: 'left',
        title: 'left'
      }, {
        const: 'right',
        title: 'right'
      }, {
        const: 'top',
        title: 'top'
      }]
    },
    labelWidth: {
      type: 'string',
      title: '标签宽度'
    },
    labelSuffix: {
      type: 'string',
      title: '标签后缀'
    },
    size: {
      type: 'string',
      title: '表单尺寸',
      oneOf: [{
        const: 'small',
        title: 'small'
      }, {
        const: 'large',
        title: 'large'
      }, {
        const: 'default',
        title: 'default'
      }]
    },
    disabled: {
      type: 'boolean',
      title: '是否禁用'
    }
  },
  required: []
}

export const formAttrUiSchema: UiSchema = {
  labelPosition: {
    'ui:widget': 'radio'
  },
  size: {
    'ui:widget': 'radio'
  }
}

export const basicAttrSchema: Schema = {
  properties: {
    key: {
      type: 'string',
      title: '字段名'
    },
    label: {
      type: 'string',
      title: '标签名'
    },
    placeholder: {
      type: 'string',
      title: '占位符'
    },
    labelSuffix: {
      type: 'string',
      title: '标签后缀'
    },
    size: {
      type: 'string',
      title: '表单尺寸',
      oneOf: [{
        const: 'small',
        title: 'small'
      }, {
        const: 'large',
        title: 'large'
      }, {
        const: 'default',
        title: 'default'
      }]
    },
    disabled: {
      type: 'boolean',
      title: '是否禁用'
    }
  },
  required: []
}
