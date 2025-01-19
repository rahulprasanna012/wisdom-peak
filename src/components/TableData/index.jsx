import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'email', label: 'Email', minWidth: 170 },
  { id: 'city', label: 'City', minWidth: 170 },
];

const backgroundColors = [
  '#e5bcdc',
  '#c3bae4',
  '#e5bac4',
  '#c2bce5',
  '#bae4da',
  '#b8e4c3',
  '#bdc2e9',
  '#b7e1da',
];

export default function StickyHeadTable(props) {
  const { userList, isLoading } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        {/* Show loader or fallback if loading */}
        {isLoading ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 440,
            }}
          >
            <CircularProgress />
          </Box>
        ) : userList.length === 0 ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 440,
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="No results"
              style={{ width: '30%', marginBottom: '20px' }}
            />
            <p>No results found</p>
          </Box>
        ) : (
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align || 'left'}
                    style={{
                      minWidth: column.minWidth,
                      backgroundColor: '#f9fbfc',
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {userList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user, index) => {
                  const color =
                    backgroundColors[index % backgroundColors.length]; 
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={user.id}
                      component={Link}
                      to={`/user/${user.id}`}
                      style={{ textDecoration: 'none' }}
                    >
                      {columns.map((column) => {
                        if (column.id === 'name') {
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align || 'left'}
                            >
                              <div
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '10px',
                                }}
                              >
                                <div
                                  style={{
                                    backgroundColor: color,
                                    color: '#fff',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                    fontSize: '16px',
                                  }}
                                >
                                  {user.name.charAt(0).toUpperCase()}
                                </div>
                                <span>{user.name}</span>
                              </div>
                            </TableCell>
                          );
                        }

                        const value =
                          column.id === 'city'
                            ? user.address.city
                            : user[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align || 'left'}
                          >
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        )}
      </TableContainer>
      {userList.length > 0 && (
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={userList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </Paper>
  );
}
