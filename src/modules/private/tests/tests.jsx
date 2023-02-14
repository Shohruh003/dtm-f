import './tests.scss';
import { useEffect } from 'react';
import uuid from 'react-uuid';
import { useAuth } from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

export const Tests=()=>{
    const{questions,setQuestions}=useAuth()
    const{score1,setScore1}=useAuth()
    const{blok1}=useAuth()
    const{sciences}=useAuth()
  
    useEffect(()=>{
        fetch(`http://localhost:5000/question?fan=${blok1}`)
        .then (res=>res.json())
        .then (data=>setQuestions(data))
        .catch (err=>console.log(err));

    },[setQuestions,blok1]);


    const heading=sciences?.filter(scince=>{
        if(Number(blok1)===1){
           return scince.science==='Matematika'
        }
        if(Number(blok1)===2){
            return scince.science==='Fizika'
        }
        if(Number(blok1)===3){
            return scince.science==='Ingliz tili'
        }
        if(Number(blok1)===4){
            return scince.science==='Kimyo'
        }
        if(Number(blok1)===5){
            return scince.science==='Biologiya'
        }
        return true
    })

    
    const handleCheck = (e) => {
        e.preventDefault();

        questions.filter(question=>{
            if(question.ques_id===Number(e?.target?.id) && question?.correct_answer===e?.target?.value){
                e.target.style.color="#18a0fb";
                e.target.style.borderColor="#18A0FB";
                setScore1(score1 + 1);
            }else if(question.ques_id===Number(e?.target?.id) && question.correct_answer!==e?.target?.value){
                e.target.style.color="#FB2719";
            }
            return true
        })
    };

    

    return(
        <div className="tests">
            <div className="container tests__container">
                {heading?.map(title=>(
                    <h2 className="tests__heading" key={title.science_id}>{title.science}</h2>
                ))}
                {questions?.map(question=>(
                    <div className='tests__question' key={question.ques_id}>
                        <h2 className='tests__title' >{question.question}</h2>
                        <div className='tests__answers'>{question?.answers.map(answer=>(
                            <button key={uuid()} className='tests__btn' onClick={handleCheck} id={question.ques_id} value={answer}>{answer}</button>
                        ))}</div>
                        <span className='tests__line'></span>
                    </div>
                ))}
                <Link to='/tests2' className='tests__submit'>Yakunlash</Link>
            </div>
        </div>
    )
}