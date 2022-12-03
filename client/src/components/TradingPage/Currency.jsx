import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CurrencyDropDown from './CurrencyDropDown';
import styles from './index.module.css';
import ModalCard from './ModalCard/ModalCard';

export default function Currency() {
  const [active, setActive] = useState(false);
  // цель заявки - купить или продать валюту
  const [side, setSide] = useState(false);
  // выбранная валюта
  const currency = useSelector((s) => s.currency);
  // рандомно взятый курс
  const rate = useSelector((s) => s.rate);

  return (
    <>
      <CurrencyDropDown />
      <div className={styles.buttons}>
        <div>
          <button type="button" className="button is-success is-light oneBtn" onClick={() => { setActive(!active); setSide('buy'); }}>BUY</button>
          <div>{rate[currency]?.buy}</div>
        </div>
        <div>
          <button type="button" className="button is-danger is-light oneBtn" onClick={() => { setActive(!active); setSide('sell'); }}>SELL</button>
          <div>{rate[currency]?.sell}</div>
        </div>
      </div>
      {/* Модальное окно */}
      <ModalCard active={active} side={side} setActive={setActive} setSide={setSide} />
    </>
  );
}
