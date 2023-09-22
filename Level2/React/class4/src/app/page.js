"use client"; // This is a client component 👈🏽
import HeaderComponent from "./header"
import MainComponent from "./main"
import 'bootstrap/dist/css/bootstrap.css'



export default function Home() {
  return (
    <>

      <HeaderComponent />

      <MainComponent />

      <style jsx global>{`
        body{
          margin: 0;
          font-family: sans-serif;
          letter-spacing: 1px
        }
      `}</style>

      
    </>
  )
}
