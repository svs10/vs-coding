import React from 'react'
import Cards from '../components/cards.jsx'
import Img1 from "../../../resources/images/card21.jpg";
import Img2 from "../../../resources/images/card23.jpg";
import Img3 from "../../../resources/images/card22.jpg";

export default function Card2() {


    var array1 = [
        {
        link:Img1,
        title:"Chhattisgarh",
        des:"We donated OLD CLOTHES and SUPPOURTED 3 FAMILIES.",
        val:85

    },
        {link:Img2,
        title:"Arunachal Pradesh",
        des:"We donated BOOKS and some volunteers PROVIDED SCHOLARSHIPS to 10 STUDENTS.",
        val:70

    },
        {link:Img3,
        title:"Odisha",
        des:"We donated 20,000 to 5 FAMILIES each and conducted SMALL MEDICAL CAMP.",
        val:55


    },

    ]
  
    return (
        <div>
            <div className="row">
                <div className="col-12">
                <div className="d-flex">
{array1.map(ok=><Cards {...ok} /> )}




                </div>

                </div>
            </div>
            
        </div>
        
    )
}