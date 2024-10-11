
import BackButtonIcon from '../icons/back_arrow.png'
import { useNavigate } from "react-router-dom";

const BackButton: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className='fixed top-1 left-1 w-12'>
            <img onClick={() => navigate("/")} src={BackButtonIcon}></img>
        </div>
    );
}

export default BackButton;