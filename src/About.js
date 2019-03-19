import React, { Component } from 'react';
// import List from './Components/List';
// import Title from './Components/Title';
import Navbar from './Components/Navbar';
import Slide from './Components/Slide';
import Footer from './Components/Footer';
import Frase from './Components/Frase';
import SessaoServicos from './Components/SessaoServicos';
import './App.css'
class About extends Component {

  constructor() {
    super()
    this.state = {
      names: []
    }
    this.removeName = this.removeName.bind(this)
    console.log('Constructor')
  }

  removeName(nameRemoved) {
    console.log(nameRemoved);
    this.setState((state) => ({
      names: state.names.filter(name => name !== nameRemoved)
    }))
  }

  componentDidMount() {
    const data = simulateFetchFromDatabase()
    this.setState({
      names: data
    })
    console.log('componentDidMount')
  }

  render() {
    console.log('render')
    return (
      <div className="">
        <Navbar />
        <Slide />
        <Frase />
        <SessaoServicos />

        <Footer/>
      </div>

    );
  }
}

function simulateFetchFromDatabase() {
  return ['Pedro', 'Joseph', 'Paulo']
}

export default About
