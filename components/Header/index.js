
import styles from './header.module.css';
import Fade from 'react-reveal/Fade';
const Header = () => {

    return (
        <Fade right>
            <div className={`${styles['image-wrapper']}`}>
                <img
                    className={`${styles['image']}`}
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63324b315a7e3f0310665513/6373beb18d7d66001180ae52/16688856712931251307.png"
                />
            </div>
        </Fade>

    );
}
export default Header