import React, { useState } from 'react'
import StudentScore from './StudentScore'
const Student = (props) => {
    
    const scoreList = props.student.scores.map( (score) => 
    <StudentScore studentScore={score} />  )

    return (
        <div>
            <h1 id='name'>
                Name: {props.student.name}
            </h1>
            <h2 id='bio'>
                Bio: {props.student.bio}
            </h2>
           {scoreList} 
        </div>
    )
}

export default Student