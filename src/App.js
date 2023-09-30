import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Boreas from './components/Boreas';
import Javiera from './components/Javiera';
import Emilio from './components/Emilio';

function App() {
  return (
    <div>
      <Navbar /> 
      <main>
        <div className="container">
          <div className="subject">
            <Boreas />
          </div>

          <div className="subject">
            <Javiera />
          </div>

          <div className="subject">
            <Emilio />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
