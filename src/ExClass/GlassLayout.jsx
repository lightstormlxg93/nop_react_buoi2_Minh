import React, { Component } from 'react'
import ListGlassLayout from './ListGlassLayout'
import LeftGlassAndDetail from './LeftGlassAndDetail'
import RightGlassAndDetail from './RightGlassAndDetail'

export default class GlassLayout extends Component {
    
    render() {
        return (
            <div  >
            {/* nền tối */}
                <img style={{
                    backgroundColor: "black",
                    width: "100%", 
                    height: "100vh",
                    opacity:"0.5"
                }} />
            {/* header */}
                <header>
                TRY GLASSES APP ONLINE
                </header>
            {/* left model */}
                <img  className='leftModel' src="./glassesImage/model.jpg" alt="" />
            {/* right model */}
            <img  className='rightModel' src="./glassesImage/model.jpg" alt="" />    
            {/* list glass */}
                <ListGlassLayout/>
            {/* left glass & detail */}
                <LeftGlassAndDetail/>
            {/* right glass & detail */}
                {/* <RightGlassAndDetail/> */}
                

            </div>
        )
    }
}
