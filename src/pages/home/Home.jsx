import React from 'react'
import Featured from '../../components/featured/Featured'
import "./Home.scss"
import TrustedBy from '../../components/trustedby/TrustedBy'
import Slide from '../../components/Slide/Slide'


const Home = () => {
    return (
       <div className='home'>
        <Featured/>
        <TrustedBy/>
        <Slide/>
        <div className="features">
            <div className="container">
                <div className="item">
                   <h1>THE WHOLE WORLD OF FREELANCER IN YOUR HANDS</h1>
                   <div className="title">
                    <img src="./img/check.png" alt=""/>
                    the best way for every budget
                   </div>
                   <p>
                    find high quality services at every price point.no hourly rates,just project-based pricing.
                   </p>
                   <div className="title">
                    <img src="./img/check.png" alt=""/>
                    the best way for every budget
                   </div>
                   <p>
                    find high quality services at every price point.no hourly rates,just project-based pricing.
                   </p>
                   <div className="title">
                    <img src="./img/check.png" alt=""/>
                    the best way for every budget
                   </div>
                   <p>
                    find high quality services at every price point.no hourly rates,just project-based pricing.
                   </p>
                   <div className="title">
                    <img src="./img/check.png" alt=""/>
                    the best way for every budget
                   </div>
                   <p>
                    find high quality services at every price point.no hourly rates,just project-based pricing.
                   </p>
                </div>
                
                <div className="item">
                    <img src = "./img/sai-pallavi" alt=""/>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Home