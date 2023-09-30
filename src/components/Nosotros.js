import './App.css';
import CBoreas from './CBoreas';
import CJaviera from './CJaviera';
import CEmilio from './CEmilio';

function Nosotros() {
    return (
    <main>
        <div className="container">
          <div className="subject">
            <CBoreas />
          </div>
        
          <div className="subject">
            <CJaviera />
          </div>
        
          <div className="subject">
            <CEmilio />
          </div>
        </div>
    </main>
    );
  }
  
  export default Nosotros