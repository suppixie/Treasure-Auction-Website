import React from "react";

function Home(){
    return(
        <div className="container">
            <h1 className="main_heading">TenTreasures</h1>

            <div className="poster">
                <h1>Devour the Curated</h1>
            </div>

            <div className="content_container">
                <div className="top_curations">
                    <h3>Top Curations</h3>
                    <div className="curations">
                        <div className="curations_card">
                            <img src="https://via.placeholder.com/100" alt="item"/>
                            <h4>Artwork</h4>
                        </div>

                        <div className="curations_card">
                            <img src="https://via.placeholder.com/100" alt="item"/>
                            <h4>Vase</h4>
                        </div>

                        <div className="curations_card">
                            <img src="https://via.placeholder.com/100" alt="item"/>
                            <h4>Sneaker</h4>
                        </div>

                        <div className="curations_card">
                            <img src="https://via.placeholder.com/100" alt="item"/>
                            <h4>Artwork</h4>
                        </div>
                    </div>

                </div>
                <div className="upcoming_curations">

                    <div className="upcoming_card">
                            <img src="https://via.placeholder.com/100" alt="item"/>
                            <h4>Artwork</h4>
                            <h3>14 Oct 2024</h3>
                    </div>

                    <div className="curations_card">
                            <img src="https://via.placeholder.com/100" alt="item"/>
                            <h4>Vase</h4>
                            <h3>23 Oct 2024</h3>

                    </div>       

                                

                </div>
            </div>
        </div>
    )
}

export default Home;