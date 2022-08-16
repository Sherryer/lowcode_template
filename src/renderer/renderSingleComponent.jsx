// 递归函数
import React from 'react';

const renderDetail = type => require(`./modules/${type}/index`);

// 渲染单独组件
export default ({ item, nameSpace }) => {
  const Component = renderDetail(item.type).default;
  return <Component item={item} nameSpace={nameSpace}/>;
};
