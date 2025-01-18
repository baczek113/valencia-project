import { WineErrorHandlingIF, WineIF, CredentialsErrorIF, CredentialsIF } from "../interfaces";

const verifyCredentials = (type: string, value: string): CredentialsErrorIF => {
  switch (type) {
    case "login":
      if (!(value.indexOf(" ") >= 0)) {
        if (value.length > 5 && value.length < 15) {
          return { error: false, message: "" };
        }
      } else {
        return { error: true, message: "There is an error in Your login" };
      }
      return { error: true, message: "The login length is incorrect" };

    case "password":
      return { error: false, message: "" };

    default:
      return { error: true, message: "" };
  }
};


const authenticateUser = async (credentials: CredentialsIF) : Promise<any> => {


  try{
  let request = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: credentials.login,
      password: credentials.password,
    })
  })
  .then(res => res.json());

  let response = await request;

  return response;
}
catch{
  return "An error has occured"
}
  
}

const requestWine = async (type : string) : Promise<WineErrorHandlingIF> => { 

    try {
      const resp = await fetch('https://api.sampleapis.com/wines/'+type);
      const json = await resp.json();
      return {winesList: json, error: false, errorMessage: ""};
    } catch (err) {
      return {winesList: [], error: true, errorMessage: err};
    }
}

const requestSingleWine = async (type : string, id : number) : Promise<WineIF | any> => { 

  try {
    const resp = await fetch('https://api.sampleapis.com/wines/'+type+"/"+id);
    const json = await resp.json();
    return json;
  } catch (err) {
    return err;
  }
}
const globalFunctions = {
  verifyCredentials,
  authenticateUser,
  requestWine,
  requestSingleWine
}

export default globalFunctions;
