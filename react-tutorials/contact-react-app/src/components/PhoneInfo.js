import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {
    state = {
        editing : false,
        name:'',
        phone:''
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        // 먼저 state가 바뀔때 업데이트 되도록 해준다.
        if(this.state !== nextState)  {
            return true 
        }
        // props로 받아온 info값이 달를때만 return true 하도록 한다.
        return this.props.info !== nextProps.info 

        // 만약 state값도 똑같고 info값도 똑같으면 render함수를 호출하지 않음
    }
    

    handleRemove = () => {
        const {info, onRemove} = this.props
        onRemove(info.id)
    }

    handleToggleEdit = () => {
        // ture => false
            // onUpdate
        // false => true
            // state에 info 값들 넣어주기
        const {info, onUpdate} = this.props;
         

        if( this.state.editing ) {
            onUpdate(info.id,{
                name:this.state.name,
                phone:this.state.phone
            })

        }else{
            this.setState({
                name:info.name,
                phone:info.phone
            })
        }

        this.setState({
            editing : !this.state.editing
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    

    render() {
        const {name,phone} = this.props.info;
        // const {info, onRemove} = this.props
        const {editing} = this.state;

        console.log(name);

        const style = {
            border:'1px solid black',
            padding:'10px',
            margin:'10px'
        }

        return (
            <div style={style}>
                {
                    editing ? (
                        <Fragment>
                            <div>
                                <input 
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div>
                                <input 
                                    name="phone"
                                    value={this.state.phone}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </Fragment>
                    ) 
                    : (
                        <Fragment>
                            <div><b>{name}</b></div>
                            <div>{phone}</div>
                        </Fragment>
                    )
                }
                
                <button onClick={this.handleRemove}>삭제</button>
                <button onClick={this.handleToggleEdit}>
                    { editing ? '적용' : '수정'}
                </button>

                {/* 삭제 다른 방법 */}
                {/* <button onClick={
                    ()=> { onRemove(info.id) }
                }>삭제</button> */}
            </div>
        );
    }
}

export default PhoneInfo;