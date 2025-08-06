import React from 'react';

export default function Feature({ title, description }) {
  return (
    <div className="feature-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
