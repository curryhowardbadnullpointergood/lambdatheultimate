import "./sidebar.scss"
import wizardGif from '../../assets/wizard.gif'

function Sidebar() {
  return (
      <div class="sidebar">

        <div class="container">
            
            <img src={wizardGif} alt="Wizard with book" />

            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/blog">Blog</a>
            <a href="/about">About</a>

        </div>
      </div>
  );
}

export default Sidebar;
