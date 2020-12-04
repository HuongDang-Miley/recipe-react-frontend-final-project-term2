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
    // if(this.state.childChange === this.props.data.parentChange) {
    //     console.log('yes they are equal') 
    //     this.setState({
    //         childChange: true
    //     }, ()=> {
    //         this.props.data.testChangeName('newName',this.state.childChange)
    //         console.log('after click in sort ===')
    //         console.log('parent change in props', this.props.data.parentChange)
    //         console.log('child change in state', this.state.childChange)

    //     })
    //     this.props.data.testChangeName(childName, this.state.childChange)
    // }
    // else {
    //     console.log('they are equal')
}
// this.setState({
//     change: true,