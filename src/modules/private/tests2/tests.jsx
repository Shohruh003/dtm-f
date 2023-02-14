import './tests.scss';
import { useEffect } from 'react';
import uuid from 'react-uuid';
import { useAuth } from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const Tests2=()=>{
    const{questions, setQuestions}=useAuth()
    const{score1, data}=useAuth()
    const{score2, setScore2}=useAuth()
    const{blok2s}=useAuth()
    const{sciences, selectedfac}=useAuth()
    const navigate=useNavigate()
  
    useEffect(()=>{
        fetch(`http://localhost:5000/question?fan=${blok2s}`)
        .then (res=>res.json())
        .then (data=>setQuestions(data))
        .catch (err=>console.log(err));

    },[setQuestions,blok2s]);


    const heading=sciences?.filter(scince=>{
        if(Number(blok2s)===1){
           return scince.science==='Matematika'
        }
        if(Number(blok2s)===2){
            return scince.science==='Fizika'
        }
        if(Number(blok2s)===3){
            return scince.science==='Ingliz tili'
        }
        if(Number(blok2s)===4){
            return scince.science==='Kimyo'
        }
        if(Number(blok2s)===5){
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
                setScore2(score2 + 1);
            }else if(question.ques_id===Number(e?.target?.id) && question.correct_answer!==e?.target?.value){
                e.target.style.color="#FB2719";
            }
            return true
        })
    };

    const user_id=data.user_id

    const handlePost = async (evt) => {
        evt.preventDefault();
        localStorage.removeItem('test')

        const form={
            user_id:user_id,
            fac_id:selectedfac,
            blok1_score:score1,
            blok2_score:score2,
            total_score:(score1+score2)*6.2
        }

        const res = await fetch("http://localhost:5000/result", {
          method: 'POST',
          headers: {
          'Content-type': 'application/json',
        },
          body:JSON.stringify(form),
        });

        let data= await res.json();
        console.log(data);
        localStorage.setItem('test', JSON.stringify(data.data))

        navigate('/result')
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
                <button onClick={handlePost}  className='tests__submit'>Tekshirish</button>

            </div>
        </div>
    )
}