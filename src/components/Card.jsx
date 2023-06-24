import React from 'react'

function Card({product}) {
    
  return (
    
       <div className="col-4">
         <div className="card p-5  m-4 border-0 bg-light" width="18rem">
            <div className="card-body text-center">
            <img src={product.image} className=' ' height="100px" alt="" />
                <h4 className='text-truncate text-info card-ttle'>{product.title}</h4>

                <p className='text-truncate text-black-50 card-text'>{product.description}</p>
            </div>
            <button className="btn btn-primary">Add to Card</button>
        </div>
       </div>
 
  )
}

export default Card
