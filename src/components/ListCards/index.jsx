import React from 'react'
import OneCard from './OneCard';
import './ListCards.css'

class ListCards extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      list: [],
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/Kseniiakov/repos')
      .then(r => r.json())
      .then((data) => {
        this.setState((state) => ({
          ...state,
          list: data,
        }))
      })
  }

  render() {
    return (
      <ul className='listCards'>
          {this.state.list.length === 0 ? 'Empty list' : this.state.list.map(data => <OneCard data = {data}/>)}
      </ul>
    )
  }
}

export default ListCards;