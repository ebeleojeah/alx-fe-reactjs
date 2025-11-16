function Footer() {
  return (
    <footer style={{
      backgroundColor: '#2c3e50',
      color: '#ecf0f1',
      textAlign: 'center',
      padding: '1.5rem 0',
      marginTop: '3rem'
    }}>
      <p>&copy; {new Date().getFullYear()} My Company</p>
    </footer>
  );
}

export default Footer;
