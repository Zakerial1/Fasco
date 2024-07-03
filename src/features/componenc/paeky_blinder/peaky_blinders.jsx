import styles from '../Shop/Shop.module.css'
import stylesHomepage from '../Homepage/homepage.module.css'
function Paeky(){
    return(
<div className={styles.peaky_blinders}>
                <div className={styles.box_peaky_blinders_Img}>
                    <img className={styles.peaky_blinders_Img} src="https://i.imgur.com/5HzJu2v.png" />
                </div>
                <div className={styles.box_peaky_blinders_Lorem}>
                    <div className={styles.peaky_blinders_Lorem}>
                        <p className={styles.women_coll}>Women Collection</p>
                        <h2 className={styles.paeky_H2}>Peaky Blinders</h2>
                        <p className={styles.paeky_Des}>DESCRIPTION</p>
                        <p className={styles.women_coll}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis.</p>
                        <p>Size:<buuton className=''>M</buuton></p>
                        <button className={styles.but_Sign}>Buy now</button>
                    </div>
                </div>
            </div>


)}
export default Paeky;