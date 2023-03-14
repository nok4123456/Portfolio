import React from "react"

function SkillNode(prop) {
    return (
        <img
            src={prop.picture}
            className="bg-white w-52 h-52 rounded-full border-2 text-center shadow-md shadow-white border-black"
        ></img>
    )
}

export default SkillNode
