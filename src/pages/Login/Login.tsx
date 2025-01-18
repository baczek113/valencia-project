import CInput from "../../components/common/CInput/CInput";
import "./Login.css";
import { CredentialsIF } from "../../interfaces";
import { useContext, useEffect, useState } from "react";
import globalFunctions from "../../services/globalFunctions";
import { CredentialsErrorIF } from "../../interfaces";
import { UserToken } from "../../services/contexts";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [credentials, setCredentials] = useState<CredentialsIF>({
    login: "",
    password: "",
  });

  const [credentialsError, setCredentialsError] = useState<CredentialsErrorIF>({
    error: false,
    message: ""
  });

  const userToken = useContext(UserToken);

  const navigate = useNavigate();

  const checkCredentials = (e: React.ChangeEvent<HTMLInputElement>) => {
    let verification = globalFunctions.verifyCredentials(e.target.name, e.target.value);

    setCredentialsError({error: verification.error, message: verification.message});
  };

  const updateCredentials = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const logIn = async (): Promise<void> => {
    await globalFunctions.authenticateUser(credentials).then((res)=>{
        if(res.message)
        {
          setCredentialsError({error: true, message: res.message});
        }
        else
        {
          userToken.setter("token", res.token);
          navigate("/wines");
        }
    });

    
  };

  useEffect(()=>{
    if(userToken.token != "")
    {
      navigate("/")
    }
  }, []);

  return (
    <div className="login-page">
      <div className="login-form-container">
        <CInput
          type="text"
          name="login"
          placeholder="Enter login..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateCredentials(e)
          }
          onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
            checkCredentials(e)
          }
        />
        <CInput
          type="password"
          name="password"
          placeholder="Enter password..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateCredentials(e)
          }
          onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
            checkCredentials(e)
          }
        />
        <div className="error-message">{credentialsError.message}</div>
        <button
          className="login-button"
          onClick={() => {
            logIn();
          }}
        >
          LOG IN
        </button>
      </div>
    </div>
  );
};

export default Login;
