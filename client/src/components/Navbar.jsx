import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '10px 20px', background: '#333', color: '#fff' }}>
      <span style={{ fontWeight: 'bold', marginRight: '30px' }}>Apex Builders</span>
      <Link to="/" style={{ color: '#fff', marginRight: '15px', textDecoration: 'none' }}>Home</Link>
      <Link to="/about" style={{ color: '#fff', marginRight: '15px', textDecoration: 'none' }}>About</Link>
      <Link to="/portfolio" style={{ color: '#fff', textDecoration: 'none' }}>Portfolio</Link>
    </nav>
  );
}
