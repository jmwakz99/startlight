import React from "react"

function Spinners({ styles, label }) {
  return (
    <div style={styles} className="mx-auto">
      <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
      {label}...

    </div>
  )
}

export default Spinners;
