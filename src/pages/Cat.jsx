import React from 'react'
import { useEffect,useState } from 'react'

function Dogid() {

  const url = "https://dog.ceo/api/breeds/image/random"

  const [dogdata, setdogdata] = useState('null');

  const  getdogdata = async() => {
    const response = await fetch(url);
    const data = await response.json();
    setdogdata(data);
  }

  useEffect(() => {
    getdogdata();
  }, []);
   
  const loaded = () => {
    return (
      <div>
        <h1>
          Reload for a new Dog..
        </h1>
        <img src ={dogdata.message} alt="Dog CImage can not displayed"></img>
        <h2>{dogdata.status}</h2>
      </div>
    );
  };
  
  const loading = () => {
    return <h1>Loading...</h1>;
  };
  
  return dogdata && dogdata.status ? loaded() : loading();

}

export default Dogid