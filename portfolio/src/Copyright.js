
import './App.css';

function App() {
  let year = new Date().getFullYear() 
  return (
    
    <div className='text-center'>
        Copyright © {year} Steve Galea
    </div>
  );
}


export default App;
