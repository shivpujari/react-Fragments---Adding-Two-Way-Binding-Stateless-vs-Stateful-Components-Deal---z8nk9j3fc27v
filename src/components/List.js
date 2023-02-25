import React,{Fragment} from 'react';
import ListItems from './ListItems';

 const List = ({listx}) =>{
  return(
    // code here
   <Fragment>

   {listx.map((element,index)=>{
    return(
      

      <ListItems key={index} valuex={element} />
    )
   })}
      </Fragment>
    
    
  )
}

export default List;