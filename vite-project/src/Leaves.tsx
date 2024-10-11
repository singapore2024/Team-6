import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface LeaveFormState {
  name: string;
  startDate: Date;
  endDate: Date;
  reason: string;
  loading: boolean;
  formSubmitted: boolean;
}

const ApplyLeaveForm: React.FC = () => {
  const [formState, setFormState] = useState<LeaveFormState>({
    name: "",
    startDate: new Date(),
    endDate: new Date(),
    reason: "",
    loading: false,
    formSubmitted: false,
  });

  const handleDateChange = (fieldName: keyof Pick<LeaveFormState, 'startDate' | 'endDate'>, date: Date | null) => {
    if (date !== null) {
      setFormState({ ...formState, [fieldName]: date });
    } else {
      // Optionally handle null case if the date is cleared
      setFormState({ ...formState, [fieldName]: new Date() });
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState({ ...formState, loading: true });

    setTimeout(() => {
      setFormState({ ...formState, loading: false, formSubmitted: true });
    }, 2000);
  };

  if (formState.formSubmitted) {
    return <p className="text-lg">Leave application submitted successfully!</p>;
  }

  return (
    <div className="bg-white flex flex-col justify-center items-center pb-10">
      <h1 className="font-montserrat text-4xl mt-12 font-bold text-purple">Apply for Leave</h1>
      <form className="flex flex-col w-[60%] mt-10" onSubmit={handleSubmit}>
        <div>Tan Xiao Ming</div>
        <label htmlFor="startDate" className="font-montserrat mt-5 text-lg text-grey">Start Date</label>
        <DatePicker
          id="startDate"
          name="startDate"
          className="p-3 rounded-xl bg-white text-lg"
          selected={formState.startDate}
          onChange={date => handleDateChange('startDate', date)}
        />
        <label htmlFor="endDate" className="font-montserrat mt-5 text-lg text-grey">End Date</label>
        <DatePicker
          id="endDate"
          name="endDate"
          className="p-3 rounded-xl bg-white text-lg"
          selected={formState.endDate}
          onChange={date => handleDateChange('endDate', date)}
        />
        <label htmlFor="reason" className="font-montserrat mt-5 text-lg text-grey">Reason for Leave</label>
        <textarea
          id="reason"
          name="reason"
          className="p-3 mt-1 rounded-xl bg-white text-lg h-[200px]"
          placeholder="Enter reason for leave..."
          maxLength={255}
          value={formState.reason}
          onChange={handleInputChange}
        ></textarea>
        <button
          type="submit"
          className="mt-10 bg-purple text-white py-3 rounded-lg text-lg font-bold"
          disabled={formState.loading}
        >
          {formState.loading ? 'Submitting...' : 'Apply for Leave'}
        </button>
      </form>
    </div>
  );
};

export default ApplyLeaveForm;
