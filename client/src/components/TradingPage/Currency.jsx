import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNewRate } from '../../redux/reducers/rateReducer';
import CurrencyDropDown from './CurrencyDropDown';
import styles from './index.module.css';
import ModalCard from './ModalCard/ModalCard';

export default function Currency() {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  // цель заявки - купить или продать валюту
  const [side, setSide] = useState('');
  // выбранная валюта
  const currency = useSelector((s) => s.currency);
  // рандомно взятый курс
  const rate = useSelector((s) => s.rate);

  useEffect(() => {
    const interval = setInterval(() => {
      // имитация смены валюты (раз в минуту)
      dispatch(setNewRate());
    }, 1000 * 60);
    // очистить таймер при размантировании компонента
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <CurrencyDropDown />
      <div className={styles.buttons}>
        <div className={styles.oneBtn}>
          <button type="button" className="button is-success is-light" onClick={() => { setActive(!active); setSide('buy'); }}>BUY</button>
          <div className={styles.buy}>{rate[currency]?.buy}</div>
        </div>
        <div>
          <button type="button" className="button is-danger is-light" onClick={() => { setActive(!active); setSide('sell'); }}>SELL</button>
          <div className={styles.sell}>{rate[currency]?.sell}</div>
        </div>
      </div>
      {/* Модальное окно */}
      <ModalCard active={active} side={side} setActive={setActive} setSide={setSide} />
    </>
  );
}
