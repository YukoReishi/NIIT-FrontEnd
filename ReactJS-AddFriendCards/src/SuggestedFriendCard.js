import React from "react";
import ReactDOM from "react";

const SuggestedFriendCard = (props) => {
    return (

        
        <div class="ui card">
            <div class="content">
                <img src={props.pic} class="ui mini right floated image" />
                <div class="header">{props.name}</div>
                <div class="meta">New User</div>
                <div class="description">Add <strong>{props.name}</strong> to your friend List</div>
            </div>
            <div class="extra content">
                <div class="ui one buttons" style={{display:'flex',}}>
                    <button class="ui green basic button"><i className="add icon"></i>Add Friend</button>
                </div>
            </div>
        </div>
    )
}

export default SuggestedFriendCard;