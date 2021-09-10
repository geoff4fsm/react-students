import React, { useState } from 'react'

const StudentScore = (props) => {
    console.log(props.score)
    return (
        <div>
            <h2 id='date'>
                Date: {props.studentScore.date}
                Score: {props.studentScore.score}
            </h2>

        </div>
    )
}
export default StudentScore