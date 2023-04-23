import React from "react"
import "./Featured.scss"

const Featured = () => {
        return(
        <div className="featured">
            <div className="container">
            <div className="left">
                <h1>FIND THE BEST FREELANCERS FOR YOUR BUSINESS</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="./img/search.png" alt="" />
                
                    </div>
                        <buttton>Search</buttton>
                </div>
                <div className="popular">
                    <spann>POPULAR:</spann>
                    <button>web design</button>
                    <button>word press</button>
                    <button>logo design</button>
                    <button>ai services</button>
                </div>

             </div>
             <div className="right">
                  <img src="./img/sai-pallavi.jpg" alt="" />
             </div>               
            </div>
        </div>
    )
}

export default Featured