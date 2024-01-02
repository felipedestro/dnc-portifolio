import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer () {
    return (
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/fsdestro' target='_blank'><FaInstagram size="30"/></a> </li>
                <li><a href='https://www.linkedin.com/in/felipe-destro/' target='_blank'><FaLinkedin size='30'/></a></li>
                <li><a href='https://github.com/felipedestro' target='_blank'><FaGithub size='30'/></a></li>
                
            </ul>
            <p>felipe.s.destro@gmail.com</p>
            <p>Felipe Destro © 2023</p>
        </div>
    )
}

export default Footer;