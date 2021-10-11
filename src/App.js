import React, { useState, useEffect } from 'react';
import questionData from './data.json';
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  
  // useEffect(()=>{
  //   let data = questionData.data.questions.map((q)=>{return q});
  //   setMainList(data);
  // },[]);

  const [value,setValue] = useState("");
  const [fname,setFname] = useState("");
  const [yesList,setYesList] = useState([]);
  const [noList,setNoList] = useState([]);
  const [answerListed,setAnswerList] = useState(false);

  const handleChange = (event)=>{
    setValue(event.target.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setValue("");
    setFname(value);
  }

  const handleSecondSubmit = (e)=>{
    e.preventDefault();
    setAnswerList(true);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Name: <input type="text" value={value} onChange={handleChange} /></label>
        <input type="submit" value="Submit" />
      </form>
      <div className="nameDisplay">
        {fname && `Hey ! ${fname}`}
      </div>
      <div className="questionDisplay">
        <form onSubmit={handleSecondSubmit}>
          {
            questionData.data.questions.map((ques)=>{
              return(
                <Card key={ques.id}>
                 <span> {ques.question}</span>
                 <div>
                  <Button variant="outline-success" onClick={(e)=>{
                    let yessList = [];
                    yessList.push(ques.question);
                    setYesList([...yesList,...yessList]);
                  }} value="yes">Yes</Button>
                  <Button variant="outline-danger" onClick={(e)=>{
                    let nosList = [];
                    nosList.push(ques.question);
                    setNoList([...noList,...nosList]);
                  }} value="no">No</Button>
                </div> 
                </Card>)
            })
          }
          <input type="submit" value="Submit" />
          <button value="reset" onClick={()=>{window.location.reload()}}>Reset</button>
        </form>  
      </div> 
      <div className="listDisplay">
        {answerListed &&(`Yes Answer Listed :${yesList}-----------------
                          No Answer Listed :${noList}`)}
      </div>  
    </div>
  );
}

export default App;
