import { Typography } from '@material-ui/core';
import React from 'react';

function Footer(props) {
  return (
    <div style={{backgroundColor: '#778899', color: '#F8F8FF', paddingBlock: '10px', marginTop: '20px'}}>
      <Typography
        component='p'
        style={{
          textAlign: 'center',
        }}
      >
        Referenced by HoleTex
        <br />
        Practiced by Ta Trung Hieu
      </Typography>
    </div>
  );
}

export default Footer;
