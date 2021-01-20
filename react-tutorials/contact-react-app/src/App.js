import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm'
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 3;

  state = {
    information : [
      {
        id:0,
        name:'이명주',
        phone:'010-0000-0001'
      },
      {
        id:1,
        name:'김소연',
        phone:'010-0000-0002'
      },
      {
        id:2,
        name:'이달이',
        phone:'010-0000-0003'
      }
    ],
    keyword:''
  }

  // 문자열을 바꿔줄 이벤트
  handleChange = (e) => {
    this.setState({
      keyword:e.target.value
    })
  }

  // 리스트 추가 이벤트
  handleCreate = (data) => {
    console.log(data);
    const {information} = this.state
    // this.setState({
    //   information:information.concat({
    //     ...data,
    //     id:this.id++
    //   })
    // })
    this.setState({
      information:information.concat(Object.assign({},data,{
          id : this.id++
      }))
    })
  }

  // 삭제이벤트
  handleRemove = (id) => {
    const {information} = this.state

    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  // 업데이트 이벤트
  handleUpdate = (id,data) => {
    const { information } = this.state;

    this.setState({
      information : information.map(
        info => {
          if (info.id === id ) {
            return {
              id,
              ...data
            }
          }

          return info
        }
      )
    })
  }



  render() {
    return (
      <div className="App">
        <PhoneForm onCreate={this.handleCreate}/>
        <input
          value={this.state.keyword}
          onChange={this.handleChange}
          placeholder="검색..."
        />
        {/* {JSON.stringify(this.state.information)} */}
        <PhoneInfoList 
          data={this.state.information.filter(
            info => info.name.indexOf(this.state.keyword) > -1
          )}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}


export default App;