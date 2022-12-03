/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRequest } from '../../../redux/reducers/requestsReducer';

export default function ModalCard({
  active, setActive, setSide, side,
}) {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  // выбранная валюта
  const currency = useSelector((s) => s.currency);
  // рандомно взятый курс
  const rate = useSelector((s) => s.rate);
  // добавление заявки от пользователя
  const requestHandler = () => {
    const currentRate = rate[currency];
    const request = {
      side, price: currentRate[side], instrument: currency, volume: input, timestamp: JSON.stringify(new Date().toLocaleString()),
    };
    dispatch(addRequest(request));
    // добавление в sessionStorage для сохранения при перезагрузке
    const requests = JSON.parse(sessionStorage.getItem('requests')) || [];
    requests?.push(request);
    sessionStorage.setItem('requests', JSON.stringify(requests));
    // закрытие модалки
    setActive(!active);
    // обнуление цели заявки
    setSide('');
    setInput('');
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
                    <input value={input} name="input" onChange={(e) => setInput(e.target.value)} className="input" type="text" />
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
