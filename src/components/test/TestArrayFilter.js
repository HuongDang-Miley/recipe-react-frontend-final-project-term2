import React, { Component } from 'react'

export default class TestArrayFilter extends Component {
    state = {
        childChange: false,
        currentSortedMeals: [],
        isIncluded: false,
        


    }

    toggleSortedArray = (category) => {
        // let { currentSortedMeals } = this.state
        // const parentArray = this.props.data.parentArray
        // // Loop through current sorted meal if there is any beef inside.
        // // if result is = null, push sorted array in
        // // else, push sorted array out
        // let isExistCategory = currentSortedMeals.filter((meal) => meal.meat === category)
        // if (isExistCategory.length === 0) {
        //     const sortedArray = parentArray.filter((meal) => meal.meat === category)
        //     // console.log('sortedArray', sortedArray)
        //     this.setState({
        //         currentSortedMeals: [...currentSortedMeals, ...sortedArray],
        //         childChange: 'hello',
        //     }
        //         , () => { console.log('currentSortedMeals', this.state) }
        //     )
        // }
        //  if (isExistCategory.length !== 0) {
        //     console.log('now it run this condition')
        //     console.log('currentSortedMeals line 28', currentSortedMeals)
        //     // const sortedArray = currentSortedMeals.filter((meal) => meal.meat !== category)
        //     // console.log('sortedArray lin 30', sortedArray)
        //     this.setState({
        //         childChange: 'push out',
        //         currentSortedMeals: currentSortedMeals.map((meal) => {if(meal.meat !== category) return meal})
        //     }
        //         , () => { console.log('currentSortedMeals line35', currentSortedMeals) }
        //     )


        // }

        let a = true
        if (a) {
            console.log('it run')
            this.setState({
                b: true
            },
                () => { console.log(this.state) }
            )
        } else {
            this.setState({
                str: ''
            },
                () => { console.log(this.state) }
            )

        }

    }

    handleChangeName = (animalName) => {
        let name = ''
        if (name !== animalName) {
            name = animalName
            this.setState({
                name: 'dog'
            }, () => console.log(this.state))
        } else {
            name = animalName
            this.setState({
                name: 'cat'
            }, () => console.log(this.state))
        }
    }


    render() {
        return (
            <div>
                <button onClick={() => this.handleChangeName(true)}>Show Beef</button>
                <button onClick={() => this.handleChangeName(false)}>Show Chicken</button>
                <button onClick={() => this.handleChangeName()}>Show Pork</button>
                {/* <button onClick={() => this.toggleSortedArray('beef')}>Show Beef</button>
                <button onClick={() => this.toggleSortedArray('chicken')}>Show Chicken</button>
                <button onClick={() => this.toggleSortedArray('pork')}>Show Pork</button> */}
            </div>
        )
    }

}


