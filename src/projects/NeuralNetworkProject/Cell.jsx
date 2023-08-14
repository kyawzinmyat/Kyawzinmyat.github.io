import React from 'react'

export default function Cell({row_, col_, isDraw, width, height}) {

  const style = {
    width: width,
    height: height,
  }

  return (
    <p className={(isDraw ? 'secondary-bg': 'primary-bg')} style={style}></p>
  )
}
