import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRandomCube, stopCubeGame } from '../../redux/cubeAction'
import playImg from '../../resources/play.svg'
import pauseImg from '../../resources/pause.svg'
import stopImg from '../../resources/stop.svg'
import ideaImg from '../../resources/idea.svg'

export const PlayBtns = () => {
  const dispatch = useDispatch()
  const { cube, play } = useSelector((state) => state)

  const handleRandom = (e) => {
    e.preventDefault()
    dispatch(getRandomCube(cube))
  }

  const handleStop = () => {
    dispatch(stopCubeGame())
  }

  const handleIdea = () => {
    console.log('Idea')
  }

  let nameClasse = ['btn-group']
  play ? nameClasse.push('play') : (nameClasse = ['btn-group'])

  return (
    <div className={nameClasse.join(' ')}>
      <div className='btn-group_section'>
        <button className='play-pause-btn' onClick={handleRandom}>
          <img src={play ? pauseImg : playImg} alt={play ? 'Pause' : 'Play'} />
        </button>
        {play && (
          <button className='play-pause-btn' onClick={handleStop}>
            <img src={stopImg} alt='Stop' />
          </button>
        )}
      </div>
      <button className='play-pause-btn idea' onClick={handleIdea}>
        <img src={ideaImg} alt='Idea' />
      </button>
    </div>
  )
}
