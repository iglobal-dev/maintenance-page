"use client"
import React, { use } from 'react'
import Image from "next/image";
import Pintro from "@/app/Assets/Pintro.svg";
import maintance from "@/app/Assets/maintenance.svg";
import NotFound from "@/app/Assets/404.svg";
import {Poppins} from "next/font/google";

const poppinsFont = Poppins ({
    subsets: ["latin"],
    weight:"900",
});



const Page = () => {
    return (
        
        <div>
            <Image
                src= {Pintro}
                alt= "Pintro Logo"
                className="h-30 w-50 mx-auto"
                />
            <Image
                src= {maintance}
                alt= "maintance"
                className="h-90 w-90 mx-auto mh-auto m-5"
                />
        <div>
            
            <div className={`${poppinsFont.className} space-y-2 text-7xl text-center relative w-auto h-auto mx-auto m-2`}>
            <h1 className='text-black p-5'>Sedang ada Perbaikan</h1>
            <p className="text-3xl text-center mx-auto text-black/90 font-bold">Saat ini kami sedang meningkatkan kualitas, kami akan segera   Kembali!</p>
            </div>
                    <div className='auto'>
                    <p className="text-2xl text-center mt-7 px-auto mx-auto text-black/90">Maaf, untuk sementara Anda tidak dapat</p>
                    <p className="text-2xl text-center px-auto mx-auto text-black/90">mengakses halaman. Mungkin <a href="https://api.whatsapp.com/send?phone=6281281997643"><u>Tim Support</u> </a></p>
                    <p className="text-2xl text-center px-auto mx-auto text-black/90">Kami dapat Membantu?</p>
                    </div>
                    <div className='relative'>
                    <p className="text-2xl text-center mh-auto  mt-7 mx-auto  text-black/90"><a href="https://api.whatsapp.com/send?phone=6281281997643"><u>Hubungi Tim Support Kami Sekarang</u></a></p>
                    </div>
                </div>
                </div>
                
            )
        }
        
export default Page