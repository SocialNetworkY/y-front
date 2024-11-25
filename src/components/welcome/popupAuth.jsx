import { handleInputFocus, handleInputBlur } from "../popup/popup";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../../context/authContext";
import {constants} from "../../constants";
import {wait} from "@testing-library/user-event/dist/utils";


export function PopupAuth() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [username, setUsername] = useState('');

    const {setAccessToken} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const loginRegex = /^[a-zA-Z0-9]{3,52}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,255}$/;


    const [isBtnBlocked,setBtnBlocking] = useState(false);

    async function dataPickUp(event) {
        event.preventDefault();
        setError('');
        setBtnBlocking(true);

        try {
            if (!loginRegex.test(username)) {
                setError('Username Error');
                return;
            }
            if (!passwordRegex.test(pass)) {
                setError('Password Error');
                return;
            }
            if (pass !== confirmPass) {
                setError('Confirm Password Error');
                return;
            }

            let user = {
                username: username,
                email: email,
                password: pass,
            };

            let response = await fetch(`${constants.authApiV1}/register`, {
                method: 'POST',
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

            let activate = await fetch(`${constants.authApiV1}/activate/${json["activation_token"]}`, {
                credentials: 'include',
            });
            let responseActivationToken = await activate.json();

            if (!activate.ok) {
                setError(`Error activation: ${responseActivationToken.message}`);
                return;
            }

            setAccessToken(responseActivationToken.token);
            navigate("/feed");
        } catch (error) {
            setError(`Unexpected error: ${error.message}`);
        } finally {
            setBtnBlocking(false);
        }
    }



    const maxLength = 52;

    function usernameOnChange(event) {
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
          <div className="popup-title"><h3>Create your account</h3></div>
          <div onClick={handleInputFocus} className='popup-input'>
              <div className="popup-input__text">
                  <span className='popup-input__text-name'>Name</span>
                  <span className='popup-input__text-symbols'>{username.length}/{maxLength}</span>
              </div>
              <input required onBlur={handleInputBlur} type="text" onChange = {usernameOnChange} />
          </div>
          <div onClick={handleInputFocus} className="popup-input">
              <div className="popup-input__text">
                  <span className='popup-input__text-name'>Email</span>
              </div>
              <input required onBlur={handleInputBlur} type="email" onChange = {(event) => {setEmail(event.target.value)}}  />
          </div>
          <div onClick={handleInputFocus} className="popup-input">
              <div className="popup-input__text">
                  <span className='popup-input__text-name'>Password</span>
                  <span className='popup-input__text-symbols'>{pass.length}/{maxLength}</span>
              </div>
              <input required onBlur={handleInputBlur} type="password" onChange = {passwordOnChange} />
          </div>
          <div onClick={handleInputFocus} className="popup-input">
              <div className="popup-input__text">
                  <span className='popup-input__text-name'>Confirm password</span>
              </div>
              <input required onBlur={handleInputBlur} type="password" onChange = {(event) => {setConfirmPass(event.target.value)}} />
          </div>
          <button disabled={isBtnBlocked} type='submit' className="popup-next">
              <span onClick={window.close}>Confirm</span>
          </button>
          {error && <div className="popup-error">{error}</div>}
      </form>
    );
}