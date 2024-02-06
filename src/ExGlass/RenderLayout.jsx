import React, { Component } from 'react'
import { dataGlass } from './data'


export default class RenderLayout extends Component {
  state = {
    urlGlass: "",
    nameGlass: "",
    descGlass: ""
  }
  renderRight = (id) => {
    document.querySelector(".rightDetailView").style.display = "block";
    dataGlass.map((item) => {
      if (id == item.id) {
        this.setState({ urlGlass: item.url });
        this.setState({ nameGlass: item.name });
        this.setState({ descGlass: item.desc });
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
      <div  >
        {/* right model */}
        <div className='right'>
          {/* model */}
          <img className='rightModel' src="./glassesImage/model.jpg" alt="" />
          {/* Glass */}
          <div className='rightGlassView'>
            <img style={{ width: "100%" }} src={this.state.urlGlass} alt="" />

          </div>
          <div className='rightDetailView'>
            <h6 style={{ color: "blue" }}>{this.state.nameGlass}</h6>
            <p>{this.state.descGlass}</p>
          </div>
        </div>


        {/* listGlass layout */}
        <div className='listGlassLayout row'>
          {this.renderGlassList()}
        </div>
        
      </div>
    )
  }
}
