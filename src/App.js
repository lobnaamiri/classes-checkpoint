import React, { Component } from 'react';
import Students from './Students';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      students: [],
      name: '',
      job: '',
      skills: []
    })
  }
getJob=(id,value)=>{
 let x=this.state.students.filter(el=>el.id===id)[0]
x.job=value
let y=this.state.students.filter(el=>el.id!==id)
y=[...y,x]
this.setState({
  students:[...y]
})

}
  render() {
    return (
      <div>

        <input type="text" placeholder="name" onChange={(e) => { this.setState({ name: e.target.value }) }} />
        <input type="text" placeholder="job" onChange={(e) => { this.setState({ job: e.target.value }) }} />
        <input type="text" placeholder="skilles" onChange={(e) => {
          let x = e.target.value

          this.setState({
            skills: x.split(',')
          })
        }} />
        <span onClick={() => {
          this.setState({
            students: [...this.state.students, { id: `student${Math.floor(Math.random() * 10)}`, job: this.state.job, name: this.state.name, skills: this.state.skills }]
          })
        }}>Add</span>


        <Students getJob={this.getJob} students={this.state.students} />
      </div>

    );
  }
}

export default App;