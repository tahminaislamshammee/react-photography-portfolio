import { createContext, useEffect, useState } from "react";

export const CursorContext = createContext();

const CursorProvider = ({children}) => {
    // cursor position state
    const [cursorPos, setCursorPos] = useState({
        x: 0,
        y:0,
    });

    //cursor bg state
    const [cursorBG, setCursorBG] = useState('default');

    const mobileViewPortIsActive = window.innerWidth<768;
    useEffect(()=>{
        if(!mobileViewPortIsActive) {
            const move = (e) =>{
                setCursorPos({
                    x: e.clientX,
                    y: e.clientY
                });
            }
            window.addEventListener('mousemove',move);
            return()=> {
               window.removeEventListener('mousemove', move); 
            }
        } else {
            setCursorBG('none')
        }
        
    }, [])  

    console.log(cursorPos)

    const cursorVariants = {
        default: {
            x: cursorPos.x - 16,
            y: cursorPos.y - 16,
            backgroundColor: '#0e1112'
        },
        text: {
            width: '100px',
            height: '100px',
            x: cursorPos.x - 72,
            y: cursorPos.y - 72,
            backgroundColor: '#fff',
            mixBlendMode: 'difference'
        },
        none : {
            width: 0,
            height: 0,
            backgroundColor: 'rgba(255,255,255,1)'
        }
    }

    //mouse enter handler
    const mouseEnterHandler = ()=> {
        setCursorBG('text')
    }

    //mouse remove handler
    const mouseRemoveHandler = ()=> {
        setCursorBG('default')
    }
    return ( 
        <CursorContext.Provider value={{cursorVariants, cursorBG, mouseEnterHandler, mouseRemoveHandler}}>
            {children}
        </CursorContext.Provider>
     );
}
 
export default CursorProvider; 