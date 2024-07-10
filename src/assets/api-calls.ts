import { TodoInterface } from "../interfaces";

async function callTodos():Promise<any> {
    try{
        const response: any = (await fetch('https://jsonplaceholder.typicode.com/todos'));

        let data: TodoInterface[] = await response.json();
        
        return data;

    }
    catch{

    }
    
}

export default callTodos