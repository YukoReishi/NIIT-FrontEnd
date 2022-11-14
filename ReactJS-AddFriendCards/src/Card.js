import React from "react";
import ReactDOM from "react";

const Card = (props) => {
    return (


        <div class="ui card">
            <div class="content">
                <img src={props.pic} class="ui mini right floated image" />
                <div class="header">{props.name}</div>
                <div class="meta">New User</div>
                <div class="description">{props.name} wants to add you to the group <strong>best friends</strong></div>
            </div>
            <div class="extra content">
                <div class="ui two buttons">
                    <button class="ui green basic button">Approve</button>
                    <button class="ui red basic button">Decline</button>
                </div>
            </div>
        </div>
    )
}

export default Card;