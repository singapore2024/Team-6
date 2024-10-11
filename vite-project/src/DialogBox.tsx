import { FaCheck } from "react-icons/fa";

interface DialogBoxProps {
    title: string;
    message: string;
    onClose: () => void;
  }
  
  const DialogBox: React.FC<DialogBoxProps> = ({ title, message, onClose }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
        <div className="w-[40%] bg-white p-6 rounded-xl shadow-lg font-poppins mx-auto h-[30%]">
          <button
            className="absolute top-2 right-2 bg-darkBlue text-white px-2 py-1 rounded-lg"
            onClick={onClose}
          >
            Close
          </button>
          <div className="flex justify-center flex-col items-center mt-6 font-montserrat">
            <FaCheck className="text-darkBlue text-[25px] -mt-1" />
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-3xl text-gray-700 mt-1">{message}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default DialogBox;
  

