
import { useState,useEffect } from 'react';
const ButtonMitHook = () => {
    const [zahl1,setzahl1]=useState(0)
    const [zahl2,setzahl2]=useState(0)
    useEffect(()=>{
        console.log(`Etwas auf der seite passiert!`)
    })
    useEffect(()=>{
        console.log(`Seite  wurde geladen!`)
    },[])


    useEffect(()=>{
 console.log(`Du hast ${zahl1} auf dem Button1 geklickt `);
    },[zahl1])
    return (
        <div className="ButtonMitHook">
            <p>Du hast {zahl1} mal auf dem Button1 geklickt!</p>
            <button onClick={()=>setzahl1(zahl1 +1)}>Button1</button>
            <p>Du hast {zahl2} mal auf dem Button2 geklickt!</p>
       <button onClick={()=>setzahl2(zahl2 +1 )}>Button2</button>
        </div>
    )
}


export default ButtonMitHook