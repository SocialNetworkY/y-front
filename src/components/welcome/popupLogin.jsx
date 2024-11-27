import {handleInputFocus,handleInputBlur} from "../popup/popup";
import {useState} from "react";
import {useAuth} from "../../context/authContext";
import {useNavigate} from "react-router-dom";
import {constants} from "../../constants";


export function PopupLogin() {

    const [pass, setPass] = useState('');
    const [username, setUsername] = useState('');

    const {setAccessToken, setRefreshToken} = useAuth();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    let [isBtnBlocked,setBtnBlocking] = useState(false);

    async function dataPickUp(event) {
        event.preventDefault();
        setBtnBlocking(true)

        setError('');

        try {
            let user = {
                login: username,
                password: pass,
            };

            let response = await fetch(`${constants.authApiV1}/login`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(user),
            });

            let json = await response.json();
            if (!response.ok) {
                setError(`Error request: ${json.message}`);
                return;
            }

            setAccessToken(json.token);
            navigate("/");
        } catch (error) {
            setError(`Unexpected error: ${error.message}`);
        } finally {
            setBtnBlocking(false)
        }
    }


    const maxLength = 52;

    function loginOnChange(event) {
        setUsername(event.target.value);

        const popupInput = event.currentTarget.closest(".popup-input");

        if (username.length > maxLength) {
            popupInput.classList.add("error");
        } else {
            popupInput.classList.remove("error");
        }

    }
    function passwordOnChange(event) {
        setPass(event.target.value);

        const popupInput = event.currentTarget.closest(".popup-input");

        if (username.length > maxLength) {
            popupInput.classList.add("error");
        } else {
            popupInput.classList.remove("error");
        }
    }


    return (
      <form onSubmit={dataPickUp} className="popup-tab">
          <div className="popup-title"><h3>Sign in</h3></div>
          <div onClick={handleInputFocus} className="popup-input">
              <div className="popup-input__text">
                  <span className='popup-input__text-name'>Login</span>
              </div>
              <input required onBlur={handleInputBlur} onChange={loginOnChange} type="text"/>
          </div>
          <div onClick={handleInputFocus} className="popup-input">
              <div className="popup-input__text">
                  <span className='popup-input__text-name'>Password</span>
                  <span className='popup-input__text-symbols'>{pass.length}/{maxLength}</span>
              </div>
              <input required onBlur={handleInputBlur} onChange={passwordOnChange} type="password"/>
          </div>
          <button disabled={isBtnBlocked} type='submit' className="popup-next">
              <span>Confirm</span>
          </button>
      </form>
    )
}