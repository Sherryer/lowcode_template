import React, { useState } from 'react';

const renderDetail = type => require(`./diffTypeEdit/${type}`);

export default (props) => {
  const {
    item,
    index,
  } = props;
  const Component = renderDetail(item.type).default;
  return (
    <div style={{ paddingLeft: '20px'}}>
      <h4 style={{ marginBottom: 10 }}>类型：{item.type}； index：{index}</h4>
        <hr/>
        <Component {...props}/>
    </div>
  );
};
