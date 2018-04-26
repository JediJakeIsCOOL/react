import React, { Component } from 'react';
import Projects from './components/Projects'
import AddProjects from './components/AddProjects'
import './App.css';
import uuid from 'uuid'

class App extends Component {
  constructor(){
      super();
      this.state = {
          projects :[],
          todos: []
      }
  }
}

getToDos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => this.setState({todos: data}, function(){
        console.log(this.state)
    }))
}

getProjects(){
    this.setState({projects:[
        {
            id: uuid.v4(),xs
            title: "Digital Crafts",
            category: "Coding Boot Camp"
        },
        {
            id: uuid.v4(),
            title: "U of H",
            category: "Houston Public University"
        },
        {
            id: uuid.v4(),
            title: "U.T",
            category: "Texas Public University"
        }
    ]})
}
componentWillMount(){
    this.getProjects()
    this.getToDos()
}

componentDidMount(){
    this.getToDos()
}
      
handleAddProject(project){
    console.log("what is being sent to us")
    console.log(project)

    let projects = this.state.projects
    projects.push(project)
}