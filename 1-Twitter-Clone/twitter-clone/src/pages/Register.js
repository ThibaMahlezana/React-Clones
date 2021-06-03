import { FontAwsome } from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

function Register(){
    return(
    <div className="container register">
        <div className="row">
            <div className="col-6"> <FaTwitter/> Image</div>
            <div className="col-6"> 
                <div className="content">
                    <FaTwitter/> 
                    <h1 className="heading">Happening now</h1>
                    <h2>Join Twitter today.</h2>
                    <button>Sign up</button>
                    <button>Log in</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Register;