import React from 'react'
import "./Gig.scss"
import Slider from "infinite-react-carousel";

const Gig = () => {
    return (
       <div className='gig'>
        <div className="container">
            <div className="left">
                <span className="breadCrumbs">FIVERR GRAPHICS & DESIGN</span>
                <h1>i wil create ai generated art for you</h1>

                <div className="user">
                <img 
                className="pp"
                src="" alt=""/>
                <span>john Doe</span>
                <div className="stars">
                    <img src="/img/check.png" alt=""/>
                    <img src="/img/check.png" alt=""/>
                    <img src="/img/check.png" alt=""/>
                    <img src="/img/check.png" alt=""/>
                    <img src="/img/check.png" alt=""/>
                    <span>5</span>
                </div>
                </div>
                <Slider slidesToShow={1} arrowScroll={1} className="slider">
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                </Slider>
                <h2>About this gig</h2>
                <p>naskjcbjsvcjhasvchjwwvcjhasc hjcvjashcjhcvhjvajhcv
                    fvwehnje76j65j4s6j5rxr6jr6jr6jrjt7gvniuwegfuguyewgukwgfy
                    cyfcewuyvvxjcweuykfwqugdjawgdvxsjacvsathdfwyudgasuidgewuifgaeuwi
                    agauysgcuasckuasgcbuyasgcfuyefewuicbiueahciuasgfascbie
                    ascbjhascvjasvjcasgdajsgfuyewgfwe7gfuiashciuasbcikuasbciulwecgfi
                    ;acguyewfcuyegduywgxuicaguyewfucyewgxuciaefcguyafcuygfcukyewgfcywey
                </p>
                <div className="seller">
                    <h2>About the seller</h2>
                    <div className="user">
                        <img src="" alt=""/>
                        <div className="info"> 
                        <span>john doe</span>
                        <div className="stars">
                     <img src="/img/check.png" alt=""/>
                     <img src="/img/check.png" alt=""/>
                     <img src="/img/check.png" alt=""/>
                     <img src="/img/check.png" alt=""/>
                     <img src="/img/check.png" alt=""/>
                     <span>5</span>
                </div>
                <button>contact Me</button>
                        </div>
                    </div>
                    <div className="box">
                        <div className="items">
                            <div className="item">
                                <span className="title">FROM</span>
                                <span className="desc">USA</span>
                            </div>
                            <div className="item">
                                <span className="title">member since</span>
                                <span className="desc">august 2022</span>
                            </div>
                            <div className="item">
                                <span className="title">Avg.responsetime</span>
                                <span className="desc">4 hours</span>
                            </div>
                            <div className="item">
                                <span className="title">last delivery</span>
                                <span className="desc">1 day</span>
                            </div>
                            <div className="item">
                                <span className="title">languages</span>
                                <span className="desc">english</span>
                            </div>
                        </div>
                        <hr/>
                        <p>
                            my name is raj i enjoy creating ai generated art in my spare time.
                            i have lot of experience using the ai program and that means i know what to prompt the 
                            AI with to get a great and detailed result.
                        </p>
                    </div>
                </div>
                <div className="reviews">
                    <h2>Reviews</h2>
                    <div className="item">
                        <div className="user">
                            <img
                            className="pp"
                             src="" alt=""/>
                            <div className="info">
                                <span>john doe</span>
                                <div className="country">
                                    <img src="" alt=""/>
                                    <span>United Sates</span>
                                </div>
                            </div>
                        </div>
                        <div className="stars">
                     <img src="/img/check.png" alt=""/>
                     <img src="/img/check.png" alt=""/>
                     <img src="/img/check.png" alt=""/>
                     <img src="/img/check.png" alt=""/>
                     <img src="/img/check.png" alt=""/>
                     <span>5</span>
                </div>
                <p>
                     kfgeufghiehfelsdlglerolgnoeirjgoieroiergoierjhoierjoierer
                     eresregjbnrdkvnkdjfgnlkerngiuernviuernviuerbiuernlkesrnvlkesrrnoier
                     sdkjbnesrkuniruhgoiueroenuierngiuesrnviuerbuiernvieruhnoiuerngoierngoiernge
                     eorbsroeihgeroiinvoribnorigheorinvoiernoierihopiergoierngoiernoiergoisr
                     seoriniosrignoiesrshgoiesrvoiserbhopisrhihuighesuigheoiruugherigopiergouse
                     opeuiriuhoiseurgherughopieirhgopiserhgoiserhgopirhgopiesrhgoierhoige 
                </p>      
               <div className="helpful">
                 <span>helpfull</span>
                 <img src="/img/like.png" alt=""/>
                 <span>yes</span>
                 <img src="/img/dislike.png" alt=""/>
                 <span>no</span>
                  </div>
                </div>
                <hr/>
                <div className="item">
                        <div className="user">
                            <img 
                            className="pp"
                            src="" alt=""/>
                            <div className="info">
                                <span>john doe</span>
                                <div className="country">
                                    <img src="" alt=""/>
                                    <span>United Sates</span>
                                </div>
                            </div>
                        </div>
                        <div className="stars">
                     <img src="/img/check.png" alt=""/>
                     <img src="/img/check.png" alt=""/>
                     <img src="/img/check.png" alt=""/>
                     <img src="/img/check.png" alt=""/>
                     <img src="/img/check.png" alt=""/>
                     <span>5</span>
                </div>
                <p>
                     kfgeufghiehfelsdlglerolgnoeirjgoieroiergoierjhoierjoierer
                     eresregjbnrdkvnkdjfgnlkerngiuernviuernviuerbiuernlkesrnvlkesrrnoier
                     sdkjbnesrkuniruhgoiueroenuierngiuesrnviuerbuiernvieruhnoiuerngoierngoiernge
                     eorbsroeihgeroiinvoribnorigheorinvoiernoierihopiergoierngoiernoiergoisr
                     seoriniosrignoiesrshgoiesrvoiserbhopisrhihuighesuigheoiruugherigopiergouse
                     opeuiriuhoiseurgherughopieirhgopiserhgoiserhgopirhgopiesrhgoierhoige 
                </p>      
               <div className="helpful">
                 <span>helpfull</span>
                 <img src="/img/like.png" alt=""/>
                 <span>yes</span>
                 <img src="/img/dislike.png" alt=""/>
                 <span>no</span>
                  </div>
                </div>
                <hr/>
                <div className="item">
                        <div className="user">
                            <img 
                            className="pp"
                            src="" alt=""/>
                            <div className="info">
                                <span>john doe</span>
                                <div className="country">
                                    <img src="" alt=""/>
                                    <span>United Sates</span>
                                </div>
                            </div>
                        </div>
                        <div className="stars">
                     <img src="/img/check.png" alt=""/>
                     <img src="/img/check.png" alt=""/>
                     <img src="/img/check.png" alt=""/>
                     <img src="/img/check.png" alt=""/>
                     <img src="/img/check.png" alt=""/>
                     <span>5</span>
                </div>
                <p>
                     kfgeufghiehfelsdlglerolgnoeirjgoieroiergoierjhoierjoierer
                     eresregjbnrdkvnkdjfgnlkerngiuernviuernviuerbiuernlkesrnvlkesrrnoier
                     sdkjbnesrkuniruhgoiueroenuierngiuesrnviuerbuiernvieruhnoiuerngoierngoiernge
                     eorbsroeihgeroiinvoribnorigheorinvoiernoierihopiergoierngoiernoiergoisr
                     seoriniosrignoiesrshgoiesrvoiserbhopisrhihuighesuigheoiruugherigopiergouse
                     opeuiriuhoiseurgherughopieirhgopiserhgoiserhgopirhgopiesrhgoierhoige 
                </p>      
               <div className="helpful">
                 <span>helpfull</span>
                 <img src="/img/like.png" alt=""/>
                 <span>yes</span>
                 <img src="/img/dislike.png" alt=""/>
                 <span>no</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right"></div>
        </div>
       </div>
    )
}

export default Gig