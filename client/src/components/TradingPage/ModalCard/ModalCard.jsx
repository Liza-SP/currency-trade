/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRequest } from '../../../redux/reducers/requestsReducer';

export default function ModalCard({
  active, setActive, setSide, side,
}) {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const volumeRef = useRef();
  // выбранная валюта
  const currency = useSelector((s) => s.currency);
  // рандомно взятый курс
  const rate = useSelector((s) => s.rate);
  // добавление заявки от пользователя
  const requestHandler = () => {
    const currentRate = rate[currency];
    dispatch(addRequest({
      side, price: currentRate[side], instrument: currency, volume: volumeRef.current.value, timestamp: new Date(),
    }));
    // закрытие модалки
    setActive(!active);
    // обнуление цели заявки
    setSide('');
    setInput('');
    // volumeRef.current.value = '';
  };
  return (
    <div className={active ? 'modal is-active' : 'modal'}>
      <div className="modal-background" onClick={() => setActive(!active)} />
      <div className="modal-card">
        <header className="modal-card-head">
          Make Order
        </header>
        <section className="modal-card-body">
          <div className="card-body">
            {/* пока не выбрали валюту, нельзя оставить заявку */}
            {currency !== 'Choose currency' ? (
              <>
                <div className="text">{`${side.toUpperCase()} ${rate[currency][side]} ${currency}`}</div>
                <div className="field">
                  <label className="label">Volume</label>
                  <div className="control">
                    <input value={input} name="input" onChange={(e) => setInput(e.target.value)} className="input" type="text" ref={volumeRef} />
                  </div>
                </div>
              </>
            ) : 'Choose currency first'}
          </div>
        </section>

        <footer className="modal-card-foot">
          <div className="field is-grouped">
            <div className="control">
              <button type="button" onClick={() => { setActive(!active); setSide(''); }} className="button">Cancel</button>
            </div>
            {currency !== 'Choose currency' && (
              <div className="control">
                <button type="button" onClick={(e) => requestHandler(e)} className="button is-primary">OK</button>
              </div>
            )}
          </div>
        </footer>
      </div>
    </div>
  );
}
