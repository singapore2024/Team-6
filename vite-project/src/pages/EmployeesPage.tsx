import React from "react";

type EmployeeInfo = {
    name: string,
    textToSpeechEnabled: boolean,
    enlargedText: boolean
};

const EmployeeCard: React.FC<EmployeeInfo> = ({ name }: EmployeeInfo) => {
    return (
        <div className='flex'>
            <p>{name}</p>
        </div>
    );
};

const EmployeesPage: React.FC = () => {
    const employeesInfo: EmployeeInfo[] = [
        { name: 'John', textToSpeechEnabled: false, enlargedText: true },
        { name: 'Mary', textToSpeechEnabled: true, enlargedText: false },
        { name: 'Aaron', textToSpeechEnabled: false, enlargedText: true }


    ];
    return (
        <>
            <ul className='flexbox list-disc'>
                {employeesInfo && employeesInfo.map((e) =>
                    <EmployeeCard name={e.name}
                        textToSpeechEnabled={e.textToSpeechEnabled}
                        enlargedText={e.enlargedText}></EmployeeCard>)
                }
            </ul>

        </>
    );
};

export default EmployeesPage;
