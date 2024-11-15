
// It is section for All contact details

import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TablePagination,
  Button,
  Paper,
  Box,
  Typography
} from '@mui/material';
import { Link } from 'react-router-dom';

const ContactTable = ({ contacts, onDelete }) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('firstName');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (property) => {
    const isAscending = orderBy === property && order === 'asc';
    setOrder(isAscending ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortedContacts = [...contacts].sort((a, b) => {
    const comparison = a[orderBy].localeCompare(b[orderBy]);
    return order === 'asc' ? comparison : -comparison;
  });

  const displayedContacts = sortedContacts.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper sx={{ width: '100%', margin: 'auto', marginTop: 4 }}>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 2,
          backgroundColor: '#f5f5f5',
          borderBottom: '1px solid #ddd',
        }}
      >
        {/* Create New button */}
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/create"
          sx={{
            textTransform: 'none',
            fontWeight: 'bold',
          }}
        >
          Create New Contact
        </Button>

        <Typography variant="h5" fontWeight="bold" textAlign="center">
          Contact Management
        </Typography>
      </Box>


      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {['firstName', 'lastName', 'email', 'phone', 'company', 'jobTitle'].map((column) => (
                <TableCell key={column}>
                  <TableSortLabel
                    active={orderBy === column}
                    direction={orderBy === column ? order : 'asc'}
                    onClick={() => handleRequestSort(column)}
                  >
                    {column.charAt(0).toUpperCase() + column.slice(1)}
                  </TableSortLabel>
                </TableCell>
              ))}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedContacts.map((contact) => (
              <TableRow key={contact._id}>
                <TableCell>{contact.firstName}</TableCell>
                <TableCell>{contact.lastName}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell>{contact.company}</TableCell>
                <TableCell>{contact.jobTitle}</TableCell>
                <TableCell>
                  <Link to={`/edit/${contact._id}`} style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary">Edit</Button>
                  </Link>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => onDelete(contact._id)}
                    sx={{ marginLeft: 2 }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={contacts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default ContactTable;






