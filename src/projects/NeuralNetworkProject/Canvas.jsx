import React, { useEffect, useRef, useState } from 'react'
import Cell from './Cell';
var cellWidth = 20;
var cellHeight = 20;
var width = 560;
const LOCAL = 'http://localhost:5000/predict'
const GLOBAL = 'https://neural-network-socket.onrender.com/predict'
export default function Canvas({ clear, setPredictedNumber }) {
  let [isDraw, setIsDraw] = useState(false);
  let [canvasWidth, setCanvasWidth] = useState(560)
  const generateEmptyGrid = () => {
    return Array.from(Array(28), () => new Array(28).fill(0))
  }

  const callPredictApi =  async() => {
    let response = await fetch(GLOBAL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ grid: grids}),
    });
    var data = await response.json();
    setPredictedNumber(data.result)
  }

  const handleWindowResize = () => {
    if (window.innerWidth > 1200) {
      setCanvasWidth(560);
      cellHeight = 20;
      cellWidth = 20
    }
    else if (window.innerWidth > 400) {
      setCanvasWidth(280);
      width = 280;
      cellHeight = 10;
      cellWidth = 10;
    }
    else setCanvasWidth(140)
  };
  let [w, setW] = useState(0)

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
              return 0.9
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
      const row = getClickedRow(e);
      const col = getClickedCol(e);
      g[row][col] =  0.9;
      drawRect(e)
    }
  }

  const handleOnMouseMoveCanvas = (e) => {
    if (isDraw) {
      const row = getClickedRow(e);
      const col = getClickedCol(e);
      g[row][col] =  0.9;
      drawRect(e);
    }
  }

  const handleOnMouseUpCanvas = () => {
    setIsDraw(false);
    callPredictApi()
  }

  var comp;


  const style = {
    width: canvasWidth
  }
  return (
    <div ref={canvas} style={style} onMouseDown={handleOnMouseDownCanvas} onMouseMove={handleOnMouseMoveCanvas} onMouseUp={handleOnMouseUpCanvas}>
      <div className='flex flex-wrap'>
        {grids.map((grid, row) => {
          return grid.map((g, col) => {
            return (
              <Cell key={row + ' ' + col} row_={row} col_={col} isDraw={g==0? false: true} width={cellWidth} height={cellHeight}></Cell>
            )
          })
        })}
      </div>
    </div>
  )
}
