import "./About.scss"

import worthIt from "../../assets/is_it_worth_the_time.png"

function About() {
  return (
    <div class="about">

      <h1> About: </h1>

      <div class="article">
        

      <p> I've always liked puzzles and solving problems, trying to find loopholes and unconventional solutions by stretching the rules of what is technically possible. Real world decision making can be done through game theory and logic, much like programming. Logic is programming, and as a result code can allow us to make better decisions, letting us apply algorithmic precision in the way we approach problems. Most of this can be automated, which is fascinating. However, sometimes automation isn't always the answer and knowing when <em> not</em> to automate is just as important. </p>



      <p> 
          Ultimately, I believe that the art of coding is a logical philosophy applicable 
    to any domain. It is based on facts and mathematics, not magic. Code works 
    because the underlying structure defines it to do so. Nothing about this is mystical 
    or out of reach. By seeking this depth of understanding, we can push the boundaries 
    of what is possible to deliver consistent, robust, and beautiful software.
      </p>

       <img src={worthIt} alt="Is automation worth it?"/> 

      <p> I'm currently pursuing a master's in Computer Science at the University of Southampton. During my time here I've competed in multiple hackathons, organised numerous events and participated in coding competitions. 
      </p>
    
      <p>
            As of September 2025, I’ve relocated to Southampton (UK), and continue to travel to London. I'm always looking forward to building exciting projects, exploring new ideas, and connecting with like minded people.
      </p>

      </div>
    </div>





  );
}

export default About;

