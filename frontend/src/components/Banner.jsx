// src/components/Banner.jsx
const Banner = ({ subtitle, buttonText }) => {
  return (
    <section
      style={{
        padding: '32px 24px',
        backgroundColor: '#f5f5f5',
        textAlign: 'left',
      }}
    >
      <h2 style={{ marginTop: 0 }}>{subtitle}</h2>
      <p>
        Discover our latest products, best deals, and exclusive offers tailored just for you.
      </p>
      <button
        style={{
          marginTop: '12px',
          padding: '8px 16px',
          backgroundColor: '#1976d2',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        {buttonText}
      </button>
    </section>
  );
};

export default Banner;