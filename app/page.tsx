export default function Home() {
  return (
    <main style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Support Our Cause</h1>

        <p style={styles.description}>
          Your contribution helps us continue our work and make a positive
          impact. Every donation, no matter the amount, is appreciated.
        </p>

        <section style={styles.section}>
          <h2>Donate via QR Code</h2>

          {/* Replace /qr.png with your actual QR code image */}
          <img
            src="/qr.png"
            alt="Donation QR Code"
            style={styles.qr}
          />

          <p>Scan the QR code using any supported payment app.</p>
        </section>

        <section style={styles.section}>
          <h2>Bank Account Details</h2>

          <div style={styles.bankBox}>
            <p><strong>Account Name:</strong> YOUR NAME OR ORGANIZATION</p>
            <p><strong>Bank:</strong> YOUR BANK NAME</p>
            <p><strong>Account Number:</strong> XXXXXXXXXXXX</p>
            <p><strong>IFSC/SWIFT:</strong> XXXXXXXX</p>
            <p><strong>Branch:</strong> YOUR BRANCH</p>
          </div>
        </section>

        <section style={styles.section}>
          <h2>Contact</h2>
          <p>Email: contact@example.com</p>
        </section>

        <footer style={styles.footer}>
          Thank you for your support ❤️
        </footer>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f4f5",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "#fff",
    maxWidth: "700px",
    width: "100%",
    borderRadius: "16px",
    padding: "32px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "12px",
  },
  description: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#555",
  },
  section: {
    marginBottom: "30px",
  },
  qr: {
    width: "250px",
    maxWidth: "100%",
    display: "block",
    margin: "20px auto",
  },
  bankBox: {
    background: "#f8fafc",
    padding: "16px",
    borderRadius: "10px",
    lineHeight: "1.8",
  },
  footer: {
    textAlign: "center",
    marginTop: "20px",
    fontWeight: "bold",
  },
};
