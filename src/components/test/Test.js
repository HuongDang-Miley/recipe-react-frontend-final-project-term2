import React, { Component } from 'react'

export default class Test extends Component {
    state = {
        childChange: false,
    }


    toggleChangeName = (childName) => {
        console.log('before click in sort ===')
        console.log('parent change in props', this.props.data.parentChange)
        console.log('child change in state', this.state.childChange)
        if (this.state.childChange === false) {
            this.setState({
                childChange: true
            }, () => {
                this.props.data.testChangeName('newName', this.state.childChange)
                console.log('after click in sort when childchange = false ===')
                console.log('parent change in props', this.props.data.parentChange)
                console.log('child change in state', this.state.childChange)

            })
        } else if (this.state.childChange === true) {
            this.setState({
                childChange: false
            }, () => {
                this.props.data.testChangeName('', this.state.childChange)
                console.log('after click in sort when childchange = true ===')
                console.log('parent change in props', this.props.data.parentChange)
                console.log('child change in state', this.state.childChange)

            })
        }
    }


    render() {
        console.log(this.props)
        return (
            <div>
                {/* <h1>change Huong To Miley</h1> */}
                <button onClick={() => this.toggleChangeName()}>change Name</button>
            </div>
        )
    }

}


