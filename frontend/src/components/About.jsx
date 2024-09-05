 import {Link} from "react-router-dom"
 import {HiOutlineArrowNarrowRight} from "react-icons/hi"
 const About = () => {
   return (
     <section className="about">
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">About Us</h1>
                    <p>The only thing we are serious about is food.</p>
                </div>
                <p className="mid">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dignissimos facere quia perspiciatis autem. Suscipit.
                </p>
                <Link to={"/"}>Explore Menu
                <span><HiOutlineArrowNarrowRight/></span>
                </Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="" />
            </div>
        </div>
     </section>
   )
 }
 
 export default About