import React from 'react'
const CustomInput = ({ lable,items, type, isRequired,order,isReadonly }) => {
    console.log("items",items)
    console.log("type",type)

    return (
        <>
        {type =="dropdown" ? 
        <>
        <lable>{lable}</lable>
        <select name={lable} id={lable}>
            {items.map((data,index)=>{
                return(<option value={data?.value}>{data?.text}</option>)
                
            })}
  
</select> 
</>:
<>
<h1></h1>
             <lable>{lable}</lable>
            <input type={type} isRequired={isRequired} isReadonly={isReadonly} order={order} />
            
            <h1></h1>
            </>
}
        </>
    )
}

export default CustomInput