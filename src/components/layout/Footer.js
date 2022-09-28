import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import style from './Footer.module.css'

function Footer() {
  return (
    <footer className={style.footer}>
      <ul className={style.social_list}>
        <li >
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedinIn />
        </li>
      </ul>
      <p className={style.copy_right}><span>Costs</span> &copy; 2022</p>
    </footer>
  );
}

export default Footer;
