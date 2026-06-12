// src/components/FeatureSection.jsx
const FeatureSection = () => {
  const features = [
    {
      title: 'Fast Delivery',
      description: 'Get your products delivered within 2–3 days.',
    },
    {
      title: 'Secure Payments',
      description: 'All transactions are protected with modern encryption.',
    },
    {
      title: 'Multiple Shops',
      description: 'Browse products from different shops in one place.',
    },
  ];

  return (
    <section style={{ padding: '24px' }}>
      <h2>Why ShopHub?</h2>
      <div>
        {features.map((feature) => (
          <div
            key={feature.title}
            style={{
              marginBottom: '16px',
              padding: '12px',
              border: '1px solid #eee',
              borderRadius: '4px',
            }}
          >
            <h3 style={{ marginTop: 0 }}>{feature.title}</h3>
            <p style={{ marginBottom: 0 }}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;