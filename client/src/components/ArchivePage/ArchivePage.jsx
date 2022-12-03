import React from 'react';
import { useSelector } from 'react-redux';

export default function ArchivePage() {
  const requests = useSelector((s) => s.requests);
  return (
    <table className="table">
      <thead>
        <tr>
          <th><abbr title="Side">Side</abbr></th>
          <th title="Price">Price</th>
          <th><abbr title="Instrument">Instrument</abbr></th>
          <th><abbr title="Volume">Volume</abbr></th>
          <th><abbr title="Timestamp">Timestamp</abbr></th>
        </tr>
      </thead>
      <tbody>
        {requests?.map((request) => (
          <tr>
            <th>{request?.side?.toUpperCase()}</th>
            <td>{request?.price}</td>
            <td>{request?.instrument}</td>
            <td>{request?.volume}</td>
            <td>{request?.timestamp?.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
