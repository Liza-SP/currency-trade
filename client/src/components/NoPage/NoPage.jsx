import React from 'react';

export default function NoPage() {
  return (
    <div style={{ position: 'relative', minHeight: 'calc(100vh - 70px)' }}>
      <h2
        style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        }}
      >
        Not Found | 404
      </h2>
    </div>
  );
}
