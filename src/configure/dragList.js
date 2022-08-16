const componentsConfig = {};

export const Input = 'Input';
export const Text = 'Text';

const componentParentStyle = {
  padding: '6px 12px',
  verticalAlign: 'top',
  minWidth: '200px',
};

componentsConfig[Text] = {
  type: 'Text',
  label: '文本框',
  parentStyle: {
    ...componentParentStyle,
    display: 'inline-block',
    minWidth: '0',
  },
  attr: {
    defaultValue: '文本',
  },
  // 与其他组件关联配置项
  link: {
    key: null, // 自己key
    targetKey: null, // 关联组件key
    isLinked: false, // 是否可以被其他组件关联
  },
}

componentsConfig[Input] = {
  type: 'Input',
  label: '输入框',
  parentStyle: {
    ...componentParentStyle,
    display: 'inline-block',
    minWidth: '0',
  },
  style: {
    minWidth: '180px',
  },
  attr: {
    label: '文本框：',
    defaultValue: '',
    placeholder: '请输入',
  },
  // 与其他组件关联配置项
  link: {
    key: null, // 自己key
    targetKey: null, // 关联组件key
    isLinked: false, // 是否可以被其他组件关联
  },
}


// 组件 json 列表
const formItemData = Object.values(componentsConfig);

export { formItemData, componentsConfig };
