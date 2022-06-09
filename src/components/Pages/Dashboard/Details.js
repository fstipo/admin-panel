import React, { useEffect, useState } from 'react';
import Header from '../../UI/Header';

const Details = ({ userId }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // const url = 'https://api.adviceslip.com/advice';
    const url = `https://jsonplaceholder.typicode.com/users`;
    // const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    // userID

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        if (userId > 10) {
          console.log('Hello');
          return;
        }
        const user = json.filter((data) => userId === data.id);
        if (user) {
          setUserData((prevUser) => (prevUser = user[0]));
          // setUserData((state) => {
          //   console.log(state);
          //   return state;
          // });
          console.log(user);
        }
      } catch (error) {
        console.log('error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header name="Details" icon="cloud-download" />

      <div className="container-flow">
        <div className="row ms-5">
          <div className="col-12">
            <div className="my-1">
              <h3>User: {userData.name}</h3>
            </div>

            <form className="file-upload">
              <div className="row mb-5 gx-5">
                <div className="col-xl-8 mb-5 mb-xxl-10">
                  <div className="bg-secondary-soft px-4 py-3 rounded">
                    <div className="row g-3">
                      <h4 className="mb-4 mt-0">
                        Contact detail {userData.id}
                      </h4>

                      <div className="col-md-12">
                        <label className="form-label">Full Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          aria-label="First name"
                          defaultValue={userData.name}
                        />
                      </div>

                      <div className="col-md-12">
                        <label className="form-label">Username *</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          aria-label="Last name"
                          defaultValue={userData.username}
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
                          defaultValue={userData.email}
                        />
                      </div>

                      <div className="col-md-12">
                        <label className="form-label">City *</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          aria-label="City"
                          // defaultValue={userData.address.city}
                          defaultValue={
                            !userData.address ? '' : userData.address.city
                          }
                        />
                      </div>

                      <div className="col-md-12">
                        <label className="form-label">Phone *</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          aria-label="Phone number"
                          defaultValue={userData.phone}
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
