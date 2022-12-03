/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrency } from '../../redux/reducers/currencyReducer';
import styles from './index.module.css';

export default function CurrencyDropDown() {
  const currency = useSelector((s) => s.currency);
  const dispatch = useDispatch();
  const currencyHandler = (e) => {
    dispatch(setCurrency(e.target.value));
  };
  return (
    <div className={styles.center}>
      <div className="select is-info">
        <select onChange={(e) => currencyHandler(e)} defaultValue={currency}>
          <option value="Choose currency" disabled>Choose currency</option>
          <option value="USD/CAD_TOM">USD/CAD_TOM</option>
          <option value="USD/RUB_TOM">USD/RUB_TOM</option>
          <option value="GBP/USD_SPOT">GBP/USD_SPOT</option>
        </select>
      </div>
    </div>
  );
}
