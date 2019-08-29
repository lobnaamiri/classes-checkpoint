import React, { Component } from 'react';
class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                {this.props.students.map(el=>{return(
                    <div>
                        <h1>{el.name}</h1>
                        <h2>{el.job}</h2>
                        {el.skills.map(i=>{return(
                            <ul>
                                <li>{i}</li>
                            </ul>
                            
                        )})}
                        <span onClick={()=>{this.props.getJob(el.id,"unemployed")}}>Leave Job</span>
                    </div>
                )})}
            </div>
        );
    }
}

export default Students;