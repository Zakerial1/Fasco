import React from "react";
import styles from'./cart_page.module.css'


function Cart_page(params) {
    return (
        <div className={styles.box_cart}>
            <div>
                <img src="https://i.imgur.com/Fnx0nxl.png" />
            </div>
            <div className={styles.box_email}>
                <h1>
                    Subscribe To Our Newsletter
                </h1>
                <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin 
                </h4>
                <input className=""/>
            </div>
            <div>
                <img src="https://i.imgur.com/O35V0N8.png" />
            </div>
        </div>
    )
}

export default Cart_page;