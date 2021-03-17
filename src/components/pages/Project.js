import React from 'react'
import Footer from '../Footer'
import Listproject from '../Listproject'
import Allproject from './Allproject'

const Project = () => {
  return (
    <div className='my-4'>
      <h1 className='large'><i className="fas fa-code"></i> Project</h1>
      <div className="grid">
        {Listproject.map((project) => (
          <Allproject project={project}  key={project.id}/>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Project
