import React from 'react'
import ProjectCard from './ProjectCard'

export default function List({projects}) {
  return (
    <div  className='grid grid-cols-1 lg:grid-cols-3 gap-y-10'>
        {projects.map((project, index) => {
            return <ProjectCard title={project.title} mobileImg={project.mobileImg} key={index} index={index} img={project.img} description={project.description} technicals={project.technical   }></ProjectCard>
        })}
    </div>
  )
}
