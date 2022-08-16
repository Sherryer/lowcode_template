import React from 'react';
import checkComponentMome from '../../utils/checkComponentMome';

export default React.memo(({ item }) => {
  console.log(999);
  const { defaultValue } = item.attr;
  return (
    <div style={{ lineHeight: '36px' }}>{defaultValue}</div>
  );
}, checkComponentMome);
