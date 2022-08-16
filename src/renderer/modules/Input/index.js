import React, { useState, useEffect } from 'react';
import Label from '../../components/label';
import { publishMessage } from '../../utils/eventManage';
import checkComponentMome from '../../utils/checkComponentMome';

export default React.memo(({ item, nameSpace }) => {
  const { defaultValue, label } = item.attr;
  const { key, targetKey } = item.link;
  const [value, setValue] = useState(defaultValue);
  const handleValueChange = (value) => {
    publishMessage({ targetKey, data: { key, value }, nameSpace, needDebounce: true });
    setValue(value);
  };

  // 编辑界面 defaultValue change后 视图更新
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  // 预览及真实环境初始值通知
  useEffect(() => {
    if (defaultValue && key && targetKey) {
      publishMessage({ targetKey, data: { key, value }, nameSpace });
    }
  }, []);
  // console.log('input render');
  return (
    <Label label={label}>
      <input
        style={item.style}
        value={value}
        placeholder='请输入'
        onChange={(e, v) => handleValueChange(e.target.value)}
      />
    </Label>
  );
}, checkComponentMome);
