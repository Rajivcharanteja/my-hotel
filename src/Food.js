
import React,{useState}from 'react'
import Products from './Products';

const Food = () => {

    const[search,setSearch]=useState("");
    const[data,setData]=useState([]);
   
   const YOUR_APP_ID="0f8c50be";
    const YOUR_APP_KEY=" 62948ec98b021d24ce9136922795b211 ";
    const submitHandler= e =>{
        e.preventDefault();
     fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
         response =>response.json()
       ).then(data=>setData(data.hits))
  
    }
  return (
    <div>
        <center>
            <h1 className='m-5 text-success fw-lg'>SSG FIVE STAR HOTEL</h1>
            <form onSubmit={submitHandler}>
        <input type="text" value={search} onChange= {(e)=>setSearch(e.target.value)}placeholder='search' className='p-2 border-warning rounded-pill pe-5' /><br/>
        <button type="submit" className="btn btn-secondary mt-2" value="search">search</button>
        </form>
        {data.length>1 ? <Products data={data}/> :null}
        </center>
    </div>
  )
}

export default Food