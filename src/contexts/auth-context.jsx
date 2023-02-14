import { createContext, useEffect, useState } from "react";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const localData=localStorage.getItem('token');
    const dataStorage=localStorage.getItem("data")
    const[data,setData]=useState(JSON.parse(dataStorage))
    const [token,setToken]=useState(JSON.parse(localData));
    const[faculties,setFaculties]=useState(null);
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);
    const [questions, setQuestions] = useState(null);
    const[blok1,setBlok1]=useState(null)
    const[blok2s,setBlok2]=useState(null)
    const[selectedfac,setSelectedfac]=useState(null)
    const [univerId,setUniverId]=useState(null)
    const[sciences,setSciences]=useState(null)
    const[result,setResult]=useState(null)

    useEffect(()=>{
        if(token){
            return localStorage.setItem('token', JSON.stringify(token));
        }
        return localStorage.removeItem('token');
    },[token])
    useEffect(()=>{
        if(data){
            return localStorage.setItem('data', JSON.stringify(data));
        }
        return localStorage.removeItem('data');
    },[data])
    return(
       <AuthContext.Provider value={{
        token,setToken,data,setData,faculties,setFaculties,blok1,setBlok1,
        selectedfac,setSelectedfac,score1, setScore1,questions, setQuestions,blok2s,setBlok2,univerId,setUniverId,
        sciences,setSciences,score2, setScore2,result,setResult
    }}>{children}</AuthContext.Provider>
    )
}