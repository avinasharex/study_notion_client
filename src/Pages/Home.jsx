import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa";

function Home() {
  return (
    <div>
        <div className="relative mx-auto flex flex-col w-11/12 items-center text-white justify-between">
            <Link to={'/signup'}>
                <div className="group mt-16 p-1 mx-auto rounded-full bg-gray-400 transition-all ease-in-out duration-300 hover:scale-95 w-fit">
                    <div className="group-hover:bg-gray-500 flex items-center rounded-full px-10 py-1">
                        <p>Become an Instructor</p>
                        <FaArrowRight></FaArrowRight>
                    </div>
                </div>
            </Link>

            <div className="mt-7 text-center text-4xl font-semibold">
                Empower Your Future With 
                <span className="font-bold text-blue-400">{" "}Coding Skills</span>
            </div>

            <div className="mt-4 w-[90%] text-lg text-center font-bold">
                With our online coding courses, you can laern at your ownpace, from anywhere in the world, and access to a wealth of resourses, including hands-on projects, quizzes, and personalized feedback from instructors.
            </div>
        </div>
    </div>
  )
}

export default Home