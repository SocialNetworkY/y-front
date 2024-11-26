import React , {useContext , useEffect , useState} from 'react';
import {useNavigate} from "react-router-dom";
import {constants} from "../constants";


const AuthContext = React.createContext(null);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    let accessToken = "init";
    function setAccessToken(token) {
        accessToken = token;

        //console.log(`[${new Date().toISOString()}] Access Token Changed: `, accessToken)
        if (accessToken === "") {
            navigate("/login");
            setLoading(false)
        } else {
            currentUser()
        }
    }

    async function sendRequest(requestOptions) {
        async function makeRequest() {
            if(!requestOptions.headers) {
                requestOptions.headers = {};
            }
            requestOptions.headers['Authorization'] = `Bearer ${accessToken}`;
            return await fetch(requestOptions.url, requestOptions).catch((err) => {console.error("Network error:", err)});
        }

        const response = await makeRequest();
        if (response.ok) {
            return response;
        }

        if (response.status === 401) {
            await refreshToken();
            return await makeRequest();
        }
    }

    useEffect(() => {
        refreshToken()
    }, [navigate]);

    useEffect(() => {
        if (user) {
            setLoading(false)
        }
    }, [user])

    async function currentUser() {
        if (user) return user;
        try {
            const firstResp = await sendRequest({url: `${constants.authApiV1}/authenticate`});
            if (!firstResp.ok) throw new Error(`Failed to fetch user id: ${firstResp.statusText}`);
            const firstRespData = await firstResp.json();

            const secondResp = await sendRequest({url: `${constants.userApiV1}/users/${firstRespData.user_id}/full`});
            if (!secondResp.ok) throw new Error(`Failed to fetch user details: ${secondResp.statusText}`);

            const userData = await secondResp.json();
            setUser(userData);
            return userData;
        } catch (error) {
            console.error('Error fetching current user:', error);
            throw error;
        }
    }
    async function refreshToken() {
        let newAccessToken = "";
        try {
            const refresh = await fetch(`${constants.authApiV1}/refresh`, {
                method: 'POST',
                credentials: 'include',
            });

            if(!refresh.ok) {
                return refresh;
            }

            const refreshResponse = await refresh.json();
            newAccessToken = refreshResponse.token;
        } catch (e) {
            console.error(e);
            return e;
        } finally {
            setAccessToken(newAccessToken);
        }
    }

    const value = {
        setAccessToken,
        sendRequest,
        currentUser
    }

    return (
      <AuthContext.Provider value={value}>
          {!loading && children}
      </AuthContext.Provider>
    );
}