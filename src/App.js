import React, {Component} from 'react';
import List from './Components/List';
import Title from './Components/Title';
import Navbar from './Components/Navbar';

class App extends Component{

  constructor(){
    super()
    this.state = {
      names: []
    }
    this.removeName = this.removeName.bind(this)
    console.log('Constructor')
  }
  
  removeName(nameRemoved){
    console.log(nameRemoved);
    this.setState((state) => ({
      names: state.names.filter(name => name !== nameRemoved)
    }))
  }

  componentDidMount(){
    const data = simulateFetchFromDatabase()
    this.setState({
      names: data
    })
    console.log('componentDidMount')
  }

  render(){
    console.log('render')
      return(
          <div className="">
            <Navbar/>
            <Title title={'Lista de Estudantes'}/>
            <List students = {this.state.names} onRemoveName = {this.removeName}/>
          </div>
      );
  }
}

function simulateFetchFromDatabase(){
  return ['Pedro','Joseph','Paulo']
}

export default App