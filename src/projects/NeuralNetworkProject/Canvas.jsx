import React, { useEffect, useRef, useState } from 'react'
import Cell from './Cell';
var cellWidth = 20;
var cellHeight = 20;

export default function Canvas({ clear, setPredictedNumber, socket_ }) {
  let [isDraw, setIsDraw] = useState(false);
  let [width, setWidth] = useState(560)
  const generateEmptyGrid = () => {
    var g = [];
    for (var i = 0; i < 28; i++) {
      g.push([])
      for (var j = 0; j < 28; j++) {
        g[i].push(<Cell row={i} col={j}></Cell>)
      }
    }
    return g;
  }


  const handleWindowResize = () => {
    if (window.innerWidth > 1200) {
      setWidth(560);
      cellHeight = 20;
      cellWidth = 20
    }
    else if (window.innerWidth > 400) {
      setWidth(280);
      cellHeight = 10;
      cellWidth = 10;
    }
    else setWidth(100)
  };
  let [socket, setSocket] = useState(socket_);

  useEffect(() => {
    const g = generateEmptyGrid();
    setGrids(g);
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [clear])

  const g = generateEmptyGrid()
  let [grids, setGrids] = useState(g);
  let canvas = useRef(null);

  const getClickedRow = (e) => {
    comp = canvas.current.getBoundingClientRect()
    const offsetY = comp.y;
    const eventY = e.clientY;
    var row = Math.floor((eventY - offsetY) / cellHeight);
    return row;
  }

  const getClickedCol = (e) => {
    comp = canvas.current.getBoundingClientRect()
    const offsetX = comp.x;
    const eventX = e.clientX;
    var col = Math.floor((eventX - offsetX) / cellWidth);
    return col;
  }

  const drawRect = (e) => {
    const row = getClickedRow(e);
    const col = getClickedCol(e);
    setGrids(
      grids.map((grid, r) => {
        return grid.map(
          (g, c) => {
            if (r == row && col === c) {
              return { ...g, isDraw: true }
            }
            return g;
          }
        )
      })
    )

  }

  const handleOnMouseDownCanvas = (e) => {
    if (!isDraw) {
      setIsDraw(!isDraw);
      drawRect(e)
      const row = getClickedRow(e);
      const col = getClickedCol(e);
      socket.emit('data', { row: row, col: col })
    }
  }

  const handleOnMouseMoveCanvas = (e) => {
    if (isDraw) {
      drawRect(e);
      const row = getClickedRow(e);
      const col = getClickedCol(e);
      socket.emit('data', { row: row, col: col })
      socket.on('data', data => {
        setPredictedNumber(data.result);
      })
    }
  }

  const handleOnMouseUpCanvas = () => {
    setIsDraw(false)
  }

  var comp;

  return (
    <div ref={canvas} className={`w-[${width}px]`} onMouseDown={handleOnMouseDownCanvas} onMouseMove={handleOnMouseMoveCanvas} onMouseUp={handleOnMouseUpCanvas}>
      <div className='flex flex-wrap'>
        {grids.map((grid, row) => {
          return grid.map((g, col) => {
            const cell = React.cloneElement(g, { row_: row, col_: col, isDraw: g.isDraw, width: cellWidth, height: cellHeight })
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
