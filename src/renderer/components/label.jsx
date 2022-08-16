import React, { useState, useEffect } from 'react';

export default props => (
  <section style={{ display: 'flex' }}>
    <div style={{ padding: '0 8px 0' }}>{props.label}</div>
    <div style={{ flex: '1' }}>
      {props.children}
    </div>
  </section>
);
