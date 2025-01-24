import { useState } from "react";

const Example002 = () => {
    const [isOn, setIsOn] = useState(true)

    const toggleHandler = () =>{
        setIsOn((prev) => !prev)
    }
    return (
        <button
        onClick={toggleHandler}
         className={`relative w-20 h-[42px] rounded-full ${isOn ? " bg-blue-400" : "bg-slate-500"}`}>
            <div className={`absolute ${isOn ? "left-0" : "right-0"} top-0 w-10 h-10 rounded-full bg-white`}>

            </div>
        </button>
    )
}
export default Example002