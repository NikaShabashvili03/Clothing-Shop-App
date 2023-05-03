import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories : [
                {
                    key: 'All',
                    name: 'All'
                },
                {
                    key: 'T-Shirt',
                    name: 'T-Shirts'
                },
                {
                    key: 'Shirt',
                    name: 'Shirts'
                },
                {
                    key: 'Hoodie',
                    name: 'Hoodies'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.filterCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories
