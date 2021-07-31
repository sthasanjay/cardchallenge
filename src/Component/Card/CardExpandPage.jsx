import React from 'react'

const CardExpandPage= ({data}) => {
    return (
      <>
      <hr/>
           
        <div className = "dataPage">
          <div>  
          <p>Height</p>
          <p>{data.height}</p>
          </div>
          <div>
          <p>Weight:</p>
          <p>{data.weight}</p>
          </div>
          <div>
          <p>{data.hand}</p>
          <p>{data.foot}</p>
          </div>
            
        </div>
        <hr></hr>
        <div className = 'secdiv'>
          <div>
            <h3>{data.goal}</h3>
             <p>{data.Goals}</p>
          </div>
          <div>
            <h3>{data.assist}</h3>
             <p>{data.Assists}</p>
          </div>
          <div>
            <h3>{data.app}</h3>
             <p>{data.Apps}</p>
          </div>
         
        </div>
        <hr></hr>
        </>
    )
}

export default CardExpandPage;
