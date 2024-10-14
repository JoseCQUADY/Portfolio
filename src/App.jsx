import './App.css'
import { useState, useRef } from 'react'
import Padlock from '../Components/Padlock'
import Typewriter from './hooks/Typewriter'
import { FcCheckmark } from "react-icons/fc";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import textSound from './assets/background-sound.mp3';
import useSound from 'use-sound';

function App() {

  const [click, setClick] = useState(true)

  const handleClick = () => {
    setClick(false)
    console.log(click)
  }
  const [play, { stop }] = useSound(textSound);

  return (
    <>
      <div className='root-container'>

        <div onClick={handleClick} className={`text-white flex ${click ? 'click-container-active' : 'click-container-none '}`}>
          <img src="/Jose.webp" alt="José" className=' w-60 h-1/3 animate' />
          <div className="relative animate w-80">
            <div className="bg-gray-200 text-gray-900 rounded-lg px-4 py-2 max-w-xs ml-4">
              <Typewriter text="  ¡Hola! Soy José, bienvenido a mi portafolio. Desbloquea toda mi información haciendo click en las recompensas. ¡Suerte!" speed={80} />
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 -left-2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-gray-200"></div>
          </div>
          <div className='absolute bottom-16 right-10 sound-on cursor-pointer animate w-full flex justify-center items-center'>
            <Typewriter className='' text="  Tip: Haz click en cualquier lugar para comenzar la aventura." speed={80} />
          </div>
        </div>


        <div className='bento-container grid grid-cols-4 gap-2 grid-rows-4 relative'>
          <div className="col-span-2 row-span-1 rounded-xl shadow-md flex items-center justify-center relative" id='card'>
            <Padlock />
            <div className='absolute text-2xl text-[#ffffffd1]'><span>Coming soon...</span></div>
          </div>
          <div className="col-span-2 row-span-1 rounded-xl shadow-md flex items-center justify-center relative" id='card'>
            <Padlock />
            <div className='absolute text-2xl text-[#ffffffd1]'><span>Coming soon...</span></div>
          </div>

          <div className="col-span-1 row-span-4 rounded-xl shadow-md flex items-center justify-center relative" id='card'>
            <Padlock />
            <div className='absolute flex flex-col gap-0 w-full h-full'>
              <div className='w-full flex justify-center my-5 text-white'><span className='my-0 p-0'> <button className=' bg-[#130e5b6b] cursor-none text-3xl w-40 rounded-full h-8 flex flex-row gap-2 justify-center items-center'> Projects</button></span></div>

              <div className='flex flex-col h-full w-full gap-5 py-5'>
                <span className=' text-center text-[#ffffffd1] cursor-none text-xl w-full  h-20 flex flex-col gap-2 justify-center items-center'> Chat with Sockets (MERN) <a href="https://github.com/JoseCQUADY/CrazyChat" target='_blank'><FaGithub className='cursor-pointer' size={40} /></a></span>
                <span className=' text-center text-[#ffffffd1] cursor-none text-xl w-full  h-20 flex flex-col gap-2 justify-center items-center'> Typing Test (VANILLA JS) <a href="https://github.com/JoseCQUADY/TypingApp" target='_blank'><FaGithub className='cursor-pointer' size={40} /></a></span>
                <span className=' text-center text-[#ffffffd1] cursor-none text-xl w-full  h-20 flex flex-col gap-2 justify-center items-center'> Weather App (React) <a href="https://github.com/JoseCQUADY/Weather-App" target='_blank'><FaGithub className='cursor-pointer' size={40} /></a></span>
              </div>

            </div>
          </div>

          <div className="col-span-2 row-span-2 rounded-xl shadow-md relative name-card" id="card">
            <Padlock />
            <div className='w-full p-7 flex flex-col gap-2 absolute'>
              <div className='flex flex-row'>
                <img className="josephoto w-40 h-40 rounded-3xl" src="./Jose-real.webp" alt="José-Real-Face" />
                <div className=' mx-4 my-2 w-full flex flex-col '>
                  <button className='text-sm w-40 rounded-full h-8 flex flex-row gap-2 justify-center items-center'> <FcCheckmark />Ready to work</button>
                  <span className='text-2xl'>José de Jesús Chi Quintal</span>
                  <span className='text-xl'>FullStack - Trainee</span>
                  <span className='flex flex-row gap-2'> <a href="https://github.com/JoseCQUADY" target='_blank'><FaGithub className="cursor-pointer" size={50} /></a>  <a href="https://www.linkedin.com/in/jose-chi-quintal-3b872621b" target='_blank'><FaLinkedin className="cursor-pointer" size={50} /></a></span>
                </div>
              </div>

              <div className='w-full h-full  flex justify-start gap-2 px-2 py-2'>
                <span className=''> <button className=' cursor-none text-sm w-40 rounded-full h-8 flex flex-row gap-2 justify-center items-center'> <FcCheckmark />English & Spanish</button></span>
                <span className=''> <button className=' cursor-none text-sm w-44 rounded-full h-8 flex flex-row gap-2 justify-center items-center'> <FcCheckmark />Software Engineer</button></span>
                <span className=''> <button className=' cursor-none text-sm w-20 rounded-full h-8 flex flex-row gap-2 justify-center items-center'> <FcCheckmark />UADY</button></span>
                <span className=''> <button className=' cursor-none text-sm w-16 rounded-full h-8 flex flex-row gap-2 justify-center items-center'> <FcCheckmark />MX</button></span>
              </div>
            </div>
          </div>

          <div className="col-span-1 row-span-2  rounded-xl shadow-md flex items-center justify-center relative" id='card'>
            <Padlock />
            <div className='absolute text-2xl text-[#ffffffd1]'><span>Coming soon...</span></div>
          </div>

          <div className="col-span-3 row-span-2  rounded-xl shadow-md  justify-center relative" id='card'>

            <div className='flex flex-row w-full h-full absolute'>
              <div className='w-40 flex h-full justify-center items-center  text-white'><span className='my-0 p-0'> <button className=' cursor-none text-2xl w-40 rounded-full h-8 flex flex-row gap-2 justify-center items-center'>
                Experience :
              </button>
              </span>
              </div >
              <div className='w-full h-full flex flex-row justify-start'>
                <div className=' text-[#ffffffd1]  mx-5  bg-[#130e5b2d] rounded-2xl my-5 p-5 text-xl w-96  h-30 flex flex-col justify-center items-center '>
                  <span>GreenField Team</span>
                  <span>FullStack Developer : React, C#, SQL</span>
                  
                  <span>May-November 2023</span>
                </div>
              </div>
              <div className='w-full h-full flex flex-row justify-start'>
                <div className=' text-[#ffffffd1]  bg-[#130e5b2d] rounded-3xl my-5 p-5 text-xl w-100  h-30 flex flex-col justify-center items-center '>
                  <span>Software Engineering</span>
                  <span>2020-2025</span>
                </div>
              </div>

            </div>
            <Padlock />
          </div>

        </div>
      </div>
    </>
  )
}

export default App
