import React from "react";
import { ReactDOM } from "react";


const SuggestedFriend = (props) => {
    return (
        <div class="ui card">
            <div class="content" style={{borderWidth:0}}>
                <div class="event">
                    {props.children}
                </div>
            </div>
        </div>


    )
}


export default SuggestedFriend