import { useState, useEffect } from "react"

const Error = ({mensaje}) => {
  return (
    <div className="text-danger text-center p-3">
        <p>{mensaje}</p>
    </div>
  )
}

export default Error