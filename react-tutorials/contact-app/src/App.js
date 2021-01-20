import React, { Component } from 'react';
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 0

  state = {
    information :[]
  }
  
  handleCreate = (data) => {
    console.log(data);
    // this.setState({
    //   information:this.state.information.concat(data)
    // })

    // 비구조화할당 문법 사용
    const { information } = this.state
    // 저장방법 1
    // this.setState({
    //   information : information.concat({
    //     ...data,
    //     id: this.id++
    //   })
    // })

    // 저장방법2 Object.assign
    this.setState({
      information : information.concat(Object.assign({},data,{
        id:this.id++
      }))
    })
  }

  handleRemove = (id) => {
    const {information} = this.state;
    this.setState({
      information:information.filter(info => info.id !== id)
    })

  }

  render() {
    return (
      <div className="App">
        <PhoneForm onCreate={this.handleCreate}/>
        <PhoneInfoList 
        onRemove={this.handleRemove}
        data={this.state.information}/>
        {/* {JSON.stringify(this.state.information)} */}
      </div>
    );
  }
}

export default App;