import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Navbar, Nav, Image, Button } from "react-bootstrap";
import { loadWeb3 } from "../api/api";
import { Link } from "react-router-dom";
import "./Navbar.css";
const NavbarCustom = () => {
  const navigate = useNavigate();

  const [show, handleShow] = useState(false);
  let [btnText, setBtnText] = useState("Connect Wallet");

  const getAccount = async () => {
    let acc = await loadWeb3();
    // console.log("ACC=",acc)
    if (acc == "No Wallet") {
      setBtnText("No Wallet");
    } else if (acc == "Wrong Network") {
      setBtnText("Wrong Network");
    } else {
      let myAcc =
        acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);
      setBtnText(myAcc);
    }
  };

  useEffect(() => {
    let prev = window.scrollY;
    let scrollD = "";

    window.addEventListener("scroll", (e) => {
      const window = e.currentTarget;

      if (prev > window.scrollY) {
        scrollD = "up";
      } else if (prev < window.scrollY) {
        scrollD = "down";
      }
      prev = window.scrollY;

      if (window.scrollY > 40 && scrollD === "up") {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const navItem = [
    {
      title: "NoWallet",
      link: "/wallet",
    },
  ];

  useEffect(() => {
    setInterval(() => {
      getAccount();
    }, 1500);
  }, []);

  return (
    <div class="header">
      <div class="container">
        <div class="header-bottom">
          <div class="header-bottom-area align-items-center">
            <div class="logo">
              <a href="">
                <img src="/10PATTILOGO.png" alt="logo" />
              </a>
            </div>
            <ul class="menu">
              <li class="button-wrapper">
                <a href="#" class="cmn--btn active btn--lg">
                  {btnText}
                </a>
              </li>

              <button class="btn-close btn-close-white d-lg-none"></button>
            </ul>
            <div class="header-trigger-wrapper d-flex d-lg-none align-items-center">
              <div class="header-trigger me-4">
                <span></span>
              </div>
              <a href="#" class="cmn--btn active btn--md d-none d-sm-block">
                No Wallet
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarCustom;
