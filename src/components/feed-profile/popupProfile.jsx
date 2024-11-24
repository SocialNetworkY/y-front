import {handleInputFocus,handleInputBlur} from "../popup/popup";
import { constants } from '../../constants'
import { useState } from 'react'


export async function popupAuth() {
  event.preventDefault();

  const [nickname, setNickname] = useState('');
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');


  const [error, setError] = useState('');
  const [isBtnBlocked,setBtnBlocking] = useState(false);

  setBtnBlocking(true)

  setError('');

  async function dataPickUp(event) {
    try {
      if (nickname !== nickname) {
        setError('Confirm Password Error');
        return;
      }
      if (!username.username) {
        setError('Username Error');
        return;
      }
      if (!constants.passwordRegex.test(pass)) {
        setError('Password Error');
        return;
      }
      if (pass !== confirmPass) {
        setError('Confirm Password Error');
        return;
      }

      let changeUser = await fetch(`${constants.userApiV1}/login`, {
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

      if (!activate.ok) {
        setError(`Error request: ${responseActivationToken.message}`);
        return;
      }

      setAccessToken(responseActivationToken.token);
      navigate("/feed");
    } catch (error) {
      setError(`Unexpected error: ${error.message}`);
    } finally {
      setBtnBlocking(false)
    }

  }






  return (
    <form onSubmit={dataPickUp} className="popup-tab">
      <div className="popup-title"><h3>Create your account</h3></div>
      <div onClick={handleInputFocus} className="popup-input">
        <div className="popup-input__text">
          <span className='popup-input__text-name'>Name</span>
          <span className='popup-input__text-symbols'>0/52</span>
        </div>
        <input onBlur={handleInputBlur} type="text"/>
      </div>
      <div onClick={handleInputFocus} className="popup-input">
        <div className="popup-input__text">
          <span className='popup-input__text-name'>Email</span>
        </div>
        <input onBlur={handleInputBlur} type="text"/>
      </div>
      <div onClick={handleInputFocus} className="popup-input">
        <div className="popup-input__text">
          <span className='popup-input__text-name'>Password</span>
          <span className='popup-input__text-symbols'>0/30</span>
        </div>
        <input onBlur={handleInputBlur} type="password"/>
      </div>
      <div onClick={handleInputFocus} className="popup-input">
        <div className="popup-input__text">
          <span className='popup-input__text-name'>Confirm password</span>
        </div>
        <input onBlur={handleInputBlur} type="password"/>
      </div>
      <button disabled={isBtnBlocked} type='submit' className="popup-next">
        <span onClick={window.close}>Confirm</span>
      </button>
      {error && <div className="popup-error">{error}</div>}
    </form>
  )
}