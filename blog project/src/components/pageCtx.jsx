import { createContext,useState } from "react";
const {hi,h2} = {hi:"hi",h2:"hi"}

export const pgContxt = createContext();
function PageCtx(props){
    const [state, setState] = useState(0);

    return <pgContxt.Provider value={{state,setState}}></pgContxt.Provider>
}

export default PageCtx;