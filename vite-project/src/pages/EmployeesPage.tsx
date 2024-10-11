import React from "react";
import SpeakerIcon from "../icons/speakericon.png"
import TextSizeIcon from "../icons/text_size.png"
import { Typography } from "@mui/material";
import BackButton from "../components/BackButton";

type EmployeeInfo = {
    name: string,
    textToSpeechEnabled: boolean,
    enlargedText: boolean
};

type IconToggleProps = {
    enabled: boolean,
    icon: string,
    onToggle: () => void
};
const IconToggle: React.FC<IconToggleProps> = ({ enabled, icon, onToggle }: IconToggleProps) => {
    return (
        <div className="flex">
            <label className="inline-flexflex relative items-center cursor-pointer">
                {enabled &&
                    <input type="checkbox" value="" checked className="sr-only peer" onClick={onToggle} />

                }
                {!enabled &&
                    <input type="checkbox" value="" className="sr-only peer"
                        onClick={onToggle} />

                }
                <div className="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600 hover:peer-checked:bg-indigo-700"></div>
            </label>
            <img src={icon}
                className='w-6'></img>
        </div>

    );
}

type EmployeeCardProps = EmployeeInfo & {
    onToggleTextToSpeech: () => void,
    onToggleEnlargeText: () => void

}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ name, textToSpeechEnabled, enlargedText, onToggleEnlargeText, onToggleTextToSpeech }: EmployeeCardProps) => {
    return (
        <div className='flex flex-row w-7/8 h-full p-2 m-1 border rounded-md justify-center items-center '>
            <p className='text-left basis-3/6 text-slate-800'>{name}</p>
            <div className='basis-1/6'>
                <IconToggle enabled={textToSpeechEnabled}
                    icon={SpeakerIcon}
                    onToggle={onToggleTextToSpeech}></IconToggle>
            </div>
            <div className='basis-1/6'>
                <IconToggle enabled={enlargedText}
                    icon={TextSizeIcon}
                    onToggle={onToggleEnlargeText}></IconToggle>
            </div>
            <div className='basis-1/6'>
                <button className='bg-blue-700 rounded-md text-xs p-2'>More Details</button>
            </div>
        </div>
    );
};

const EmployeesPage: React.FC = () => {
    const employeesInfo: EmployeeInfo[] = [
        { name: 'John', textToSpeechEnabled: false, enlargedText: true },
        { name: 'Mary', textToSpeechEnabled: true, enlargedText: false },
        { name: 'Aaron', textToSpeechEnabled: false, enlargedText: true },
        { name: 'Victor Lai', textToSpeechEnabled: false, enlargedText: false },
        { name: 'Tan Guan Qun', textToSpeechEnabled: false, enlargedText: true },
        { name: 'Brian', textToSpeechEnabled: false, enlargedText: true },
        { name: 'Mu Rong Ng', textToSpeechEnabled: true, enlargedText: false },
        { name: 'Geok Ling', textToSpeechEnabled: false, enlargedText: false },
        { name: 'Jeremy', textToSpeechEnabled: false, enlargedText: false },
        { name: 'Rachel Tham', textToSpeechEnabled: false, enlargedText: true },
        { name: 'Soe', textToSpeechEnabled: false, enlargedText: true }
    ];
    return (
        <>
            <BackButton></BackButton>
            <div className='w-[680px] h-full'>
                <Typography variant="h2" color="black">Employee's Profiles</Typography>
                <ul className='w-full min-h-96 max-h-96 h-full items-center list-disc gap-1 overflow-y-scroll'>
                    {employeesInfo && employeesInfo.map((e) =>
                        <EmployeeCard name={e.name}
                            textToSpeechEnabled={e.textToSpeechEnabled}
                            enlargedText={e.enlargedText}
                            onToggleEnlargeText={() => e.enlargedText = e.enlargedText ? false : true}
                            onToggleTextToSpeech={() => e.textToSpeechEnabled = e.textToSpeechEnabled ? false : true}></EmployeeCard>)
                    }
                </ul>
            </div>
        </>
    );
};

export default EmployeesPage;
