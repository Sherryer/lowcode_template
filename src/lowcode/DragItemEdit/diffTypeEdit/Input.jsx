import React from 'react';
import { cleanCacheFormData } from '../../../renderer/utils/eventManage';

export default (props) => {
  const { item, index, handleEdit } = props;
  const { key, targetKey } = item.link;
  const { label } = item.attr;

  const handleLinkChange = (key, value) => {
    item.link = {
      ...item.link,
      [key]: value,
    };
    cleanCacheFormData();
    handleEdit({ item, index });
  };

  const handleAttrChange = (key, value) => {
    item.attr = {
      ...item.attr,
      [key]: value,
    };
    handleEdit({ item, index });
  };

  return (
    <div>
      <h4>联动设置</h4>
      <div>key值</div>
      <input
        value={key}
        onChange={(e) => handleLinkChange('key', e.target.value)}
        placeholder='请输入组件key值'
      />
      <div>关联组件key值</div>
      <input
        value={targetKey}
        onChange={(e) => handleLinkChange('targetKey', e.target.value)}
        placeholder='请输入关联组件的key值'
      />
      <hr/>
      <h4>基础设置</h4>
      <div>label</div>
      <input
        value={label}
        onChange={(e) => handleAttrChange('label', e.target.value)}
        placeholder='设置 label'
      />
    </div>
  );
};
