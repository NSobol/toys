import './App.css';
import Header from './components/headers/header/Header.jsx';
import Footer from './components/footers/footer/Footer.jsx';
import { Content } from './components/content/Content';

function App() {
  return (
    <div className='App'>
      <Header />
      <Content/>
      <Footer />
    </div>
  );
}

export default App;
