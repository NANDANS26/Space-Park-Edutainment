import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Space Adventure Park. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;