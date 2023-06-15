import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export  function Input({...rest}: InputProps) {
  return (
    <input
      className="bg-gray-200 rounded-md px-4 py-2"
      {...rest}
    />
  )
}
