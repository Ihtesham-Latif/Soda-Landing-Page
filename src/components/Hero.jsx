import React, { useState } from 'react'
import { useDrinks } from '../context/DrinksContext'
import Background from './Background.jsx'
import { TinsData,OrangeTin,LemonTin,StrawTin } from './Tins.js'


const Hero = () => {
    const {data,setdata,setOrangeSoda,setLemonSoda,setStrawSoda}  = useDrinks()
    const [tindata,settindata] = useState(TinsData)
    

    const handleOrangeClick = () => {
      setOrangeSoda(true)
      setLemonSoda(false)
      setStrawSoda(false)
      setdata(OrangeTin)

  }

  const handleLemonClick = () => {
      setOrangeSoda(false)
      setLemonSoda(true)
      setStrawSoda(false)
      setdata(LemonTin)
  }

  const handleStrawClick = () => {
      setOrangeSoda(false)
      setLemonSoda(false)
      setStrawSoda(true)
      setdata(StrawTin)
  }

  const {title,image,bg,bgText}= data

  return (
    <div className={`herocontainer w-full h-screen col-start-1 col-end-13 ${bg} relative`}>
      <Background bgtext={bgText} />
      <div className="foreground w-full h-full absolute top-0 left-0 z-[3] grid grid-cols-12 ">
       <div className="  data-cotainer col-start-2 col-end-7 flex flex-col justify-start pt-20  ">
        <div className="info space-y-4 mb-20 ">
          <h1 className='sm:text-4xl lg:text-6xl tracking-wide merienda text-zinc-200 shadow-black text-shadow-xl mb-8'>{title}</h1>
          <p  className=' teko text-lg tracking-wide text-balance text-zinc-300 mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta alias aspernatur deserunt illum enim, fugit vitae non. Vero, recusandae velit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, porro?</p>
          <button  className='bebas-neue-regular w-28 h-10 mt-5 bg-zinc-200 rounded-xl '>Order Now </button>
        </div>
        <div className="tin-container">
        <h1 className=' bebas-neue-regular tracking-wider text-white mb-5'>-------- Top Recomendation --------</h1>
        <div className="tins flex justify-start space-x-5">
        {tindata.map((tin)=>{
          const {image,price,id} = tin
          return (
            <div key={id} className="singleTinContainer flex flex-col justify-center items-center p-2 space-y-4">
              <img onClick={() => {
                                                if (id === 1) handleOrangeClick()
                                                if (id === 2) handleLemonClick()
                                                if (id === 3) handleStrawClick()
                                            }}  className='w-72 h-40 opacity-50 hover:opacity-100 grow hover:grow' src={image} alt="tin" />
              <span>{price}</span>
            </div>
          )
        })}

        </div>
       </div>
       </div>
       

       <div className='can-container col-start-7 col-end-12 flex justify-start items-center'>
          <img  className=' w-[90rem] ' src={image} alt="" />
       </div>
      </div>


      </div>
  )
}

export default Hero