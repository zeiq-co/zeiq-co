import React from 'react';

const data = [
  {
    id: 1,
    content:
      ' em ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat. Duis auteirure dolor in reprehenderit in voluptate velit esse cillumdolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    id: 2,
    content: 'fbjhwebvjew em ipsum dolor sit amet, consectetur adipiscing eli',
  },
  {
    id: 3,
    content: 'fnbejbfjefem ipsum dolor sit amet, consectetur adipiscing eli',
  },
  {
    id: 4,
    content:
      'nwjvbejbvejfbejhfhjwefem ipsum dolor sit amet, consectetur adipiscing eli',
  },
];

const test = () => (
  <div className="container">
    <div className="row my-4">
      <div className="col">
        <div className="container-fluid">
          <div className="row">
            {data.map((item) => (
              <div className="col-lg-4 col-sm-6 d-flex" key={item.id}>
                <div className="card mt-5 card-body flex-fill">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default test;
