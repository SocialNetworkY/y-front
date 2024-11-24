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
    const navigate = useNavigate();

    async function sendRequest(requestOptions) {

        async function makeRequest() {
            if (!requestOptions.headers) {
                requestOptions.headers = {};
            }
            requestOptions.headers['Authorization'] = `Bearer ${accessToken}`;
            try {
                response = await fetch(requestOptions.url, requestOptions);
                return response;
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
                if (accessToken === "") {
                    navigate("/login");
                }
                navigate("/feed");
            } finally {
                setLoading(false);
            }
        };
        performRefresh();
    }, []);


    async function refreshToken() {
        let refresh = await fetch(`${constants.authApiV1}/refresh`, {
            method: 'POST',
            credentials: 'include',
        });
        let refreshResponse = await refresh.json();

        if(refresh.ok) {
            setAccessToken(refreshResponse.token)
        } else {
            return refresh;
        }

    }

    const value = {
        setAccessToken,
        sendRequest,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}