import React from "react";
import ReactDom from "react-dom";
import pic1 from "./image/av1.png"
import pic2 from "./image/av2.png"
import pic3 from "./image/av3.png"
import SingleComment from "./Comment";
import Card from "./Card";
import SuggestedFriend from "./SuggestedFriend";
import SuggestedFriendCard from "./SuggestedFriendCard";


const App = () => {
    return (
        <div style={{padding:'20px'}}>

            {/* <Navbar/>
            <hr></hr>

            <h2 class="ui header" style={{color:'white'}}>Available Courses</h2>
            <div class="ui very relaxed five column grid">

                <Courses
                    author="Vishal Gupta"
                    cost="Rs.500"
                    title="HTML Tutorial"
                    template={t1}
                />

                <Courses
                    author="Sandeep Kumar"
                    cost="Rs.450"
                    title="CSS Tutorial"
                    template={t2}
                />

                <Courses
                    author="Anmol Rajput"
                    cost="Rs.560"
                    title="JS Tutorial"
                    template={t3}
                />

                <Courses
                    author="Arun Kumar"
                    cost="Rs.650"
                    title="React Tutorial"
                    template={t4}
                />

                <Courses
                    author="Rajshekar"
                    cost="Rs.460"
                    title="Angular Tutorial"
                    template={t5}
                /></div>

            <h3 class="ui dividing header"></h3>
            <div class="ui very relaxed five column grid">
                <Courses
                    author="Vishal Gupta"
                    cost="Rs.500"
                    title="HTML Tutorial"
                    template={t1}
                />

                <Courses
                    author="Sandeep Kumar"
                    cost="Rs.450"
                    title="CSS Tutorial"
                    template={t2}
                />

                <Courses
                    author="Anmol Rajput"
                    cost="Rs.560"
                    title="JS Tutorial"
                    template={t3}
                />

                <Courses
                    author="Arun Kumar"
                    cost="Rs.650"
                    title="React Tutorial"
                    template={t4}
                />

                <Courses
                    author="Rajshekar"
                    cost="Rs.460"
                    title="Angular Tutorial"
                    template={t5}
                />

            </div> */}


            <h3 class="ui dividing header">Friend Requests</h3>


            <div className="ui cards">
                <Card
                    name="Vishal Gupta"
                    date="Yesterday at 2pm"
                    pic={pic1}
                />

                <Card
                    name="Sandeep Kumar"
                    date="Today at 12pm"
                    pic={pic3}
                />

                <Card
                    name="Vinay Gupta"
                    date="Just Now"
                    pic={pic2}
                />
            </div>


            <h3 class="ui dividing header">Comments</h3>
            <div class="ui comments">

                <SingleComment
                    name="Vishal Gupta"
                    date="Yesterday at 2pm"
                    pic={pic1}
                    text="Nice Work Bro"
                />

                <SingleComment
                    name="Sandeep Kumar"
                    date="Today at 12pm"
                    pic={pic3}
                    text="Awesome Job!"
                />

                <SingleComment
                    name="Vinay Gupta"
                    date="Just Now"
                    pic={pic2}
                    text="Good Good!"
                />

            </div>


            <div className="ui card" style={{width:'100%',marginBottom:'10px',display:'flex'}}>

                <div class="content">
                    <div class="header">Suggested Friend</div>
                </div>
                <div className="ui cards" style={{borderWidth:0,marginBottom:'10px',float:'right',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <SuggestedFriend>
                    <SuggestedFriendCard
                        name="Vishal Gupta"
                        pic={pic1}
                    />
                </SuggestedFriend>


                <SuggestedFriend>
                    <SuggestedFriendCard
                        name="Sandeep"
                        pic={pic2}
                    />
                </SuggestedFriend>

                
                <SuggestedFriend>
                    <SuggestedFriendCard
                        name="Arun Kumar"
                        pic={pic3}
                    />
                </SuggestedFriend>

                
                <SuggestedFriend>
                    <SuggestedFriendCard
                        name="Anmol Rajput"
                        pic={pic1}
                    />
                </SuggestedFriend>


                
                <SuggestedFriend>
                    <SuggestedFriendCard
                        name="Rajasekhar"
                        pic={pic2}
                    />
                </SuggestedFriend>

                </div>
            </div>

            
            <hr style={{marginTop:'40px'}}></hr>

            {/* <Footer/> */}

        </div>


    )
}

ReactDom.render(
    <App />,
    document.querySelector("#root")
)
