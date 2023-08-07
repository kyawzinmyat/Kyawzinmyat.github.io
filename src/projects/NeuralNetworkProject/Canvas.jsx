import React, { useState } from 'react'
import Cell from './Cell';

export default function Canvas() {
  const g = []

  let [isDraw, setIsDraw] = useState(false);

  for (var i = 0; i < 28; i++){
    g.push([])
    for (var j = 0; j < 28; j++){
        g[i].push(<Cell row={i} col={j}></Cell>)
    }
  }
  let [grids, setGrids] = useState(g)

  const onClickCell = (e) => {

  }

  const onClickCanvas = () => {
    setIsDraw(!isDraw);
  }

  return (
    <div className='w-[560px]' onClick={onClickCanvas}>
        <div className='flex flex-wrap'>
            {grids.map((grid, row) => {
                return grid.map((g, col) => {
                    const cell = React.cloneElement(g, {isDraw: isDraw})
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
