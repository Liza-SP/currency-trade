/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRequest } from '../../redux/reducers/requestsReducer';
import CurrencyDropDown from './CurrencyDropDown';
import styles from './index.module.css';

export default function Currency() {
  const [active, setActive] = useState(false);
  const [side, setSide] = useState(false);
  const dispatch = useDispatch();
  const currency = useSelector((s) => s.currency);
  const rate = useSelector((s) => s.rate);

  const requestHandler = () => {
    dispatch(addRequest({
      side, price: '', instrument: currency, volume: '', timestamp: new Date(),
    }));
    setActive(!active);
    setSide('');
  };
  return (
    <>
      <CurrencyDropDown />
      <div className={styles.buttons}>
        <div>
          <button type="button" className="button is-success is-light" onClick={() => { setActive(!active); setSide('BUY'); }}>BUY</button>
          <div>{rate[currency]?.buy}</div>
        </div>
        <div>
          <button type="button" className="button is-danger is-light" onClick={() => { setActive(!active); setSide('SELL'); }}>SELL</button>
          <div>{rate[currency]?.sell}</div>
        </div>
      </div>

      <div className={active ? 'modal is-active' : 'modal'}>
        <div className="modal-background" onClick={() => setActive(!active)} />
        <div className="modal-card">
          <header className="modal-card-head">
            Make Order
          </header>
          <section className="modal-card-body">
            <div className="card-body">

              {/* <Form  /> */}

            </div>
          </section>
          <footer className="modal-card-foot">
            <div className="field is-grouped">
              <div className="control">
                <button type="button" onClick={() => { setActive(!active); setSide(''); }} className="button">Cancel</button>
              </div>
              <div className="control">
                <button type="button" onClick={requestHandler} className="button is-primary">OK</button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
