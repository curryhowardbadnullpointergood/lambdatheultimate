import "./Projects.scss"


function Projects() {
  return (
    <div class="projects">

      <h1> Projects: </h1>

      <div class="article">
        
        <p>Here are some of the projects I've worked on over the years. I like to explore the full stack so there is a mix of concurrent backend systems, interactive front ends and ML models. Some of these projects are open source, some of them are research experiments where I reimplement code from academic papers, and some are closed source programs. </p>

        <h3>Lambda The Ultimate:</h3>

        <p> This is a github repo that contains the code for this website. Including the custom wiki styling. The domain name refers to the quote from various papers from the 70's, to read more about it click <a href="https://softwareengineering.stackexchange.com/questions/107687/what-is-the-origin-and-meaning-of-the-phrase-lambda-the-ultimate" target="blank"> here! </a> It's a popular phrase amongst programmers that like functional programming, which is why I took the .com domain for it, the .org domain is a famous forum, that maintains the aesthetics of the old programming forums. </p>

        <a href="https://github.com/curryhowardbadnullpointergood/lambdatheultimate" target="_blank"> Lambdatheultimate</a>


        <h3>Symbolic Regression Engine:</h3>

            <p>This project explores discovering physical laws through synthetic data, by using symbolic regression. I have built the engine from scratch using first principles and minimal libraries in Python. A range of iterative pruning strategies have been applied that shorten the search space through exploiting the physical properties of the laws. This allows for the efficient discovery of the correct equations for the specified data. It was later extended to also work in other domains such as biology and finance.</p>

        <a href="https://github.com/curryhowardbadnullpointergood/AI-Law-Finder.git" target="_blank"> Symbolic Engine</a>

        <h3>LifeSync:</h3>

              <p> A GUI calendar project that aims to algorithmically make decisions based on data from wearable devices. This is a large scale project that is still in progress, so far the basics of the UI have been completed, where I drew inspiration from google calendar. This is a multifaceted constraint satisfaction problem that tries to optimise time, health, calories, time off, time spent working effectively. Building this has been really fun as I don’t think anything like this exists in the world. Check out the blog to learn more.</p>

        <a href="https://github.com/curryhowardbadnullpointergood/LifeSync.git" target="_blank"> LifeSync</a>

        <h3>Visualising Differential Privacy:</h3>

          <p> This was a group project, where I worked with <a href="https://secore.ai/" target="_blank">SeCore.ai</a> to produce a visual platform that helps non technical users understand the advantages of anonymising data through differential privacy techniques.</p>

        <a href="https://github.com/curryhowardbadnullpointergood/SeCore.ai.git" target="_blank"> SeCore.ai</a>

        <h3>Ode:</h3>

      <p> Ode is a social media app that lets users sign up to events and maintain contact with the people that went to the event before and after it has finished. This lets people of similar interests in music to connect before the event starts, allowing them to get to know people before the event, which helps build a social connection based on interests in music. Furthermore, there were separate accounts for businesses, business profiles and location based event recommendation. The authorisation, chat, email verification and hosting were all based on cloud based APIs and technology. </p>

        <a href="https://github.com/curryhowardbadnullpointergood/Ode.git" target="_blank"> Ode</a>

        <h3>Aho Corasick:</h3>

        <p> My favourite string matching algorithm of all time. Implemented in OCaml. </p>

        <a href="https://github.com/curryhowardbadnullpointergood/Aho_Corasick.git" target="_blank"> Aho Corasick</a>


      </div>

    </div>





  );
}

export default Projects;


