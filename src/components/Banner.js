import Typewriter from 'typewriter-effect';
import "./wowBanner.css"
import astronaut from "../astronaut.png"

const Banner = ()=> {
	return(
	<div className="Banner" id="home">
  <div className="main-text-container">
  
	<h1 className="main-text">
    <Typewriter 
        onInit={(typewriter) => {
              typewriter
              .typeString("Hey I'm ")
              .typeString('Web Developer!')
              .pauseFor(2700)
              .deleteChars(14)
              .typeString('Frontend Developer!')
              .pauseFor(2100)
              .deleteChars(19)
              .typeString('Backend Developer!')
              .deleteChars(18)
              .typeString('Fullstack Developer!')
              .deleteAll()
              .start();
         }
     	}
          options={{
          	autoStart: true,
    		loop: true,
  		  }}
    />
    </h1>
    </div>
    <div className="img-container">
      <img className="astronaut-img" src={astronaut} />
    </div>
    </div>
    )
}

export default Banner