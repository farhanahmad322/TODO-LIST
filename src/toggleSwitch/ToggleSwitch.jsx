import { useState } from "react";
import { IoIosSwitch } from "react-icons/io";

function ToggleSwitch() {
    const [isOn, setIsOn] = useState(false);

    const handleToggleSwitch = () => {
        setIsOn(!isOn);
    };

    // Define classes and values based on the toggle state
    const screenBackground = isOn ? "bg-yellow-500" : "bg-gray-500";
    const buttonBackground = isOn ? "bg-green-500" : "bg-red-500";
    const buttonTransition = isOn ? "translate-x-36" : "translate-x-2";
    const buttonText = isOn ? "text-green-500" : "text-red-500";
    const onOff = isOn ? "ON" : "OFF";
    const iconColor = isOn ? "text-yellow-500" : "text-gray-500"; 

    return (
        <>
            <h1 className="font-bold text-center pt-4 pb-4">
                Lorem ipsum 
                <IoIosSwitch className={`inline-block ml-2 ${iconColor} text-3xl`} />
            </h1>
            <div className={`flex items-center justify-center h-screen ${screenBackground}`}>
                <div
                    className={`w-60 h-20 rounded-full flex items-center cursor-pointer transition-colors duration-300 ${buttonBackground}`}
                    onClick={handleToggleSwitch}
                >
                    <div
                        className={`w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center transform transition-transform duration-300 ${buttonTransition}`}
                    >
                        <span className={`text-sm font-bold ${buttonText}`}>
                            {onOff}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default ToggleSwitch;
