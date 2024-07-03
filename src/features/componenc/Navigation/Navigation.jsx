import { Link, useNavigate } from "react-router-dom";
import styles from './navigation.module.css'
import { newLogin } from "../Slices/SliceRegistr";
import { selectAutorizUser, selectCurrentUser } from '../Slices/SliceRegistr';
import { useDispatch, useSelector } from "react-redux";

import i18next from '../Route/i18n'
function Navigation() {
    const dispatch = useDispatch();
    const Users = useSelector(selectAutorizUser);
    let User = useSelector(selectCurrentUser);
    console.log(User);

    // if (Users.autorizac.autoriz) {

    // }
    return (
        <div className={styles.box_navigation_modul}>
            <Link to='/' className={styles.linkNavig}>
            {i18next.t("navigation.home")}
            </Link>
            <Link to='/Shop' className={styles.linkNavig} onClick={() => {
                // dispatch(newLogin())
            }}>
                {i18next.t("navigation.Shop")}
            </Link>
            <Link className={styles.linkNavig}>
                Products
            </Link>
            <Link className={styles.linkNavig}>
            {i18next.t("navigation.Pages")}
            </Link>
            <Link className={styles.linkNavig} to='/Shop/:namePlashka/ShoppingCard'>
            {i18next.t("navigation.Corzina")}
            </Link>
            <div  className={styles.box_Sign}>
                <Link to={"/Sing_up"}>
                    <button className={Users ? styles.box_registr_shadow : styles.box_registr} >Sign Up</button>
                </Link>
                <Link to={"/Sing_in"}>
                    <button className={Users ? styles.box_registr_shadow : styles.box_registr} >Sign Ip</button>
                </Link>
                <p className={Users ? styles.box_registr : styles.box_registr_shadow}>
                    <Link to="/PageU">
                        <img className={ styles.imgUser} src={`${User.imgUserIcon}`} />
                    </Link>
                    {User.First_Name}
                </p>

            </div>
        </div >
    )
}
export default Navigation;