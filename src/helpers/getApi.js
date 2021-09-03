import API from "./api";

export const getGuns = async()=>{
    try {
        const res = await API.get('/api/gun/list');
        console.log("Users Backend ===>", res)
        const returnedData = res.data;
        return returnedData;
      } 
    catch (error) {
        console.log('There was an error', error);
        return error;
      }
}

export const getGuards = async()=>{
    try {
        const res = await API.get('/api/guard/list');
        console.log("Users Backend ===>", res)
        const returnedData = res.data;
        return returnedData;
      } 
    catch (error) {
        console.log('There was an error', error);
        return error;
      }
}
