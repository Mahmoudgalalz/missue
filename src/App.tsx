import { Button } from "./components/ui/button"
import {ArrowRightSquare} from "lucide-react"
function App() {

  return (
    <>
    <nav className="p-6">
      <ul className="flex justify-between sm:mx-36">
        <li className="font-bold text-2xl">Missue</li>
        <li className="flex gap-10">
        <Button>Sign up</Button>
        <Button variant="outline">Login</Button>
        </li>
      </ul>
    </nav>
      <section className="pt-24 bg-white">
    <div className="px-12 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                <span>Create</span> <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">Bulk Issues</span> <span>On Github repos with AI</span>
            </h1>
            <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
                Open Issues as tasks on an open-source project with no limits, and refine them with AI to have a professional feel.
            </p>
            <Button className="group">Get Started <ArrowRightSquare className="group-hover:translate-x-2 duration-150"/></Button>
        </div>
        <div className="w-full mx-auto mt-20 text-center md:w-10/12">
            <div className="relative z-0 w-full mt-8">
                <div className="relative overflow-hidden shadow-2xl">
                    <div className="flex items-center flex-none px-4 bg-green-400 rounded-b-none h-11 rounded-xl">
                        <div className="flex space-x-1.5">
                            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                            <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                        </div>
                    </div>
                    <img src="https://cdn.devdojo.com/images/march2021/green-dashboard.jpg"/>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default App
