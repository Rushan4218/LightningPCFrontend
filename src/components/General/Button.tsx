import React from "react"

type ButtonPropType = {
    buttonText: string
}

const Button: React.FC<ButtonPropType> = ({buttonText}) => {
    return (
        <button className="bg-secondary-400 text-neutral-900 px-4 py-2 shadow-md font-semibold hover:bg-secondary-500 hover:text-black active:scale-90 duration-300">{buttonText}</button>
    )
}

export {Button} ;