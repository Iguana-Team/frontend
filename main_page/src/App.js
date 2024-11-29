import './App.css';
import Logo from './components/Logo/Logo.js';
import SearchBar from './components/SearchBar/SearchBar.js';

function App() {
  return (
    <div>
      <header>
        <Logo />
      </header>

      <body>
        <SearchBar />
      </body>
    </div>
  );
}

export default App;