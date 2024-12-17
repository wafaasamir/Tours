import React from 'react';
// import "../../styles/tour-grid.css"
function Card({ tour }) {
  const { id, name, price, discount, featured, rate, reviwes, address, img } = tour;

  const navigateToDetails = () => {
    window.location.href = `../../tour-details.html?id=${id}`;
  };

  return (
    <div className="col-md-4 mb-4" id={id} onClick={navigateToDetails}>
      <div className="card d-flex flex-column justify-content-between" style={{ backgroundImage: `url(${img})` }}>
        <div className="d-flex card-badges">
          {discount > 0 && <span className="badge text-bg-success m-2 p-2">{discount}% off</span>}
          {featured && <span className="featured-badge badge m-2 p-2">Featured</span>}
        </div>
        <div className="card-info p-2">
          <p>
            <span className="green-color">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
              </svg>
            </span>
            {address}
          </p>
          <h3>{name}</h3>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-dollar dollar-icon me-1" viewBox="0 0 16 16">
                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/>
              </svg>
              <p>From <span className="orange-color">${(price - (price * discount / 100)).toFixed(0)}.00</span> {discount > 0 && <del>${(price).toFixed(2)}</del>}</p>
            </div>
            <div className="d-flex align-items-end">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill m-1" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              <p><span className="orange-color">{rate}</span> ({reviwes} reviews)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
