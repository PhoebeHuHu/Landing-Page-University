import React from 'react'
import './programs.css'
import program_img_1 from '../../assets/program-1.png'
import program_img_2 from '../../assets/program-2.png'
import program_img_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
    const programs = [
        { image: program_img_1, icon: program_icon_1, title: "Graduation Degree" },
        { image: program_img_2, icon: program_icon_2, title: "Master Degree" },
        { image: program_img_3, icon: program_icon_3, title: "Post Graduation" }
    ]
    return (
        <div className='programs'>
            {
                programs.map((program, index) => (
                    <div key={index} className='program'>
                        <img src={program.image} alt="" />
                        <div className="caption">
                            <img src={program.icon} alt="" />
                            <p>{program.title}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Programs