import React from 'react'

const Card = ({children , bg = 'bg-indigo-300'}) => {
    return (
        <div className={` ${bg} shadow-lg rounded-lg p-6 `}>{children}</div>
    )
}

export default Card