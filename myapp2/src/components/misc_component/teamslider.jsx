import React,{useState} from 'react';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Teamslider() {

const [Xyz,setXyz] = useState([9,"po",{Lk:"po"}]);



console.log({state:Xyz});

const normal = () =>{
    setXyz(56)
}

    var arr2 = [
    {link:"https://gravatar.com/avatar/a46244ac403eb18d35c1942f274313d3?s=400&d=mp&r=x"},
    {link:"https://gravatar.com/avatar/a46244ac403eb18d35c1942f274313d3?s=400&d=wavatar&r=x"},
    {link:"https://gravatar.com/avatar/a46244ac403eb18d35c1942f274313d3?s=400&d=robohash&r=x"},
    {link:"https://gravatar.com/avatar/a46244ac403eb18d35c1942f274313d3?s=400&d=retro&r=x"},
    {link:"https://gravatar.com/avatar/a46244ac403eb18d35c1942f274313d3?s=400&d=mp&r=x"},
    {link:"https://gravatar.com/avatar/a46244ac403eb18d35c1942f274313d3?s=400&d=wavatar&r=x"},
    {link:"https://gravatar.com/avatar/a46244ac403eb18d35c1942f274313d3?s=400&d=robohash&r=x"},
    {link:"https://gravatar.com/avatar/a46244ac403eb18d35c1942f274313d3?s=400&d=retro&r=x"},
]




    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        centerMode: true,
        focusOnSelect: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        
      };

    return (
       
        <div>


<br />
{/* <button onClick={normal} >state cahnge</button> */}


             <Slider arrows={true} {...settings}>
         {
             arr2.map(data=>{

                return ( 
                    <div>
                        <img className="slider-image-team" src={data.link} alt="" />
                    </div>
                )
             })
         }


        </Slider>
        </div>
    )
}