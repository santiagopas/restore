import React from 'react';
import { Link } from 'react-router-dom';
import ShopMen from './../../assets/shopMens.jpg';
import ShopWomen from './../../assets/shopWomens.jpg';
import './styles.scss';

const Directory = props => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item1"
          style={{
            backgroundImage: `url(${ShopWomen})`
          }}
        >
          <Link to="/search/womens">
            Mujeres
          </Link>
        </div>
        <div
          className="item2"
          style={{
            backgroundImage: `url(${ShopMen})`
          }}
        >
          <Link to="/search/mens">
            Hombres
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Directory;