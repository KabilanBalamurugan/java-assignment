
//passing value of one class component to another class component

import React, { Component } from "react";
class Studentttt extends Component {
   render() 
   {
       return ( 
       <div>
           <h1> passing value from one component to another </h1> 
           <h3> Student Details </h3> 
           <p> Name of student: { this.props.name } </p> 
           <p> rollno: { this.props.rollno } </p> 
           <Marks Name = { this.props.name }
           Total = { this.props.total }
           Grade = { this.props.grade }
           /> </div>
       );
   }
}
class Marks extends Component {
   render() {
       return ( 
       <div>
            <h3>Name of the Student {this.props.Name}</h3>
            <p>totalmarks is { this.props.Total } </p> 
            <p> grade is { this.props.Grade } </p> 
        </div>
       );
   }

}
export default Studentttt;
