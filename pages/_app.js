import '@/styles/globals.css';
import Sidebar from '../components/Navbar';

export default function App({ Component, pageProps }) {
  return (
    <Navbar>
      <Component {...pageProps} />
    </Navbar>
  );
}