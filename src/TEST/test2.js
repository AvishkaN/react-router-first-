import React,{forwardRef} from 'react'


const test2=React.forwardRef((ref,prop)=>{
    console.log(ref.inputref);
        return (
            <input type="text" ref={ref.inputref}/>
        )
});

export default test2


