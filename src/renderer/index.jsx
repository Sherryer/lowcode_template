import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import Renderer from './renderSingleComponent';
import { cleanCacheFormData } from './utils/eventManage';

export default (props) => {
  const [nameSpace] = useState(String(Math.random() * Math.pow(10, 18)));
  useEffect(() => cleanCacheFormData, []);
  return (
    <>
      {_.map(props.data, (item, index) => (
        <div key={index} style={{
          ...item.parentStyle,
        }}>
          {Renderer({ item, nameSpace })}
        </div>
      ))}
    </>
  );
};
