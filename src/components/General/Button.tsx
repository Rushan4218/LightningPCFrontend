import React from "react"

type ButtonPropType = {
    buttonText: string
}

const Button: React.FC<ButtonPropType> = ({buttonText}) => {
    return (
        <button className="bg-primary-400 text-neutral-900 my-4 px-4 py-2 shadow-md font-semibold hover:bg-primary-500 hover:text-black active:scale-90 duration-300">{buttonText}</button>
    )
}

export {Button} ;