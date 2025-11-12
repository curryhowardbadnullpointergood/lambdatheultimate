import "./About.scss"

import worthIt from "../../assets/is_it_worth_the_time.png"

function About() {
  return (
    <div class="about">

      <h1> About: </h1>

      <div class="article">
        

      <p> I've always liked puzzles and solving problems, trying to find loopholes and unconventional solutions. Applying programming to real world problems and trying to automate things through algorthmic solutions, is fasinating, it allows you to save time and effort in the long term. Thought sometimes automation isn't always the answer and it has its own caveats.
      </p>

       <img src={worthIt} alt="Is automation worth it?"/> 

      <p> I'm currently pursuing a master's in Computer Science at the University of Southampton. During my time here I've competed in multiple hackathons, organised many events and participtated in coding competitions such as the ICPC. I also enjoy theoretical computer science and find it to have, at times really elegant algorithms and solutions to various problems.   
      </p>
    
      <p>
            As of September 2025, I’ve relocated to Southampton (UK), and continue to travel to London. I'm always looking forward to building innovative software, exploring new ideas, and connecting with like-minded people.
      </p>

      </div>
    </div>





  );
}

export default About;

