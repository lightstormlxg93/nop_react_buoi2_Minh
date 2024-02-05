import React, { Component } from 'react'
import { dataGlass } from './data'

export default class RightGlassAndDetail extends Component {



    render() {
        return (
            <div className='rightGlassView'>
                <img style={{ width: "100%" }} src="./glassesImage/v7.png" alt="" />
                <div className='rightDetailView'>
                    <h6 style={{ color: "blue" }}>FENDI F8750</h6>
                    <p>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
                </div>
            </div>
        )
    }
}
