import React from 'react'


const Products = ({data}) => {
  return (
   
    <div className='row mt-5'>
        {data.map((item,index)=>
        <div  className='col-md-3' key={index} >
          <div className='card' style={{"width":"16rem"}}>
             <img className="card-img-top"  src={item.recipe.image} alt="Card image cap"/>
             <div className="card-body bg-dark text-white">
                <center>
    <h4  className="card-title">{item.recipe.label}</h4>
    <p className="card-text mt-3" >
    CALORIES:{ Math.round(item.recipe.calories)}
    </p>
    <button type="button" class="btn btn-success" >Success</button>
    </center>
  </div>
</div>
</div>       
)}
            <br/>

</div>  

   
  )
}

export default Products