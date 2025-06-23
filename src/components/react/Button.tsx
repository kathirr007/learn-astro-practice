import React from 'react'

function Button({ children, ...props }) {
  return (
    <button
      onClick={() => {
        console.log('clicked')
      }}
      type={props.type || 'button'}
      {...props}
      className="rounded-sm bg-white px-2 py-1 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
    >
      {children}
    </button>
  )
}

export default Button
