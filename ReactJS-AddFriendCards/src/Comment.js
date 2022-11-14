import React from "react";
import ReactDOM from "react";
import pic from "./image/av1.png";


const SingleComment = (props) =>{
    return (
        
            <div class="comment">
                <div class="avatar">
                    <img src={props.pic}/>
                </div>
                <div class="content">
                    <a class="author">{props.name}</a>
                    <div class="metadata">
                        <div>{props.date}</div>
                    </div>
                    <div class="text">{props.text}</div>
                    <div class="actions">
                        <a class="">Reply</a>
                    </div>
                </div>
            </div>
        
        
    )
}

export default SingleComment
