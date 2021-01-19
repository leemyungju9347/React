import React, { Component } from 'react';

class Detail extends Component {
    componentDidMount() {
        const { location,history } = this.props
        console.log(location.state);

        if(location.state === undefined) {
            history.push('/')
        }
    }

    render() {
        const { location } = this.props

        if( location.state ) {
            return <h3>{ location.state.title }</h3>

        }else {
            return null
        }
    }
}


export default Detail;