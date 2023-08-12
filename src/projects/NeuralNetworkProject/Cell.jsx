import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client';




export default function Cell({ socket, row_, col_, isDraw, handleOnclickCell, included }) {

  let [row, setRow] = useState(row_);
  let [col, setCol] = useState(col_);
  let [clicked, setClicked] = useState(false)
  let [sent, isSent] = useState(false)
  let [active, setActive] = useState(false)
  let [socketObj, setSocketObj] = useState(socket);

  // useEffect(() => {
  //   if (active) {
  //     socketObj.on('data', data => {
  //       console.log(data)
  //     })
  //   }
  // }, [socketObj, active])

  // const onClickCell = (e) => {
  //   if (!active)     setActive(!active)
  //   setClicked(!clicked)
  //   if (!sent) socketObj.emit('data', { row: row, col: col })
  //   handleOnclickCell(row, col)
  // }

  // const handleMouseMove = (e) => {
  //   if (isDraw && !clicked) {
  //     setClicked(!clicked)
  //     if (!sent) socketObj.emit('data', { row: row, col: col })
  //   }
  // }

  return (
    <p className={'w-[10px] h-[10px] ' + (clicked || included ? 'primary-bg' : 'secondary-bg')}></p>
  )
}
