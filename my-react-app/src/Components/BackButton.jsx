import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/") return null;

  return (
    <div style={{ padding: '10px', textAlign: 'center' }}>
      <button
        onClick={() => navigate("/")}
        style={{
          position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        background: 'rgba(0, 0, 0, 0.6)', 
        color: '#fff',
        border: 'none',
        padding: '12px 20px',
        borderRadius: '30px',
        fontSize: '15px',
        cursor: 'pointer',
        fontWeight: 'bold',
        backdropFilter: 'blur(5px)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        transition: 'all 0.3s ease',
        }}
      >
        ← Back to Home
      </button>
    </div>
  );
};

export default BackButton;
