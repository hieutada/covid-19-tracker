import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useEffect } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import timeSince from '../../utils/timeSince';
import firstUpperCase from '../../utils/firstUpperCase';

const useStyles = makeStyles({
  container: {
    maxHeight: 440,
  },
  table: {
    // minWidth: 650,
  },
});

function createData(name, today, total) {
  return { name, today, total };
}

export default function VnCaseTable({ data }) {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (Object.keys(data).length) {
      const list = data.cases.map((province) =>
        createData(province.x, province.y, province.z)
      );
      setRows(list);
    }
  }, [data]);

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table stickyHeader aria-label='sticky table' className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>
              {t('provinceAndCity')}
            </TableCell>
            <TableCell align='right'>
              {firstUpperCase(t('update'))}: {timeSince(data.lastUpdated, i18n.language)}
              <br />
              (+{new Intl.NumberFormat(i18n.language).format(data.toDay)})
            </TableCell>
            <TableCell align='right'>
              {firstUpperCase(t('total'))}
              <br />
              ({new Intl.NumberFormat(i18n.language).format(data.total)})
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={row.name}>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right' style={{ fontWeight: 'bold' }}>
                +{new Intl.NumberFormat(i18n.language).format(row.today)}
              </TableCell>
              <TableCell align='right'>
                {new Intl.NumberFormat(i18n.language).format(row.total)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
