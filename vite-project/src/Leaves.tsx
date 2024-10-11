import { colors } from "@mui/material";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface LeaveFormState {
  name: string;
  startDate: Date;
  endDate: Date;
  leaveType: string;
  loading: boolean;
  formSubmitted: boolean;
}

const ApplyLeaveForm: React.FC = () => {
  const [formState, setFormState] = useState<LeaveFormState>({
    name: "",
    startDate: new Date(),
    endDate: new Date(),
    leaveType: "",
    loading: false,
    formSubmitted: false,
  });

  const handleDateChange = (fieldName: keyof Pick<LeaveFormState, 'startDate' | 'endDate'>, date: Date | null) => {
    if (date !== null) {
      setFormState({ ...formState, [fieldName]: date });
    } else {
      // Optionally handle null case if the date is cleared
      setFormState({ ...formState, [fieldName]: new Date() });
      console.log(formState)
    }
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState({ ...formState, loading: true });
    console.log(formState)

    setTimeout(() => {
      setFormState({ ...formState, loading: false, formSubmitted: true });
    }, 2000);
  };

  if (formState.formSubmitted) {
    return <p className="text-lg">Leave application submitted successfully!</p>;
  }

  return (
    <div className="bg-offwhite flex flex-col justify-center items-center">
      <p className="font-montserrat text-[40px] mt-12 font-bold text-purple">Apply for Leave</p>
      <form className="flex flex-col w-[90%] justify-center mt-10" onSubmit={handleSubmit}>
            <div>
                <p className="font-montserrat mt-5 mb-5 flex justify-start pl-3 font-thin text-grey text-[20px]">
                    Tan Xiao Ming
                </p>
            </div>
        <div className="flex flex-row">

          <div className="flex flex-col w-[28%] mr-12">
            <p className="font-montserrat mt-5 flex justify-start pl-3 font-thin text-grey">Start Date</p>
            <DatePicker
              name="startDate"
              className="p-3 pr-5 rounded-xl text-black flex justify-start bg-white text-[16px]"
              selected={formState.startDate}
              onChange={date => handleDateChange('startDate', date)}
            />
          </div>
          <div className="flex flex-col ml-10 w-[35%] ml-12">
            <p className="font-montserrat mt-5 flex justify-start pl-3 font-thin text-grey">End Date</p>
            <DatePicker
              name="endDate"
              className="p-3 pr-5 rounded-xl text-black flex justify-start bg-white text-[16px]"
              selected={formState.endDate}
              onChange={date => handleDateChange('endDate', date)}
            />
          </div>
        </div>
        <label className="font-montserrat mt-10 flex justify-start pl-3 font-thin text-grey">Choose Leave Type:</label>
        <select
            name="leaveType"
            value={formState.leaveType}
            onChange={handleSelectChange}
            className="p-3 mt-1 rounded-xl bg-white text-black w-full"
            >
            <option value="">Select Leave type</option>
            <option value="annual">Annual Leave</option>
            <option value="sick">Sick Leave</option>
            <option value="unpaid">Unpaid Leave</option>
            </select>
        <button
          type="submit"
          className="bg-purple text-white py-3 rounded-lg font-bold mt-10 text-[16px] align-items font-montserrat"
          disabled={formState.loading}
        >
          {formState.loading ? 'Submitting...' : 'Apply for Leave'}
        </button>
      </form>
    </div>
  );
};

export default ApplyLeaveForm;
