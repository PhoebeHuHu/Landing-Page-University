import React from 'react'
import './campus.css'

import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'

import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
    const photos = [
        { img: gallery_1 },
        { img: gallery_2 },
        { img: gallery_3 },
        { img: gallery_4 }
    ]
    return (
        <div className='campus'>
            <div className="gallery">
                {photos.map((photo, index) => (
                    <img key={index} src={photo.img}></img>
                ))}
            </div>
            <button className='btn dark-btn'>See More Here<img src={white_arrow} /></button>
        </div>
    )
}

export default Campus