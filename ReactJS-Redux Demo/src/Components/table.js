import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';

import {employeeFetchAll } from '../Actions/actions';

class Table extends Component{
    componentDidMount() {
        this.props.dispatch(employeeFetchAll());
        console.log("emp list component mount done")
      }
    
    //   deleteItem(id) {
    //     console.log(id);
    //     this.props.dispatch(empDelete(id));
    //   }

render(){    
    return(
        <div>
    <main className="col-md-9 mx-sm-auto col-lg-10 px-md-4" style={{}}>
      <h2>Employee List</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Age</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
            {this.props.employees && this.props.employees.map((item,index)=>
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.department}</td>
                <td>
                  <button type="button" className="btn btn-danger" style={{paddingRight:'10px'}} >Delete</button>
                  
                    <button type="button" className="btn btn-primary">
                      Edit
                  </button>
            
                </td>
              </tr>
              )}
          </tbody>
          
        </table>
      </div>
    </main>
    </div>
    )
  }}




  function mapStateToProps(state) {
    console.log(state);
    const { employees } = state;
    return {
      employees
    }
  }
  
export default connect(mapStateToProps)(Table);


