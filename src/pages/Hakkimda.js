import React from 'react'
import { FiInstagram } from "react-icons/fi"
import { AiFillLinkedin,AiFillGithub } from "react-icons/ai"

export default function Hakkimda() {
  return (
    <div className='flex flex-col gap-y-7 items-center mt-6'>
      <div className='overflow-hidden text-center px-20'>
        Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
      </div>
      <div className='flex gap-x-7'>
        <div className='h-80 w-80 border border-black rounded-lg shadow-lg flex flex-col items-center gap-y-2 p-6 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 transition-all'>
          <div>Muharrem Yılmaz</div>
          <div>muharremyilmaz656@gmail.com</div>
          <div>
            <img className='h-40 w-40 rounded-full border border-x-gray-300' src='https://avatars.githubusercontent.com/u/77534239?v=4' />
          </div>
          <div className='flex gap-x-2 mt-2'>
            <a href='https://www.instagram.com/1muharremyilmaz/'><FiInstagram size={25} /></a>
            <a href='https://www.linkedin.com/in/yilmazmuharrem/'><AiFillLinkedin size={25} /></a>
            <a href='https://github.com/yilmazmuharrem'><AiFillGithub size={25}/></a>
          </div>
        </div>
        <div className='h-80 w-80 border border-black rounded-lg shadow-lg flex flex-col items-center gap-y-2 p-6 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'>
          <div>Metin Aba</div>
          <div>abametin722@gmail.com</div>
          <div className='h-40 w-40 rounded-full border border-x-gray-300 bg-red-100'>
            <img src='' />
          </div>
          <div className='flex gap-x-2 mt-2'>
            <a href='https://www.instagram.com/emreozkpln/'><FiInstagram size={25} /></a>
            <a href='https://www.linkedin.com/in/metin-aba-17b315226'><AiFillLinkedin size={25} /></a>
            <a href='https://github.com/yilmazmuharrem'><AiFillGithub size={25}/></a>
          </div>
        </div>
      </div>
      <div className='flex gap-x-7'>
        <div className='h-80 w-80 border border-black rounded-lg shadow-lg flex flex-col items-center gap-y-2 p-6 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'>
          <div>Emre Özkaplan</div>
          <div>emre.ozkaplan@hotmail.com</div>
          <div className='h-40 w-40 rounded-full border border-x-gray-300 bg-red-100'>
            <img src='' />
          </div>
          <div className='flex gap-x-2 mt-2'>
            <a href='https://www.instagram.com/emreozkpln/'><FiInstagram size={25} /></a>
            <a href=''><AiFillLinkedin size={25} /></a>
            <a href='https://github.com/yilmazmuharrem'><AiFillGithub size={25}/></a>
          </div>
        </div>
        <div className='h-80 w-80 border border-black rounded-lg shadow-lg flex flex-col items-center gap-y-2 p-6 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'>
          <div>Emre Özkaplan</div>
          <div>emre.ozkaplan@hotmail.com</div>
          <div className='h-40 w-40 rounded-full border border-x-gray-300 bg-red-100'>
            <img src='' />
          </div>
          <div className='flex gap-x-2 mt-2'>
            <a href='https://www.instagram.com/emreozkpln/'><FiInstagram size={25} /></a>
            <a href=''><AiFillLinkedin size={25} /></a>
            <a href='https://github.com/Budl'><AiFillGithub size={25}/></a>
          </div>

        </div>
      </div>
    </div>
  )
}
