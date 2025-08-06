import React from 'react';

export default function FilterPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#0d3b66', // Deep blue tone
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px 20px',
        textAlign: 'center',
        fontFamily: 'sans-serif',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
        🚧 Coming Soon at echo.ai 🚀
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '30px', maxWidth: '500px' }}>
        We're working hard on something incredible. Be the first to get access when it's live.
      </p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfoFoVWoE0ShZJ82DWgHqzxjAaLZzwl045ffO2HOXhtV2mrYQ/viewform?usp=dialog" // Replace with your real form
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: '14px 28px',
          backgroundColor: '#00aaff',
          color: '#ffffff',
          textDecoration: 'none',
          borderRadius: '6px',
          fontSize: '1rem',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#008ecc')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#00aaff')}
      >
        Join the Waitlist
      </a>
    </div>
  );
}
