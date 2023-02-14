import { useContext } from "react";
import { AuthContext } from "../contexts/auth-context";

export const useAuth=()=>{
    const {
        token,setToken,data,setData,faculties,setFaculties,
        score1, setScore1,questions, setQuestions,blok1,setBlok1,
        blok2s,setBlok2,selectedfac,setSelectedfac,univerId,setUniverId,
        sciences,setSciences,score2, setScore2,result,setResult
    }=useContext(AuthContext);
    
    
    return {
        token,setToken,data,setData,faculties,setFaculties,
        blok1,setBlok1,score1, setScore1,questions, setQuestions,
        blok2s,setBlok2,selectedfac,setSelectedfac,univerId,setUniverId,
        sciences,setSciences,score2, setScore2,result,setResult
    };
}