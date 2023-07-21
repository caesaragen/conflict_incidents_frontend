import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import Navbar from '@/components/Navbar/Navbar'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>HUMAN WILDLIFE CONFLICT INCIDENT</title>
            </Head>
                <Navbar/>

            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
             
            
      

                </div>
            </div>
        </>
    )
}
