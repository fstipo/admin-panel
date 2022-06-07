import React, { useState, useRef } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import useAxios from '../../../hooks/useAxios';
// import { gridColumns } from './gridColumns';
import { userData } from './Data';
import Modal from '../../UI/Modal';

import { Link } from 'react-router-dom';

const Grid = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');
  const [userId, setUserId] = useState('');

  const gridRef = useRef(null);
  const detailsBtn = () => (
    <button className="btn btn-link">
      <Link to={`/details/id/:${userId}`} onClick={userDetailsHandler}>
        ...details
      </Link>
    </button>
  );

  const gridColumns = [
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
      headerName: 'Full Name',
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
      headerName: 'City',
      field: 'address.city',
      sortable: 'true',
      filter: 'true',
      headerTooltip: 'City',
    },
    {
      headerName: 'Street',
      field: 'address.street',
      sortable: 'true',
      filter: 'true',
      headerTooltip: 'Street',
    },
    {
      headerName: 'Zip code',
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
    {
      field: 'details',
      headerTooltip: 'Details',
      cellRenderer: detailsBtn,
    },
  ];
  const [columnDefs] = useState(gridColumns);

  const {
    //isLoading,
    //isError,
    data: notes,
  } = useAxios('https://jsonplaceholder.typicode.com/users');

  let notesEl = [...notes, ...userData];

  const gridOptions = {
    pagination: true,
    paginationAutoPageSize: true,
  };

  const modalHandler = () => {
    const selectedNode = gridRef.current.api.getSelectedNodes();

    if (selectedNode.length) {
      const selectedData = selectedNode.map((node) => node.data);
      setSelectedUser(selectedData[0]);
      setSelectedUser((state) => {
        setShowModal(true);
        return state;
      });
    }
  };

  const userDetailsHandler = (e) => {
    const selectedNode = gridRef.current.api.getSelectedNodes();
    if (selectedNode.length) {
      const selectedData = selectedNode.map((node) => node.data);
      props.onSaveId(selectedData[0].id);
      setUserId(selectedData[0].id);
      setUserId((state) => {
        console.log('');
        return state;
      });
      setSelectedUser(selectedData[0]);
      setSelectedUser((state) => {
        return state;
      });
    }
  };

  return (
    <>
      <Modal
        data={selectedUser}
        show={showModal}
        onHide={() => setShowModal(false)}
      />

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
              ref={gridRef}
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
