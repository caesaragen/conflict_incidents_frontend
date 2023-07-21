import Head from 'next/head'
import Image from 'next/image'
import { useAuth } from '@/hooks/auth'
import Navbar from '@/components/Navbar/Navbar'
import FaGooglePlay from "react-icons/fa"

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>HUMAN WILDLIFE CONFLICT INCIDENT</title>
            </Head>
            <Navbar />

            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="mx-auto w-full ">
                    {/* <div className='flex'>
                        <Image src="/elephants.jpg" width="70%" height="100" />
                        <div className='flex flex-col lg:flex-row items-center'>
                            <span>
                                <h2 className='font-bold text-2xl w-full dark:text-gray-100 text-center'>
                                    Human Wildlife Conflict Incidence Report
                                </h2>
                            </span>
                        </div>
                    </div> */}
                    <div
                        className="relative h-screen bg-cover bg-center flex items-center justify-center"
                        style={{ backgroundImage: 'url(/elephants.jpg)' }}
                    >
                        <div className="flex flex-col">
                        <div className="text-white text-4xl font-bold z-10">Human Wildlife Conflict Incidence Report</div>
                            <div className="text-white text-4xl font-bold z-10">
                                {/* <span>Download on Google <FaGooglePlay/></span> */}
                                {/* <span><FaGooglePlay/></span> */}
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}
