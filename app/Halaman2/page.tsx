"use client"
import React, { use } from 'react'
import Image from "next/image";
import Pintro from "@/app/Assets/Pintro.svg";
import maintance from "@/app/Assets/maintenance.svg";
import NotFound from "@/app/Assets/404.svg";
import {Poppins} from "next/font/google";
import RootLayout from '../layout';

const poppinsFont = Poppins ({
    subsets: ["latin"],
    weight:"900",
});

const Kedua = () => {
    return (
        
        <div>
            <Image
                    src= {Pintro}
                    alt= "Pintro Logo"
                    className="h-30 w-50 mx-auto"
            />
            <Image
                src= {NotFound}
                alt= "Notfound"
                className="h-120 w-120 mx-auto mh-auto"
            />
        <div>
            
        <div className={`${poppinsFont.className} space-y-2 text-7xl text-center relative w-auto h-auto mx-auto`}>
            <h1 className='text-black p-5'>Halaman tidak Tersedia</h1>
            <p className="text-3xl text-center mx-auto text-black/90 font-bold">Tidak ada yang dapat dilihat disini</p>
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
        
export default Kedua