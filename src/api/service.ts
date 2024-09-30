import axios from "axios";

export async function pix(body: any){
  return await axios.post('http://localhost:3000/pix', 
           { body }
      )
      .then(response => {
        console.log(response);
      })
      .catch( error => {
        console.error(error);
      });
}