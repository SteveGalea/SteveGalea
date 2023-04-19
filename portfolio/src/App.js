import profile from './ui/profile720.jpg';
import './App.css';
function App() {
  
  let terminal_string = ">>>\t"
  return (
    
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ><code>Developed using ReactJS</code> 
        </a>  */} 
        {/* <a 
          className="top-arrow"
          href="#landing"
          ><svg src={arrow_up} width="1000%" height="1000%"></svg></a>    */}
        <div>  
          <h1 className='hover_text'>
            <code>{terminal_string}print(greeting)</code>
          </h1>
          <p className="css-text css-typing hover_text" 
          onAnimationEnd={(e) => {
            const devStudent = document.querySelector('.d');
            devStudent.classList.add('show');
            devStudent.classList.add('css-text');
            devStudent.classList.add('css-typing');
            devStudent.classList.add('hover_text');
            devStudent.classList.add('text_1-5em');

          }}>Hey! I'm Steve</p>
          <p id="dev" className="d">Software Development Student</p>
          
        </div> 
        
      </header>
      <div id='aboutMe' className='text-center'>
        <h1 className='hover_text'>
          <code>{terminal_string}print(steve.info)</code>
        </h1>
        <br/>  
        <div className='about-text'>
          <p className="text">
            Welcome to my portfolio! I am currently in my third and final year of my Bachelor's in Software Development at the University of Malta. I am always seeking to expand my skills and explore new areas of interest within the technological domain.</p><br/>
          <p className='text'>
            When I am not coding or working on new projects, I keep myself focused and energized by practicing sports such as football, running, jogging, and cycling! In addition to my academic pursuits and hobbies, I am deeply committed to making a positive impact in my local community. Together, with my friends at Nadur Nadif, we promote positive change in our community through clean-ups and education campaigns.</p><br/>
          <p className='text'>
            Looking ahead, I plan to continue my education by pursuing a master's degree next year. I am excited to see where my skills will take me, and I look forward to sharing my favourite projects on this portfolio website!</p><br/>
          <p className='text text-center'>
            Thank you for visiting! 😁</p><br/>
        </div>
        <br/>
        <div className="text-center">
          <img 
            src={profile} 
            className="border border-danger rounded-circle w-25 image-transition p-2 min-w-200" 
              alt="Profile"/>     

          </div>     
          <br/>  
      </div>
    </div>
    
  );
}


export default App;
