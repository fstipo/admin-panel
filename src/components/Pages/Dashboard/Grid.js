import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Grid = () => {
  const [rowData] = useState([
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ]);

  const [columnDefs] = useState([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'price' },
    { field: 'price' },
    { field: 'price' },
    { field: 'model' },
    { field: 'make' },
    { field: 'make' },
  ]);

  return (
    <div class="container-fluid d-flex align-items-center justify-content-center">
      <div
        className="bg-info ag-theme-alpine"
        style={{ height: 400, width: '100%' }}
      >
        <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
      </div>
    </div>
  );
};

export default Grid;
