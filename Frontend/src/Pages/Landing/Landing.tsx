import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../../Components/Banner/Banner";
import Video from "../../Components/VideoComp/Video";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Credits from "../../Components/Credits/Credits";
import Heading from "../../Components/BigHeading/Heading";
import Footer from "../../Components/Footer/Footer";
const Landing:React.FC = () =>{

    return(
        <>
        <Navbar/>
        <Banner/>
        <Video/>
        <Testimonial/>
        <Credits/>
        <Heading/>
        <Footer/>
        </>
    )
}

export default Landing;