import React from 'react'
import Navbar from '../components/Navbar'
import '../index.css'
import { motion    } from 'framer-motion'
import List from './List'
import PortfolioImage from '../assets/portfolio.png'
import StockImage from '../assets/real _stock.png'
import TictactoeImage from '../assets/tic-tac-toe.png'
import WikiSearchEngine from '../assets/se.png'
import PortfolioMobileImage from '../assets/portfolio-mobile.png'

const projects = [
  {title: 'Portfolio Website', mobileImg: PortfolioMobileImage, img: PortfolioImage, description: "A professional website for my portfolio where I can introduce myself and highlight my abilities and experiences", technical: "React, Vite, HTML, CSS, Tailwind css, Framer"},
  {title: 'Stock Market Simulation', img: StockImage, description: "A website that simulates the stock market with purchase, sale, and other capabilities. To buy or sell shares, a user can deposit or withdraw money and access real-time stock data.",},
  {title: 'Tic Tac Toe Ai', img: TictactoeImage, description: "A program to demonstrate two AI techniques, Reciforcement Learning and MiniMax Pruning, using them to produce an unbeatable AI player for the game of tic-tac-toe"}
]

export default function Projects() {
  return (
    <motion.div className='primary-bg box'>
      <Navbar></Navbar>

      <h1 className='text-lg font-bold text-center m-5 w-8/12 mx-auto p-5'>Here are Some Projects That I have done during My learning Journal!</h1>
      <div>
        <List projects={projects}></List>
      </div>
    </motion.div>
  )
}
