import React, { Component } from 'react'
import { dataGlass } from './data'


export default class ListGlassLayout extends Component {
  state = {
    urlGlass: "",
    nameGlass: "",
    descGlass: ""
  }
  renderRight = (id) => {
    return dataGlass.map((item) => {
      if (id == item.id) {
        this.state.urlGlass = item.url;
        this.state.nameGlass = item.name;
        this.state.descGlass = item.desc;
      }
    })
  }

  renderGlassList = () => {
    return dataGlass.map((item) => {
      return (
        <div onClick={() => { this.renderRight(item.id) }} className='col-2'>
          <img style={{ width: "100%", border: "3px solid blue", cursor: "pointer" }} src={item.url} alt="" />
        </div>


      )
    })
  }



  render() {
    return (
      <div >
        <div className='listGlassLayout row'>
          {this.renderGlassList()}
        </div>

      </div>


    )
  }
}
