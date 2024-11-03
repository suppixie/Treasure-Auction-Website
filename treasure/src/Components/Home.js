import React from "react";
import Navbar from "./Navbar";
import "./styles/home.css";
import Artwork1 from "../assets/artwork1.jpeg";
import Artwork2 from "../assets/artwork2.jpg";
import Vase from "../assets/vase.jpg";
import Sneaker from "../assets/sneaker.jpg";
import Bracelet from "../assets/bracelet.jpg";
import Dresser from "../assets/frenchdresser.jpg";



function Home(){
    return(
        <div className="container">
            <div className="navbar">
            <h1 className="main_heading">TenTreasures</h1>
                <button className="create_curation_btn" > Create</button>
                <Navbar/>
            </div>

            <div className="poster">
                <h1>Devour the Curated</h1>
            </div>

            <div className="content_container">
                <div className="tagline">
                    <h1>Uncover rare gems and exquisite antiques—your gateway to unique curations and unforgettable finds.</h1>

                </div>
                <div className="top_curations">
                    <h1>Top Curations</h1>
                    <div className="curations">
                        <div className="curations_card">
                            <img src={Artwork1} alt="item"/>
                            <h4>Artwork</h4>
                        </div>

                        <div className="curations_card">
                            <img src={Vase} alt="item"/>
                            <h4>Vase</h4>
                        </div>

                        <div className="curations_card">
                            <img src={Sneaker} alt="item"/>
                            <h4>Sneaker</h4>
                        </div>

                        <div className="curations_card">
                            <img src={Artwork2} alt="item"/>
                            <h4>Artwork</h4>
                        </div>
                    </div>

                </div>
                <div className="upcoming_auctions">
                    <h1>Upcoming Auctions</h1>

                    <div className="upcoming_card">
                        <div>
                            <img src={Bracelet} alt="item"/>
                            <h4>Northstar Bracelet</h4>
                            </div>
                        <h2>14 Oct 2024</h2>
                    </div>

                    <div className="upcoming_card">
                         <div>
                            <img src={Dresser} alt="item"/>
                            <h4>Antique French Dresser</h4>
                            </div>
                        <h2>23 Oct 2024</h2>

                    </div>       

                                

                </div>
            </div>
        </div>
    )
}

export default Home;