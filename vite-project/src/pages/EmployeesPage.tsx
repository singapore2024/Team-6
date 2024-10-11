import React, { useState, useEffect } from "react";
import SpeakerIcon from "../icons/speakericon.png";
import TextSizeIcon from "../icons/text_size.png";
import { Typography } from "@mui/material";
import BackButton from "../components/BackButton";

type EmployeeInfo = {
    id: number;
    name: string;
    textToSpeechEnabled: boolean;
    enlargedText: boolean;
};

type IconToggleProps = {
    enabled: boolean;
    icon: string;
    onToggle: () => void;
};

const IconToggle: React.FC<IconToggleProps> = ({ enabled, icon, onToggle }: IconToggleProps) => {
    return (
        <div className="flex">
            <label className="inline-flex relative items-center cursor-pointer">
                <input
                    type="checkbox"
                    value=""
                    checked={enabled}
                    className="sr-only peer"
                    onChange={onToggle}
                />
                <div className="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600 hover:peer-checked:bg-indigo-700"></div>
            </label>
            <img src={icon} className="w-6"></img>
        </div>
    );
};

type EmployeeCardProps = EmployeeInfo & {
    onToggleTextToSpeech: () => void;
    onToggleEnlargeText: () => void;
};

const EmployeeCard: React.FC<EmployeeCardProps> = ({ name, textToSpeechEnabled, enlargedText, onToggleEnlargeText, onToggleTextToSpeech }: EmployeeCardProps) => {
    return (
        <div className="flex flex-row w-7/8 h-full p-2 m-1 border rounded-md justify-center items-center ">
            <p className="text-left basis-3/6 text-slate-800">{name}</p>
            <div className="basis-1/6">
                <IconToggle enabled={textToSpeechEnabled} icon={SpeakerIcon} onToggle={onToggleTextToSpeech} />
            </div>
            <div className="basis-1/6">
                <IconToggle enabled={enlargedText} icon={TextSizeIcon} onToggle={onToggleEnlargeText} />
            </div>
            <div className="basis-1/6">
                <button className="bg-blue-700 rounded-md text-xs p-2">More Details</button>
            </div>
        </div>
    );
};

const EmployeesPage: React.FC = () => {
    const [employeesInfo, setEmployeesInfo] = useState<EmployeeInfo[]>([]);

    // Fetch users from the API
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/v1/users");
                const data = await response.json();
                const transformedData = data.map((employee: any) => ({
                    id: employee.id,
                    name: employee.name,
                    textToSpeechEnabled: employee.text_to_speech,
                    enlargedText: employee.enlarged_text,
                }));
                setEmployeesInfo(transformedData);
            } catch (error) {
                console.error("Error fetching employee data:", error);
            }
        };

        fetchEmployees();
    }, []);

    // Function to handle preference update
    const updateUserPreferences = async (id: number, textToSpeechEnabled: boolean, enlargedText: boolean) => {
        try {
            const response = await fetch(`http://localhost:3000/api/v1/users/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    text_to_speech: textToSpeechEnabled,
                    enlarged_text: enlargedText,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to update user preferences");
            }
        } catch (error) {
            console.error("Error updating user preferences:", error);
        }
    };

    // Handlers for toggling preferences
    const handleToggleTextToSpeech = (id: number, currentState: boolean) => {
        const updatedEmployees = employeesInfo.map((employee) =>
            employee.id === id
                ? { ...employee, textToSpeechEnabled: !currentState }
                : employee
        );
        setEmployeesInfo(updatedEmployees);

        const updatedEmployee = updatedEmployees.find((e) => e.id === id);
        if (updatedEmployee) {
            updateUserPreferences(id, updatedEmployee.textToSpeechEnabled, updatedEmployee.enlargedText);
        }
    };

    const handleToggleEnlargeText = (id: number, currentState: boolean) => {
        const updatedEmployees = employeesInfo.map((employee) =>
            employee.id === id
                ? { ...employee, enlargedText: !currentState }
                : employee
        );
        setEmployeesInfo(updatedEmployees);

        const updatedEmployee = updatedEmployees.find((e) => e.id === id);
        if (updatedEmployee) {
            updateUserPreferences(id, updatedEmployee.textToSpeechEnabled, updatedEmployee.enlargedText);
        }
    };

    return (
        <>
            <BackButton />
            <div className="w-[680px] h-full">
                <Typography variant="h2" color="black">
                    Employee's Profiles
                </Typography>
                <ul className="w-full min-h-96 max-h-96 h-full items-center list-disc gap-1 overflow-y-scroll">
                    {employeesInfo &&
                        employeesInfo.map((employee) => (
                            <EmployeeCard
                                key={employee.id}
                                id={employee.id}
                                name={employee.name}
                                textToSpeechEnabled={employee.textToSpeechEnabled}
                                enlargedText={employee.enlargedText}
                                onToggleTextToSpeech={() => handleToggleTextToSpeech(employee.id, employee.textToSpeechEnabled)}
                                onToggleEnlargeText={() => handleToggleEnlargeText(employee.id, employee.enlargedText)}
                            />
                        ))}
                </ul>
            </div>
        </>
    );
};

export default EmployeesPage;
