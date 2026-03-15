import React, { useState } from 'react'

const useToggle = (defaultVal) => {
    const [value, setValue] = useState(defaultVal);

    function toggleValue(val){
        if(typeof val != 'boolean'){
            setValue(!value)
        }else{
	        console.log('else');
        }
    }
    return [value, toggleValue]
}

export default useToggle;
