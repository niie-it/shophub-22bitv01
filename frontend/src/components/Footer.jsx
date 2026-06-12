// src/components/Footer.jsx
const Footer = ({ studentName, courseName }) => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        padding: '16px 24px',
        borderTop: '1px solid #ddd',
        marginTop: '24px',
      }}
    >
      <p style={{ margin: 0 }}>© {year} ShopHub</p>
      <p style={{ margin: 0 }}>Student: {studentName}</p>
      <p style={{ margin: 0 }}>Course: {courseName}</p>
    </footer>
  );
};

export default Footer;