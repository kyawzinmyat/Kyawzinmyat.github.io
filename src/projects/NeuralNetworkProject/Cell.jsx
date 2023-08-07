import React, { useState } from 'react'

export default function Cell({row_, col_, isDraw}) {

  let [row, setRow] = useState(row_);
  let [col, setCol] = useState(col_);
  let [clicked, setClicked] = useState(false)

  const onClickCell = (e) => {
    setClicked(!clicked)
  }

  const handleMouseMove = (e) => {
    if (isDraw && !clicked) setClicked(!clicked)
  }

  return (
    <p className={'w-[20px] h-[20px] ' + (clicked ? 'primary-bg': 'secondary-bg')} onClick={onClickCell} onMouseMove={handleMouseMove}></p>
  )
}
