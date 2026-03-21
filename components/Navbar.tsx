import { Button } from "@/components/ui/button"
import React from 'react'
import {Layers2 } from 'lucide-react';
import {navContent} from '@/constants/data'
function Navbar() {

  return (
    <nav className="flex justify-between items-center max-w-full h-14 shadow-md bg-[#fdfdfe] fixed top-0 left-0 right-0  z-50 backdrop-blur-md ">
        <div className="flex gap-2 pl-3">
            <Layers2 size={navContent.logo.size} color={navContent.logo.color}/>
            <h1 className="text-lg font-extrabold">{navContent.heading}</h1>
        </div>
        <div className="pr-3">
            <Button className="bg-[#3425cd] text-white cursor-pointer lg:px-5 lg:py-5" variant={navContent.button.variant}>{navContent.button.label}</Button>
        </div>
    </nav>
  )
}

export default Navbar