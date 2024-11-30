import './App.css';
import Header from './components/Header/Header.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="app-wrapper">
      <header>
        <div>
          <Header />
        </div>
      </header>
      <main className="main-content">
        <SearchBar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
