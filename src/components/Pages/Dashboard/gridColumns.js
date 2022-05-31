import { Link } from 'react-router-dom';
const detailsBtn = () => (
  <button className="btn btn-link">
    <Link to="/details" onClick={() => console.log('Klik')}>
      ...details
    </Link>
  </button>
);

export const gridColumns = [
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
