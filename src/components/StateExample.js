import { Button } from "@mui/material";
import { useState, useEffect } from "react";

function StateExample(){
    const [count, setCount] = useState(0);

    useEffect(() =>{
      document.title = `You clicked ${count} times`;
    });

    return(
        <div className="stateExample">
           <Button onClick={() => setCount(count +1)}>Test</Button>
        </div>
    );
}

export default StateExample;