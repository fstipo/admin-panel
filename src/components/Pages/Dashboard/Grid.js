import React, { useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import useAxios from '../../../hooks/useAxios';
import { userData } from './Data';
import { Link } from 'react-router-dom';
import Modal from '../../UI/Modal';

const Grid = () => {
  const gridRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const {
    // isLoading,
    // isError,
    data: notes,
  } = useAxios('https://jsonplaceholder.typicode.com/users');

  let notesEl = [...notes, ...userData];

  const onDetailsClick = () => {};
  const details = (p) => (
    <button className="btn btn-link" onClick={onDetailsClick}>
      <Link to="/details">...details</Link>
    </button>
  );

  const gridOptions = {
    pagination: true,
    paginationAutoPageSize: true,
  };

  const [columnDefs] = useState([
    {
      field: 'id',
      checkboxSelection: true,
      sortable: 'true',
      filter: 'true',
      headerTooltip: 'User id',
      resizable: true,
      width: 90,
    },
    {
      field: 'name',
      sortable: 'true',
      filter: 'true',
      headerTooltip: 'Name',
    },
    {
      field: 'username',
      sortable: 'true',
      filter: 'true',
      headerTooltip: 'Username',
    },
    {
      field: 'email',
      sortable: 'true',
      filter: 'true',
      headerTooltip: 'Email',
    },
    {
      field: 'phone',
      sortable: 'true',
      filter: 'true',
      headerTooltip: 'Phone',
    },
    {
      field: 'website',
      sortable: 'true',
      filter: 'true',
      headerTooltip: 'Website',
    },
    {
      field: 'address.city',
      sortable: 'true',
      filter: 'true',
      headerTooltip: 'City',
    },
    {
      field: 'address.street',
      sortable: 'true',
      filter: 'true',
      headerTooltip: 'Street',
    },
    {
      field: 'address.zipcode',
      sortable: 'true',
      filter: 'true',
      headerTooltip: 'City zipCode',
    },
    {
      field: 'company.name',
      sortable: 'true',
      filter: 'true',
      headerTooltip: 'Company',
    },
    { field: 'details', headerTooltip: 'Details', cellRenderer: details },
  ]);

  const modalHandler = () => {
    setShowModal(true);

    // if (typeof data !== 'undefined') {
    //   setUserData(data);
    //   setUserData((state) => {
    //     setShow(true);
    //     return state;
    //   });
    // } else {
    //   return;
    // }
  };

  return (
    <>
      <Modal showModal={true} />
      <div className="container-fluid d-flex flex-column">
        <div className="bg-dark ">
          <a
            href="#getSelectedRow"
            className="d-block align-items-start p-2 mx-4 text-white text-decoration-none"
            role="button"
            aria-controls="sidebar"
            onClick={modalHandler}
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Get selected row
          </a>
          <div
            className="bg-info ag-theme-alpine"
            style={{ height: 760, width: '100%' }}
          >
            <AgGridReact
              rowData={notesEl}
              columnDefs={columnDefs}
              gridOptions={gridOptions}
              rowSelection="single"
            ></AgGridReact>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
