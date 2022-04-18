import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from '../components/Sidebar';
import Center from '../components/Center';


const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">

      <main className="flex">
        <Sidebar />
        <Center />
        {/* il y a la partie centrale*/}
      </main>

      <div>{/* audio player en bas de la page */}</div>
    </div>
  )
}

export default Home
