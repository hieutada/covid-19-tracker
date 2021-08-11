import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { useEffect } from 'react';
import { getNcovReport } from '../../apis';
import { useTranslation } from 'react-i18next';
import titleCase from '../../utils/titleCase';
import { useHistory } from 'react-router-dom';

const columns = [
  { id: 'top', label: 'No' },
  { id: 'country', label: 'country', minWidth: 170 },
  {
    id: 'confirmed',
    label: 'confirmed',
    align: 'right',
    minWidth: 100,
    format: (value, lang) => value.toLocaleString(lang),
  },
  {
    id: 'recovered',
    label: 'recovered',
    align: 'right',
    minWidth: 100,
    format: (value, lang) => value.toLocaleString(lang),
  },
  {
    id: 'deaths',
    label: 'deaths',
    align: 'right',
    minWidth: 100,
    format: (value, lang) => value.toLocaleString(lang),
  },
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function WorldTable() {
  const { t, i18n } = useTranslation();
  const classes = useStyles();

  const history = useHistory();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    try {
      getNcovReport().then(async (res) => {
        const data = await res.data.data['TG'].map((country, index) => ({
          top: index + 1,
          country: country.province_name,
          confirmed: country.confirmed,
          recovered: country.recovered,
          deaths: country.deaths,
        }));
        setRows(data);
      });
    } catch (error) {
      return history.push('/');
    }
  }, []);

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {titleCase(t(column.label))}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, idx) => {
                return (
                  <TableRow hover role='checkbox' tabIndex={-1} key={idx}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value, i18n.language)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        labelRowsPerPage = {`${t('rows number')}:`}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
