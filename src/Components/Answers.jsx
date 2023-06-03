import { Question } from "./Question"
import { Choices } from "./Choices"
import { Button } from "./Button"
import { useEffect, useState } from "react"
import { decode } from "html-entities"
import Spinner from "./Spinner"
import { nanoid } from "nanoid"

export function Answers() {
    const myStyle = {borderBottom: "solid 1px #DBDEF0",
        marginBottom: "20px",
        padding: "0 0 10px",}
    const [quizquestions,setQuizquestions] = useState([])
    const [loading,setLoading] = useState(true)
    const [submit,setSubmit] = useState(false)
    const [score,setScore] = useState(0)
    const [again,setAgain] = useState(false)
    
    useEffect(() => {
       const t = setTimeout(() => {
            async function getquestions() {
                const fulldata = await fetch("https://opentdb.com/api.php?amount=5")
             const jsdata = await fulldata.json()
             const questionarray = jsdata.results.map((e) => {
                 return {
                     ...e,
                     question: decode(e.question)
                 }
             })
             const finalArray = mixanswers(questionarray)
             setQuizquestions(finalArray)
             setLoading(false)
         }
         getquestions()
        },);
        return () => clearTimeout(t);

},[again])

function mixanswers(arrayofquestion) {
    const finalresult = arrayofquestion.map((e)=>{
        const {correct_answer, incorrect_answers} = e
        const combineanswers = [...incorrect_answers, correct_answer]
        const combineanswersX = combineanswers.map((e)=> decode(e)) 
        const shuffleanswers = combineanswersX.sort(()=> Math.random() - .5)
        const correctanswerplace = shuffleanswers.findIndex((e)=> e === correct_answer)
        const shuffleanswersObj = shuffleanswers.map((e)=> {
            return  {
                firstAnswer: e,
                id: nanoid(),
                final: "none",
                isSelected: false,
                isOn: false,
            }
        })
        const final = {
            ...e,
            rightAnswer: correctanswerplace,
            id: nanoid(),
            allAnswers: shuffleanswersObj,
        }
        return final
    })
    return finalresult
}

function Selected(idt, idq) {
    setQuizquestions(

         (prev) => {
            const finalresult = prev.map((e)=>{
                const shuffleanswersObj = e.allAnswers.map((arry)=> {
                    return  e.id ===idq ? arry.id === idt ? {...arry, isSelected: !arry.isSelected} 
                    : {...arry, isSelected: false} : arry
                })
                const final = {
                    ...e,
                    allAnswers: shuffleanswersObj,
                }
                return final
            })
            return finalresult
        }
    )
        
}



function checkanswers() {
    if (!submit) {

        const final = quizquestions.map((e) => {
           const shuffleanswersObj = e.allAnswers.map((arry)=> {
                return   {...arry, isOn: !arry.isOn} 
            })
            const SelectedIndex = e.allAnswers.findIndex((a)=> a.isSelected)
            SelectedIndex !== e.rightAnswer ? shuffleanswersObj[SelectedIndex].final = "incorrect" : "noselected"
            shuffleanswersObj[e.rightAnswer].final = "correct"
            if (SelectedIndex === e.rightAnswer) {
                setScore((prev) => ++prev) 
            }
            const final = {
                ...e,
                allAnswers: shuffleanswersObj,
            }
            return final
            
        })
        setSubmit(true)
        setQuizquestions(final)
    }
}
function playAgain() {
    setSubmit(false)
    setScore(0)
    setLoading(true)
    setAgain((e)=> !e )
  }



    if (loading) {
        return <Spinner></Spinner>
    }
    return <div style={{padding: "30px 50px"}}>
        {quizquestions.map((e,i)=> {
        return <div key={e.id} style={myStyle}> <Question question={decode(e.question)} key={i} />
        <div className="answersCointaner">
        {e.allAnswers.map((a) => { 
        return <Choices key={a.id} answer={a.firstAnswer}  handleClick={()=> submit ? null : Selected(a.id,e.id)} isSelected={a.isSelected} isOn={a.isOn} final={a.final} /> 
        })}
        </div>
        </div>
        })} 
        <div style={submit ? {display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px"} : null}>
            {submit ? <p>You Scored {score}/5 correct answers</p> : null}
            {!submit ? 
            <Button text={"Check Answers"} handleClick={checkanswers} submit ={submit}/>:
            <Button text={"Play Again"} handleClick={playAgain} submit ={submit}/>
        }
        </div>
    </div>
}