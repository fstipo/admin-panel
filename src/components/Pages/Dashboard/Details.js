import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../UI/Header';

const Details = ({ userId }) => {
  return (
    <>
      <Header name="Details" icon="cloud-download" />
      <div className="p-4 display-6">user Id:{userId}</div>
      <div className="container-flow">
        <div className="row ms-5">
          <div className="col-12">
            <div className="my-5">
              <h3>{/* User Details: {userData.first} {userData.last} */}</h3>
            </div>

            <form className="file-upload">
              <div className="row mb-5 gx-5">
                <div className="col-xl-8 mb-5 mb-xxl-10">
                  <div className="bg-secondary-soft px-4 py-3 rounded">
                    <div className="row g-3">
                      <h4 className="mb-4 mt-0">Contact detail</h4>

                      <div className="col-md-12">
                        <label className="form-label">First Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          aria-label="First name"
                          // defaultValue={userData.first}
                        />
                      </div>

                      <div className="col-md-12">
                        <label className="form-label">Last Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          aria-label="Last name"
                          // defaultValue={userData.last}
                        />
                      </div>

                      <div className="col-md-12">
                        <label htmlFor="inputEmail4" className="form-label">
                          Email *
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="inputEmail4"
                          // defaultValue={userData.email}
                        />
                      </div>

                      <div className="col-md-12">
                        <label className="form-label">Address *</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          aria-label="Address"
                          // defaultValue={userData.address}
                        />
                      </div>

                      <div className="col-md-12">
                        <label className="form-label">Created *</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          aria-label="created"
                          // defaultValue={userData.created}
                        />
                      </div>

                      <div className="col-md-12">
                        <label className="form-label">Balance *</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          aria-label="Phone number"
                          // defaultValue={userData.balance}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="gap-3 d-md-flex justify-content-center text-center">
                  <button type="button" className="btn btn-danger btn-lg">
                    Delete profile
                  </button>
                  <button type="button" className="btn btn-primary btn-lg">
                    Update profile
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
