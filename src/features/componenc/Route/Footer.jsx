import React from 'react'
import styles from '../Homepage/homepage.module.css'
function Footer() {
    return (
        <div>
            <div className={styles.box_info}>
                <div className={styles.box_logo}>
                    <p className={styles.logo}>FASCO</p>
                </div>
                <div className={styles.box_info}>
                    <div className={styles.footer_text}>
                        <a>
                            Support Center
                        </a>
                    </div>
                    <div className={styles.footer_text}>
                        <a>
                            Invoicing
                        </a>
                    </div>
                    <div className={styles.footer_text}>
                        <a>
                            Contract
                        </a>
                    </div>
                    <div className={styles.footer_text}>
                        <a>
                            Careers
                        </a>
                    </div>
                    <div className={styles.footer_text}>
                        <a>
                            Blog
                        </a>
                    </div>
                    <div className={styles.footer_text}>
                        <a>
                            FAQ,s
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>
                    Copyright © 2022 Xpro . All Rights Reseved.
                </p>
            </div>
        </div>
    )
}
export default Footer;