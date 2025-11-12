import "./sidebar.scss"
import wizardGif from '../../assets/wizard.gif'

function Sidebar() {
  return (
      <div class="sidebar">

        <div class="container">
            
            <img src={wizardGif} alt="Wizard with book" />

            <a>Home</a>
            <a>Projects</a>
            <a>Blog</a>
            <a>About</a>

        </div>
      </div>
  );
}

export default Sidebar;
