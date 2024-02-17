import React from 'react'

function Title({ children }) {
    return (
        <h3 className='md:px-0 px-6 text-sm font-semibold mb-3'>{children}</h3>
    )
}

export default Title;