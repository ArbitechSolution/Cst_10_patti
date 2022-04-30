import React from "react";
import { Container, Box, Link, Grid, Divider } from "@material-ui/core";
import { BiUserPlus } from "react-icons/bi";
import { FaDice, FaMoneyBillAlt, FaGoogleWallet } from "react-icons/fa";
import { AiOutlineIdcard } from "react-icons/ai";
//import image from "../../assets/smart.png"

export default function Game(props) {
  return (
    <section class="how-section padding-top padding-bottom bg_img3 bg_img ">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="section-header text-center">
              <h2 class="section-header__title">How to Play Game</h2>
              <p class="section-header__title">
                A Playing Card is a facility for certain types of gambling.
                Playing Card are often built combined with hotels, resorts.
              </p>
            </div>
          </div>
        </div>
        <div class="row gy-4 justify-content-center">
          <div class="col-sm-6 col-md-2 col-lg-2">
            <div class="how-item">
              <div class="how-item__thumb">
                <BiUserPlus style={{ color: "white" }} />
                {/* <i class="las fa fa-briefcase"></i> */}
                <div class="badge badge--lg badge--round radius-50">01</div>
              </div>
              <div class="how-item__content">
                <h4 class="title section-header__title">Connect Wallet</h4>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-2 col-lg-2">
            <div class="how-item">
              <div class="how-item__thumb">
                <FaDice style={{ color: "white" }} />

                {/* <i class="las fa fa-address-book"></i> */}
                <div class="badge badge--lg badge--round radius-50">02</div>
              </div>
              <div class="how-item__content">
                <h4 class="title section-header__title">Book a Card</h4>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-2 col-lg-2">
            <div class="how-item">
              <div class="how-item__thumb">
                {/* <i class="las fa fa-money"></i> */}
                <FaMoneyBillAlt style={{ color: "white" }} />

                <div class="badge badge--lg badge--round radius-50">03</div>
              </div>
              <div class="how-item__content">
                <h4 class="title section-header__title">
                  Choose Betting Amount Click On Bet Now
                </h4>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-2 col-lg-2">
            <div class="how-item">
              <div class="how-item__thumb">
                {/* <i class="las fa fa-users"></i> */}
                <AiOutlineIdcard style={{ color: "white" }} />

                <div class="badge badge--lg badge--round radius-50">04</div>
              </div>
              <div class="how-item__content">
                <h4 class="title section-header__title">
                  8 minute session will over and result will come
                </h4>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-2 col-lg-2">
            <div class="how-item">
              <div class="how-item__thumb">
                {/* <i class="las fa fa-google-wallet"></i> */}
                <FaGoogleWallet style={{ color: "white" }} />

                <div class="badge badge--lg badge--round radius-50">05</div>
              </div>
              <div class="how-item__content">
                <h4 class="title section-header__title">
                  If you are winner click on withdrawal
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
