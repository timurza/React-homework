import React from 'react';
import './footer.css';

function Footer () {

    return (
        
            <section className='footer'>
                <section className = "footer-info-left">
                    2020 All rights reserved
                </section>
                <section className = "footer-info-center">
                    IT SHATLE
                </section>
                <section className = "footer-info-right">
                    <a href ='#' className ="fb"></a>
                    <a href ='#' className ="inst"></a>
                    <a href ='#' className ="pint"></a>
                </section>
            </section>
        
    )
}

export default Footer;