
import './App.css';

function App() {
  let terminal_string = ">>>\t"
  return (
    
    <div className='text-center'>
      <h1 className='hover_text'>
        <code>{terminal_string}print(Projects.query.all())</code>
      </h1>
    </div>
  );
}


export default App;
