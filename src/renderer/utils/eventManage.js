import EventBus from 'eventing-bus';
import _ from 'lodash';

// 所有组件通过 EventBus 通信的缓存中间层，管理数据 merge
let formDataContainer = {};

const publish = ({ nameSpace, targetKey, data }) => {
  const { key, value } = data;
  console.log('publish: ', 'nameSpace:', nameSpace, '; targetKey', targetKey, '; key:', key, '; value:', value);
  if (!nameSpace || !targetKey || !key) return;
  if (!formDataContainer[nameSpace] || !formDataContainer[nameSpace][targetKey]) {
    formDataContainer[nameSpace] = {
      [targetKey]: {},
    };
  }
  formDataContainer[nameSpace][targetKey][key] = value;
  EventBus.publish(targetKey, formDataContainer[nameSpace][targetKey]);
};
const debouncePublish = _.debounce(publish, 1000);

const publishMessage = ({ nameSpace, targetKey, data, needDebounce }) => {
  if (needDebounce) {
    debouncePublish({ nameSpace, targetKey, data });
  } else {
    publish({ nameSpace, targetKey, data });
  }
};

// 清空 formDataContainer，用于编辑场景
// 1. 组件 key target 改变
// 2. 删除组件
// 3. 组件写在
const cleanCacheFormData = () => {
  formDataContainer = {};
};

export {
  publishMessage,
  cleanCacheFormData,
};
