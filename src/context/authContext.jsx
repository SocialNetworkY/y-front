import React , {useContext , useEffect , useState} from 'react';
import {Router , useNavigate} from "react-router-dom";
import {constants} from "../constants";


const AuthContext = React.createContext(null);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [accessToken, setAccessToken] = useState('');
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    async function sendRequest(requestOptions) {

        async function makeRequest() {
            if(!requestOptions.headers) {
                requestOptions.headers = {};
            }
            requestOptions.headers['Authorization'] = `Bearer ${accessToken}`;
            try {
                return await fetch(requestOptions.url, requestOptions);
            } catch (error) {
                console.error("Network error:", error);
                throw error;
            }
        }

        let response = await makeRequest();

        if (response.ok) {
            return response;
        }

        console.error(response.statusText);


        if (response.status === 401) { // Unauthorized
            const refreshResult = await refreshToken()
            if(refreshResult) {
                return refreshResult;
            }
            return await makeRequest();
        }

    }

    useEffect(() => {
        const performRefresh = async () => {
            try {
                await refreshToken();
                console.log(accessToken);
                if (accessToken === "") {
                    navigate("/login");
                } navigate("/feed");
            } finally {
                setLoading(false);
            }
        };
        performRefresh();
    }, []);


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
        let refresh = await fetch(`${constants.authApiV1}/refresh`, {
            method: 'POST',
            credentials: 'include',
        });
        let refreshResponse = await refresh.json();

        if(refresh.ok) {
            setAccessToken(refreshResponse.token)
            return;
        } else {
            return refresh;
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