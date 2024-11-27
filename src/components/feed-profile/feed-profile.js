import "./feed-profile.scss";
import React, {Component, useEffect, useState} from "react";
import postAva from "../feed-posts/img/tweet-logo1.png";
import postImg from "../feed-posts/img/tweet-img1.png";
import { handleInputFocus, handleInputBlur } from "../popup/popup";
import Popup from "../popup/popup";
import {useAuth} from "../../context/authContext";
import {constants} from "../../constants";
import postSettingsImg from "../feed-posts/img/dots.svg";
import Comment from "../feed-posts/post-comments";
import Post from "../feed-posts/Post";

export default function FeedProfile() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [posts, setPosts] = useState([]);
    const [postStart, setPostStart] = useState(0);
    const [postEnd, setPostEnd] = useState(50);
    const {user, sendRequest, updateUser} = useAuth()

    function changeAvatar(e) {
        const file = e.target.files[0];
        if (!file){
            alert("File required");
            return;
        }

        console.log(file)

        if (!file.type.includes("image/")) {
            alert("Image required");
            return;
        }

        console.log(file)

        const formData = new FormData();
        formData.append("avatar", file);

        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }

        sendRequest({
                url: `${constants.userApiV1}/users/${user.id}`,
                method: 'PATCH',
                data: formData
            }).then((response) => response.text())
                .then((result) => {
                    console.log(result);
                    updateUser();
                }).catch((error) => console.error(error));
    }

    useEffect(() => {
        fetch(`${constants.postApiV1}/posts/users/${user.id}?skip=${postStart}&limit=${postEnd}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((posts) => {
                setPosts(posts)
                console.log(posts);
            })
            .catch((error) => {
                console.error("error:", error);
            });
    }, [])

    return (
        <section className="feed-profile">
            <div className="container">
                <div className="feed-profile__head">
                    <div className="feed-profile__title">
                        <div className="feed-profile__title-avatar">
                            <input id={'fileInput'} type='file' onChange={changeAvatar} style={{display: "none"}}/>
                            <img src={user.avatar} alt="avatar"
                                 onClick={() => document.getElementById("fileInput").click()}/>
                        </div>
                        <div className="feed-profile__title-btn">
                            <button onClick={() => {
                                setIsPopupVisible(true)
                            }}><span>Change profile</span></button>
                        </div>
                    </div>
                    <div className="feed-profile__info">
                        <div className="feed-profile__info-name"><span>{user.nickname}</span></div>
                        <div className="feed-profile__info-username"><span>@{user.username}</span></div>
                    </div>
                </div>
                <div className="feed-profile__tabs">
                    <div data-tab="1" className='feed-profile__tabs-tab active'>
                        <span>Posts</span>
                    </div>
                </div>
                <div className="feed-profile__content">
                    {posts.map((post) => (
                        <Post key={post.id} postData={post}/>
                    ))}
                </div>
            </div>
            {isPopupVisible && <Popup isOpen={isPopupVisible} onClose={() => {
                setIsPopupVisible(false)
            }}><ChangeProfilePopup user={user}/></Popup>}
        </section>
    );
}

function ChangeProfilePopup({user}) {
    const [nickname, setNickname] = useState(user.nickname);
    const [username, setUsername] = useState(user.username);
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [error, setError] = useState('');

    const {updateUser, sendRequest, changePass} = useAuth();

    const [isBtnBlocked, setBtnBlocking] = useState(false);

    const maxLength = 52;

    async function submitForm(event) {
        event.preventDefault();
        setError('');
        setBtnBlocking(true);

        const formData = new FormData();

        if (user.nickname !== nickname && nickname.length > 0) {
            formData.append('nickname', nickname);
        }

        if (user.username !== username && constants.loginRegex.test(username)) {
            formData.append('username', username);
        }

        const response = await sendRequest({
            url: `${constants.userApiV1}/users/${user.id}`,
            method: 'PATCH',
            body: formData
        })

        if (!response.ok) {
            const json = await response.json();
            setError(`Error updating profile: ${json.message}`);
        }

        if (pass.length > 0) {
            if (pass === confirmPass && constants.passwordRegex.test(pass)) {
                await changePass(pass);
                setPass('')
                setConfirmPass('');
            } else {
                setError('Passwords do not match or are invalid');
            }
        }

        updateUser()
        setBtnBlocking(false);


    }

    function usernameOnChange(event) {
        setUsername(event.target.value);

        const popupInput = event.currentTarget.closest(".popup-input");

        if (username.length > maxLength) {
            popupInput.classList.add("error");
        } else {
            popupInput.classList.remove("error");
        }

    }


    function nicknameOnChange(event) {
        setNickname(event.target.value);

        const popupInput = event.currentTarget.closest(".popup-input");

        if (nickname.length > maxLength) {
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
        <form onSubmit={submitForm} className="popup-tab">
            <div className="popup-title"><h3>Change your account</h3></div>
            <div onClick={handleInputFocus} className="popup-input">
                <div className="popup-input__text">
                    <span className='popup-input__text-name'>Nickname</span>
                    <span className='popup-input__text-symbols'>{nickname.length}/{maxLength}</span>
                </div>
                <input onBlur={handleInputBlur} onChange={nicknameOnChange} type="text" value={nickname}/>
            </div>
            <div onClick={handleInputFocus} className="popup-input">
                <div className="popup-input__text">
                    <span className='popup-input__text-name'>Username</span>
                    <span className='popup-input__text-symbols'>{username.length}/{maxLength}</span>
                </div>
                <input onBlur={handleInputBlur} type="text" onChange={usernameOnChange} value={username}/>
            </div>
            <div onClick={handleInputFocus} className="popup-input">
                <div className="popup-input__text">
                    <span className='popup-input__text-name'>New password</span>
                </div>
                <input onBlur={handleInputBlur} type="password" onChange={passwordOnChange} value={pass}/>
            </div>
            <div onClick={handleInputFocus} className="popup-input">
                <div className="popup-input__text">
                    <span className='popup-input__text-name'>Confirm password</span>
                </div>
                <input onBlur={handleInputBlur} type="password" onChange={(event) => {setConfirmPass(event.target.value)}} value={confirmPass}/>
            </div>
            <button disabled={isBtnBlocked} type='submit' className="popup-confirm">
                <span>Confirm</span>
            </button>
            {error && <div className="popup-error">{error}</div>}
        </form>
    );
}