import React from 'react';
import { Radio } from 'antd';

export default (props) => {
  const { item, index, handleEdit } = props;
  const { defaultValue } = item.attr;
  const { display } = item.parentStyle;

  const handleParentStyleChange = (key, value) => {
    item.parentStyle = {
      ...item.parentStyle,
      [key]: value,
    };
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
       <h4>基础设置</h4>
       <div>内容</div>
       <input
         value={defaultValue}
         onChange={(e) => handleAttrChange('defaultValue', e.target.value)}
         placeholder='请输入内容'
       />
       <div>display</div>
       <Radio.Group onChange={(e) => handleParentStyleChange('display', e.target.value)} value={display}>
         <Radio value={'block'}>block</Radio>
         <Radio value={'inline-block'}>inline-block</Radio>
       </Radio.Group>
     </div>
  );
};
