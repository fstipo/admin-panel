import React, { useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import useAxios from '../../../hooks/useAxios';
import { gridColumns } from './gridColumns';
import { userData } from './Data';
import Modal from '../../UI/Modal';

const Grid = ({ setModalShow }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');
  const gridRef = useRef(null);
  const {
    //isLoading,
    //isError,
    data: notes,
  } = useAxios('https://jsonplaceholder.typicode.com/users');

  let notesEl = [...notes, ...userData];

  const onDetailsClick = () => {};
  // aria - selected('true');

  const gridOptions = {
    pagination: true,
    paginationAutoPageSize: true,
  };

  const [columnDefs] = useState(gridColumns);

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
