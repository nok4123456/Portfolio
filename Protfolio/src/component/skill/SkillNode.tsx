import React from "react"

function SkillNode(prop) {
    return (
        <img
            src={prop.picture}
            className="bg-white w-48 h-48 rounded-full border border-2 text-center shadow-md shadow-white border-black"
        ></img>
    )
}

export default SkillNode
