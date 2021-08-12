import { Typography } from '@material-ui/core';
import React from 'react';
import { MainColors } from '../../constants';

function Footer(props) {
  return (
    <div
      style={{
        backgroundColor: MainColors.SlateGrey,
        color: MainColors.WhiteSmoke,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '10px 0',
        marginTop: '20px',
      }}
    >
      <Typography
        variant='subtitle2'
      >
        Referenced by HoleTex
        <br />
        Practiced by Ta Trung Hieu
      </Typography>
    </div>
  );
}

export default Footer;
