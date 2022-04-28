import React from 'react';
import { Container,Box,Link,Grid,Divider } from '@material-ui/core';

export default function Footer(props) {
    return( 
      <footer class="footer-section bg_img bg_img6">
    <div class="footer-top">
        <div class="container">
            <div class="footer-wrapper d-flex flex-wrap align-items-center justify-content-md-between justify-content-center">
                <div class="logo mb-3 mb-md-0"></div>
                <ul class="footer-links d-flex flex-wrap justify-content-center">
                   <li><a href="#"> Game Rules</a></li>
                    <li><a href="#">| &nbsp; Disclaimer</a></li>
                    <li><a href="#">| &nbsp; Privacy Policy</a></li>
                     <li><a href="#">| &nbsp; Terms & Conditions</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container">
            <div class="footer-wrapper d-flex flex-wrap justify-content-center align-items-center text-center">

                <p class="copyright text-white">© Copyright CSTswap 2022 &nbsp;<a href="https://bscscan.com/address/0x2aE41DBc710c23915b03044d5aDa53a5a946F96b#code" target="_blank"style={{color: '#fff' , fontweight: 'bold'}}>Smart Contract <i class="fa fa-hand-o-left" aria-hidden="true"></i></a></p>
            </div>
        </div>
    </div>
    <div class="shapes">
        <img src="/rule.png" alt="footer" class="shape1"/>
    </div>
</footer>
    )
}