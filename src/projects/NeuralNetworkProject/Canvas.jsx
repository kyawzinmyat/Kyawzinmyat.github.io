import React, { useEffect, useState } from 'react'
import Cell from './Cell';
import { io } from 'socket.io-client';

export default function Canvas() {
  const g = []

  let [isDraw, setIsDraw] = useState(false);

  for (var i = 0; i < 28; i++) {
    g.push([])
    for (var j = 0; j < 28; j++) {
      g[i].push(<Cell row={i} col={j}></Cell>)
    }
  }
  const _socket = io("http://127.0.0.1:5000/", {
    transports: ["websocket"],
    cors: {
      origin: "http://localhost:5173/",
    },
  });
  _socket.on('connect', data => {
  })
  let [socket, setSocket] = useState(_socket);
  let [grids, setGrids] = useState(g);

  // const handleOnclickCell = (row, col) => {
  //   setGrids(
  //     grids.map(
  //       grid => {
  //         return grid.map(
  //           gr => {
  //             if (gr.row === row + 1 || gr.row === row - 1 || gr.col === col + 1 || gr.col === col - 1) {
  //               return { ...gr, included: true }
  //             }
  //             else return gr
  //           }
  //         )
  //       }
  //     )
  //   )
  // }

  useEffect(() => {
    console.log(socket)
  }, [socket])

  const handleMouseDownCell = (e) => {
    setIsDraw(!isDraw)
  }

  const handleOnMouseDownCanvas = (e) => {
    setIsDraw(!isDraw);
  }

  const handleOnMouseMoveCanvas = () => {

  }

  const handleOnMouseUpCanvas = () => {

  }

  var comp;

  return (
    <div ref={el => {
      // el can be null - see https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs
      if (!el) return;
      comp = el.getBoundingClientRect();;
    }} className='w-[280px]' onMouseDown={handleOnMouseDownCanvas} onMouseMove={handleOnMouseMoveCanvas} onMouseUp={handleOnMouseUpCanvas}>
      <div className='flex flex-wrap'>
        {grids.map((grid, row) => {
          return grid.map((g, col) => {
            const cell = React.cloneElement(g, { row_: row, col_: col, isDraw: isDraw, socket: _socket })
            return (
              <div key={row + '/' + col}>
                {cell}
              </div>
            )
          })
        })}
      </div>
    </div>
  )
}
