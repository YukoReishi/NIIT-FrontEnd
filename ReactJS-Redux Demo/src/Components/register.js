import React, { Component, useReducer } from "react";
import { empAdd } from "../Actions/actions";

import { connect } from 'react-redux';

class Register extends React.Component{

    employee = {
        name:'',
        age:'',
        department:''
    }


    handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(this.employee)
        this.props.dispatch(empAdd(Object.assign({}, this.employee)));
        e.target.reset();
    }

    render(){

    return (
        <div>
            <h1 style={{textAlign:'center',margin:'15px'}}>Registeration Form</h1>
       
            <form class="ui form" style={{ display: 'flex', width: '100%', justifyContent: 'center' }} onSubmit={this.handleOnSubmit}>
                <div class="equal width fields" style={{ display: 'grid', width: '40%' }}>
                    <div class="field" style={{ width: '100%' }}>
                        <label>Name</label>
                        <div class="ui fluid input">
                            <input type="text" style={{ padding: '15px' }} placeholder="Name" id="name" onChange={e => this.employee.name = e.target.value} />
                        </div>
                    </div>

                    <div class="field" style={{ width: '100%' }}>
                        <label>Age</label>
                        <div class="ui fluid input">
                            <input type="number" style={{ padding: '15px' }} placeholder="Age" id="age" onChange={e => this.employee.age = e.target.value} />
                        </div>
                    </div>

                    <div class="field" style={{ width: '100%' }}>
                        <label>Department</label>
                        <div class="ui fluid input">
                            <input type="text" style={{ padding: '15px' }} placeholder="Department" id="address" onChange={e => this.employee.department= e.target.value} />
                        </div>
                    </div>

                    <div class="field" style={{ width: '40%', marginTop: '15px' }}>
                        <button class="ui button" style={{ padding: '25px' }} type="submit">Submit</button>
                    </div>
                </div>


            </form>
        </div>
    )
}
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(Register);

