import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
            <div>
                <div className="h-20 bg-blue-400 flex justify-between items-center px-5">
                    <a href='/' className="text-white text-xl">
                        GELEN ZAMLAR
                    </a>
                    <div className="flex gap-x-5">
                        <button className="text-white text-xl"><Link to="/">Anasayfa</Link></button>
                        <button className="text-white text-xl"><Link to="/hakkımda">Hakkımda</Link></button>
                    </div>
                </div>
            </div>
    )
}
