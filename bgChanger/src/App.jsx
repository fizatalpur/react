import { useState } from "react"
import Button from "./components/Button"

function App() {
    

  return (
    <>
    
     <div className="w-full h-screen duration-200">
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
           <Button bgcolor="red" text="Red" />
          <Button  bgcolor="green" text="Green" />
          <Button  bgcolor="olive" text="Olive" />
          <Button  bgcolor="black" text="black" />
        </div>
      </div>
    </div>
          
     
    </>
  )
}

export default App
