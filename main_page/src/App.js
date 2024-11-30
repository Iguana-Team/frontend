import './App.css';
import Logo from './components/Logo/Logo.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import Footer from './components/Footer/Footer.js'

function App() {
  return (
    <div>
        <Logo />
        <SearchBar />
        <h1>Header number 1</h1>
        <p>Some text</p>
        <Footer />
    </div>
  );
}

export default App;