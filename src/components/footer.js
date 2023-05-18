import Facebook from '../images/Facebook.png';
import Twitter from '../images/Twitter.png';
import Intagram from '../images/Instagram.png';
import Github from '../images/GitHub.png';
function Footer() {
  return (
    <footer className="footer">
      <div className="box">
        <img src={Facebook} alt="Facebook-icon" />
        <img src={Twitter} alt="Twitter-icon" />
        <img src={Intagram} alt="Instagram-icon" />
        <img src={Github} alt="Github-icon" />
      </div>
    </footer>
  );
}

export default Footer;
