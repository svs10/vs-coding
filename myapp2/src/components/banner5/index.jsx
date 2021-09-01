import React from 'react'
import Hero from "../../resources/images/banner5.jpg"

export default function Main() {
    return (

        <div>
        <br />
        <br />
        <br />
        <div className="banner5-img-custom">
           
            <div className="row">
    
    <div className="col-6">
            <div className="banner5-heading">
                
                <p style={{ margin:"50px"}}><h1 style={{fontFamily:"fantasy"}}>
                    #EVENTS
                </h1>
                <strong>
                    <h3 style={{color:"green", fontFamily:"cursive"}}>What's waiting</h3>
                </strong>
                
                <h6>  We are looking forward<br /> for more volunteers in the<br /> upcoming Charity Events.</h6>
                    <a href="/">read more...</a>
                </p>
            </div>
    </div>

    <div className="col-6">
    <div className="banner5-right">
                  <h2><strong>Upcoming</strong> <strong className="gtext">Events</strong>  </h2>
                  <div className="line2"></div>
                  <h6>We try to conduct charity events every month or two. <br /> The latest events that we will be conducting are listed below.</h6>
              </div>

             <div className="row">
               <div className="col-2">
              
                  <div className="banner5-box1">
                  <center><h5 style={{color:"white"}}><strong>02</strong></h5></center>
                  <h6 style={{color:"white"}}><strong>AUG</strong></h6>
                  </div>
                </div>
                <div className="col-4">
                    <div className="banner5-right1"><h5>Spirit of Giving.</h5><h6>Charity brings to life again those who are spiritually dead. 
                        We donate food supplies to those who feels the fire of hunger.
                        <br /><em className="gtext">VENUE: </em>Government school, Dahisar, Mumbai-68</h6></div>
                  

                </div>

                  
    
              
              
              </div>
             
             <div className="banner5-box2">

             <center><h5 style={{color:"white"}}><strong>25</strong></h5></center>
                  <h6 style={{color:"white"}}><strong>AUG</strong></h6>
             </div>
            <div className="col-4">
                <div className="banner5-right2"><h5>Fraggers for a better Tomorrow.</h5><h6>Charity makes no decrease in property.We donate books to childrens who are desparate to seek knowledge.
                    <br /><em className="gtext">VENUE: </em>Government school, Dahisar, Mumbai-68</h6></div>
                  

            </div>

        </div>
    </div>

         
</div>

</div>
 
            

        
    )
}