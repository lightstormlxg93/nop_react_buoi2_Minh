import React, { Component } from 'react'
import RenderLayout from './RenderLayout'



export default class GlassLayout extends Component {
    
    render() {
        return (
            <div  >
                {/* nền tối */}
                <div className="backgoundDark">
                    {/* header */}
                    <header>
                        TRY GLASSES APP ONLINE
                    </header>


                    {/* left model */}
                    <div className='left'>
                        {/* model */}
                        <img className='LeftModel' src="./glassesImage/model.jpg" alt="" />
                        {/* Glass */}
                        <div className='leftGlassView'>
                            <img style={{ width: "100%" }} src="./glassesImage/v7.png" alt="" />

                        </div>
                        <div className='leftDetailView'>
                            <h6 style={{ color: "blue" }}>FENDI F8750</h6>
                            <p>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.
                            </p>
                        </div>
                    </div>


                    {/* right model */}
                    <RenderLayout />


                </div>

            </div>
        )
    }
}
