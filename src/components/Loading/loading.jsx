import React from 'react';
import loadergif2 from '../Loading/preloader2.gif';
import './loading.css';

export default function LOADER(props) {
  return (
    <div class="load">
      <img src={loadergif2} alt="loader" />
    </div>
  );
}
