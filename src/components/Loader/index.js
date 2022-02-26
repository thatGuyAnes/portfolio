import React from 'react';

const Loader = () => {
  return (
    <>
      <div className="loader">
        <div className="inner">
          <div className="progress">
            <span>un momento per favore</span>
            <div className="ellipsis-container">
              <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
