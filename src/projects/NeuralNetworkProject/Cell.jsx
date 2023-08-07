import React, { useState } from 'react'

export default function Cell({row_, col_}) {

  let [row, setRow] = useState(row_);
  let [col, setCol] = useState(col_);
  let [clicked, setClicked] = useState(false)

  return (
    <p className={'w-[20px] h-[20px] ' + clicked ? 'primary-bg': 'secondary-bg'}></p>
  )
}
