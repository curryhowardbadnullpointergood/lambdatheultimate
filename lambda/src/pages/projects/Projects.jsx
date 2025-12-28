import "./Projects.scss"


function Projects() {
  return (
    <div class="projects">

      <h1> Projects: </h1>

      <div class="article">
        
        <p>Here are some of the projects I've worked on over the last few years. I like to explore the full stack so there is a mix of concurrent backend systems, interactive front ends and ML models. Some of these projects are open source, some of them are research experiments where I reimplement code from academic papers, and some are closed-source programs. </p>

        <h3>Lambda The Ultimate:</h3>

        <p> This is a github repo that contains the code for this website. Including the custom wiki styling. The domain name refers to the quote from various papers from the 70s, to read more about it click <a href="https://softwareengineering.stackexchange.com/questions/107687/what-is-the-origin-and-meaning-of-the-phrase-lambda-the-ultimate" target="blank"> here! </a> It's a popular phrase amongst programmers that like functional programming, which is why I took the .com domain for it, the .org domain is a famous forum, that also looks a bit like the old wikipedia. </p>
        <a href="https://github.com/curryhowardbadnullpointergood/lambdatheultimate" target="_blank"> Lambdatheultimate</a>


        <h3>Symbolic Regression Engine:</h3>

        <p>This project explores discovering physical laws through syntehtic data, and I use symbolic regression, where I build the engine from scratch in python, then iteratively add pruning stratergies that exploit the physical relationships of equations, in order to efficiently find the correct equation for the dataset. It was later extended to also work in other domains such as biology and finance.</p>
        <a href="https://github.com/curryhowardbadnullpointergood/AI-Law-Finder.git" target="_blank"> Symbolic Engine</a>

        <h3>LifeSync:</h3>

        <p> A GUI calendar project that aims to algorithmically make decisions based on data from wearable devices. Still a long ways off, but I've been making progress. This is literally a sci fi idea, which makes building it a lot of fun. Check out this page to learn more. <a> LINK TO BLOG LIFESYNC UPDATE every now and then. build that into the ui</a></p>

        <a href="https://github.com/curryhowardbadnullpointergood/LifeSync.git" target="_blank"> LifeSync</a>

        <h3>Visualising Differntial Privacy:</h3>

        <p> Group project, where I worked with SeCore.ai to produce a visual platform that helps non-technical users understand the advantages of anonmising data through differntial prvacy techniques.</p>

        <a href="https://github.com/curryhowardbadnullpointergood/SeCore.ai.git" target="_blank"> SeCore.ai</a>

        <h3>Ode:</h3>

        <p> A social media app that primarily aims to sell and buy tikets for events, and lets users message and text each other. It has authorisation, login, accounts for sellers and users, email verification and 2FA, as well as messaging, event posting, and social media profiles. You can also add and make friends. Primarily used cloud based services to function.</p>
        <a href="https://github.com/curryhowardbadnullpointergood/Ode.git" target="_blank"> Ode</a>

        <h3>Aho Corasick:</h3>

        <p> My favourite string matching algorithm of all time. Implemented in Ocaml. </p>

        <a href="https://github.com/curryhowardbadnullpointergood/Aho_Corasick.git" target="_blank"> Aho Corasick</a>


      </div>

    </div>





  );
}

export default Projects;


