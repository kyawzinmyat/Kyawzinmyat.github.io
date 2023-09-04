import React from 'react'
import Navbar from '../components/Navbar'
import '../index.css'
import { motion    } from 'framer-motion'
import List from './List'
import  {PortfolioImagesDesktop, PortfolioImagesMobile}  from './PortfolioProject'
import { SolutionItDesktop, SolutionItMobile } from './SolutionIt'
import Canvas from './NeuralNetworkProject/Canvas'
import NeuralNetworkProject from './NeuralNetworkProject/NeuralNetworkProject'

const projects = [
  {title: 'Portfolio Website', mobileImg: PortfolioImagesMobile, img: PortfolioImagesDesktop, description: "A professional website for my portfolio where I can introduce myself and highlight my abilities and experiences", technical: "React, Vite, HTML, CSS, Tailwind css, Framer"},
  {title: 'Business Website', mobileImg: SolutionItMobile, img: SolutionItDesktop, description: "a landing page for a company that offers software solutions for numerous business needs", technical: "React, Django, HTML, CSS, Tailwind css, Framer, Postgresql"}
  // {title: 'Stock Market Simulation', img: StockImage, description: "A website that simulates the stock market with purchase, sale, and other capabilities. To buy or sell shares, a user can deposit or withdraw money and access real-time stock data.",},
  // {title: 'Tic Tac Toe Ai', img: TictactoeImage, description: "A program to demonstrate two AI techniques, Reciforcement Learning and MiniMax Pruning, using them to produce an unbeatable AI player for the game of tic-tac-toe"}
]

export default function Projects() {
  return (
    <motion.div className='box'>
      <Navbar activePage="projects"></Navbar>

      <h1 className='text-md lg:text-lg font-bold  text-center m-[1em] w-8/12 mx-auto p-2'>Here are a few projects I completed for my learning journal.</h1>
      <div>
        <List projects={projects}></List>
      </div>
      <div>
        <NeuralNetworkProject></NeuralNetworkProject>
      </div>
    </motion.div>
  )
}
