import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' alt='' src={imageUrl} width='800em' height='auto' />
                {
                    box.map((elem, i) => {
                        return (
                            <div className='bounding-box' key={i}
                                style={{
                                    top: elem.topRow,
                                    right: elem.rightCol,
                                    bottom: elem.bottomRow,
                                    left: elem.leftCol
                                }}>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FaceRecognition