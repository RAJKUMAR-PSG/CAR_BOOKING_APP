import React, {useEffect, useState} from "react";
import { Link,useLocation    } from "react-router-dom";
import "./Navbar.scss"

const Navbar = ()=>{
    const[active, setActive] = useState(false)
    const[open,setOpen] = useState(false);
    const{pathname} = useLocation()

    const isActive = ()=>{
        window.scrollY>0 ? setActive(true) : setActive(false);
    }

    useEffect(()=> {
         window.addEventListener("scroll",isActive);

         return ()=>{
         window.removeEventListener("scroll",isActive);
         }
    }, [])

    const currentUser={
        id:1,
        username:"raj",
        isSeller:true
    }


    return (
       <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
               <Link to ="/" className="link"> 
               <span className='text'>RAJ</span>
               </Link>
            </div>
            <div className="links">
               <span>business</span>
               <span>explore</span>
               <span>english</span>
               <span>sign in</span>
               { !currentUser?.isSeller && <span>become a seller</span>}
               { !currentUser && <button>join</button>}
               {
                currentUser && (
                    <div className="user" onClick={()=>setOpen(!open)}>
                        <img src="" alt="" />
                        <span>{currentUser?.username}</span>
                        {
                            open && <div className="options">
                            {currentUser?.isSeller && (
                                <>
                                <Link className="link" to = "/mygigs">Gigs</Link>
                                <Link className="link" to = "/add">Add New Gig</Link>
                                </>
                            )}
                            <Link className="link" to = "/orders">Orders</Link>
                            <Link className="link" to = "/messages">Messages</Link>
                            <Link className="link" to = "/">Logout</Link>
                        </div>
                        }
                    </div>
                )
               }
            </div>
        </div>
        {(active || pathname !=="/") && (
        <>
        <hr />
        <div className="menu">
             <Link className="link menuLink"to="/">
                graphics and design
             </Link>
             <Link className="link"to="/">
                videos and animation
             </Link>
             <Link className="link"to="/">
                writing and translation
             </Link>
             <Link className="link"to="/">
                writing and translation
             </Link>
             <Link className="link"to="/">
                ai services
             </Link>
             <Link className="link"to="/">
                digital marketing
             </Link>
             <Link className="link"to="/">
                music and audio
             </Link>
             <Link className="link"to="/">
                programming to tech
             </Link>
             <Link className="link"to="/">
                business
             </Link>
             <Link className="link"to="/">
                lifestyle
             </Link>
        </div>
        </>
        )}
       </div>
    );
};

export default Navbar; 