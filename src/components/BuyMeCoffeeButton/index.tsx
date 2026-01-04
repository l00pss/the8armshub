import React from 'react';

interface BuyMeCoffeeButtonProps {
  username: string;
  color?: string;
  message?: string;
}

const BuyMeCoffeeButton: React.FC<BuyMeCoffeeButtonProps> = ({
  username,
  color = '#FFDD00',
  message = 'Buy me a coffee'
}) => {
  return (
    <div style={{ margin: '20px 0', textAlign: 'center' }}>
      <a
        href={`https://www.buymeacoffee.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '10px 20px',
          backgroundColor: color,
          color: '#000',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          fontSize: '16px',
          border: '2px solid #000',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0px)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <span style={{ marginRight: '8px', fontSize: '20px' }}>☕</span>
        {message}
      </a>
    </div>
  );
};

export default BuyMeCoffeeButton;
