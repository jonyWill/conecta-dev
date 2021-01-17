const BASEAPI = 'http://localhost:8080';
const api ={

  postAll: async(endpoint)=>{
    const res = await fetch(BASEAPI + endpoint);
    const json = await  res.json();
    return json.resposta;
  },
  plusLike: async(id)=>{
  const array = {id};
 
    const res = await fetch(`${BASEAPI}/plusLike`,{
      method: 'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(array)
    });

    const json = await res.json();
    console.log(json);
    return json.resposta;
  }

}

export default ()=>api;