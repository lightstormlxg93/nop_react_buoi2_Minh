import React, { Component } from 'react'

export default class LeftGlassAndDetail extends Component {
    render() {
        return (
            <div className='leftGlassView'>
                <img style={{ width: "100%" }} src="./glassesImage/v7.png" alt="" />
                <div className='leftDetailView'>
                    <h6 style={{ color: "blue" }}>FENDI F8750</h6>
                    <p>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
                </div>
            </div>


        )
    }
}
