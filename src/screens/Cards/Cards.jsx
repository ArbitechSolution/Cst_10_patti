import React, { useEffect, useState } from 'react';
import Betting from "../Betting/Betting"
import { Container, Box, Link, Grid, Divider } from '@material-ui/core';
import { toast } from 'react-toastify';
import { card } from '../Betting/array';
import { loadWeb3 } from '../../Components/api/api';
import { abi, contractAddress } from '../../Components/Utils/utils';
export default function Cards(props) {
    let [selectedCard, setSelectedCard]=useState();
    let [bookedCards, setBookedCards]=useState([]);

    const getBookedCards=async()=>{
        try {
            let add = await loadWeb3();
            if (add == "No Wallet") {
                console.log("No Wallet");
            } else if (add == "Wrong Wallet") {
                console.log("Wrong Wallet");
            } else {
              const  web3=window.web3
              let deme_Array = []
                let contractOf = new web3.eth.Contract(abi, contractAddress);
                let bookedCardsArray = await contractOf.methods.showCard(add).call();
                bookedCardsArray= bookedCardsArray.map(Number);
                for (let i = 0 ; i < card.length; i++){
                    for (let j=0 ; j<bookedCardsArray.length; j++)
                    {
                        if (card[i].id == bookedCardsArray[j]){
                            deme_Array.push(card[i])

                            // console.log('gwwwwwwwww', card[j])
                        }
                    }
                }
               
                // let one = bookedCardsArray[0]
                // console.log("   ",bookedCardsArray);
                setBookedCards(deme_Array);

        
            }
        }catch(e){
            console.log("Error While getting Booked Cards",e);
        }


    }

    const showToast=(index)=>{
        console.log(index)
        setSelectedCard(index)
        toast.success(`Selected Card No ${index+1}`)
    }
    useEffect (()=>{
        getBookedCards()
    },[bookedCards])
    return (
      <section class="game-section padding-top padding-bottom bg_img bg_img1">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-xl-12">
                    <div class="section-header text-center">
                        <h2 class="section-header__title">BOOK CARDS ONE BY ONE</h2>
                        <p>(CAN BOOK MORE THAN ONE ALSO)</p>
                      
                    </div>
                </div>
            </div>
            <div class="row gy-4 justify-content-center">
                {            
                        card.map((items,index)=>{
                            return(
                                <div class="col-lg-4 col-xl-2 col-md-6 col-sm-6">
                    <div class="game-item">
                        <div class="game-inner">
                            <div class="game-item__thumb">
                               
                                <img onClick={()=> showToast(index)} src={items?.imgSrc} alt="game"/>
                            </div>
                        </div>
                        <div class="mask"></div>
                        <div class="ball"></div>
                    </div>
                </div>
                            )
                        })
                    
                }
                
                {/* <div class="col-lg-4 col-xl-2 col-md-6 col-sm-6">
                    <div class="game-item">
                        <div class="game-inner">
                            <div class="game-item__thumb">
                                <img onClick={()=> setSelectedCard(2)} src="/2.png" alt="game"/>
                            </div>
                        </div>
                        <div class="mask"></div>
                        <div class="ball"></div>
                    </div>
                </div>
                <div class="col-lg-4 col-xl-2 col-md-6 col-sm-6">
                    <div class="game-item">
                        <div class="game-inner">
                            <div class="game-item__thumb">
                                <img onClick={()=> setSelectedCard(3)} src="/3.png" alt="game"/>
                            </div>

                        </div>
                        <div class="mask"></div>
                        <div class="ball"></div>
                    </div>
                </div>
                <div class="col-lg-4 col-xl-2 col-md-6 col-sm-6">
                    <div class="game-item">
                        <div class="game-inner">
                            <div class="game-item__thumb">
                                <img onClick={()=> setSelectedCard(4)} src="/4.png" alt="game"/>
                            </div>
                        </div>
                        <div class="mask"></div>
                        <div class="ball"></div>
                    </div>
                </div>
                <div class="col-lg-4 col-xl-2 col-md-6 col-sm-6">
                    <div class="game-item">
                        <div class="game-inner">
                            <div class="game-item__thumb">
                                <img onClick={()=> setSelectedCard(5)} src="/5.png" alt="game"/>
                            </div>
                        </div>
                        <div class="mask"></div>
                        <div class="ball"></div>
                    </div>
                </div>
                <div class="col-lg-4 col-xl-2 col-md-6 col-sm-6">
                    <div class="game-item">
                        <div class="game-inner">
                            <div class="game-item__thumb">
                                <img onClick={()=> setSelectedCard(6)} src="/6.png" alt="game"/>
                            </div>
                        </div>
                        <div class="mask"></div>
                        <div class="ball"></div>
                    </div>
                </div>
                <div class="col-lg-4 col-xl-2 col-md-6 col-sm-6">
                    <div class="game-item">
                        <div class="game-inner">
                            <div class="game-item__thumb">
                                <img onClick={()=> setSelectedCard(7)} src="/7.png" alt="game"/>
                            </div>
                          

                          
                        </div>
                        <div class="mask"></div>
                        <div class="ball"></div>
                    </div>
                </div>
                <div class="col-lg-4 col-xl-2 col-md-6 col-sm-6">
                    <div class="game-item">
                        <div class="game-inner">
                            <div class="game-item__thumb">
                                <img onClick={()=> setSelectedCard(8)} src="/8.png" alt="game"/>
                            </div>
                        </div>
                        <div class="mask"></div>
                        <div class="ball"></div>
                    </div>
                </div>

                <div class="col-lg-4 col-xl-2 col-md-6 col-sm-6">
                    <div class="game-item">
                        <div class="game-inner">
                            <div class="game-item__thumb">
                                <img onClick={()=> setSelectedCard(9)} src="/9.png" alt="game"/>
                            </div>
                        </div>
                        <div class="mask"></div>
                        <div class="ball"></div>
                    </div>
                </div>

                <div class="col-lg-4 col-xl-2 col-md-6 col-sm-6">
                    <div class="game-item">
                        <div class="game-inner">
                            <div class="game-item__thumb">
                                <img onClick={()=> setSelectedCard(10)} src="/10.png" alt="game"/>
                            </div>
                        </div>
                        <div class="mask"></div>
                        <div class="ball"></div>
                    </div>
                </div> */}

            </div>
                <div class="section-header text-center">
                    <h2 class="section-header__title padding-top1">BOOKED CARDS HISTORY</h2>
               
                            <div class="row justify-content-center">


{
    bookedCards.map((items)=>{
        return(
            <div class="col-lg-4 col-xl-2 col-md-6 col-sm-6">
            <div class="game-item">
                <div class="game-inner">
                    <div class="game-item__thumb ">
                        <img src={items?.imgSrc} alt="game"/>
                    </div>
                    
                </div>
                <div class="mask"></div>
        
            </div>
        </div>
        )
    })
}

                          
    
                        </div> 

                </div>
        </div>
        <Betting selectedCard ={selectedCard}/>
    </section>
    )
}