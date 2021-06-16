import React, { useState } from 'react';
import "./Login.css";

const Login = () =>{
     let [inputText,setInputText] = useState("");
     let [inputPass,setInputPass] = useState("");
     let [val,setVal] = useState(false);
     
     let [c1,setC1] = useState(false);
     let [c2,setC2] = useState(false); 


     const usernam = "user";
     const pass = "pass@123";

     
        const [widgets, setWidget] = useState({
          results:[{"id":1,"first_name":"Sherri","last_name":"Roomes","Phone Num":"520-352-2004","email":"sroomes0@cam.ac.uk","gender":"Non-binary"},
          {"id":2,"first_name":"Jaimie","last_name":"Al Hirsi","Phone Num":"466-441-8488","email":"jalhirsi1@stumbleupon.com","gender":"Genderfluid"},
          {"id":3,"first_name":"Ingaberg","last_name":"Shipcott","Phone Num":"933-948-6457","email":"ishipcott2@apache.org","gender":"Genderfluid"},
          {"id":4,"first_name":"Ulrikaumeko","last_name":"Ilyasov","Phone Num":"438-970-8394","email":"uilyasov3@ed.gov","gender":"Female"},
          {"id":5,"first_name":"Cosette","last_name":"Yakob","Phone Num":"509-666-2123","email":"cyakob4@livejournal.com","gender":"Agender"},
          {"id":6,"first_name":"Luise","last_name":"Bartali","Phone Num":"843-766-9653","email":"lbartali5@si.edu","gender":"Bigender"},
          {"id":7,"first_name":"Alberik","last_name":"Rathjen","Phone Num":"247-921-3040","email":"arathjen6@fda.gov","gender":"Genderqueer"},
          {"id":8,"first_name":"Britney","last_name":"Sabattier","Phone Num":"441-195-9950","email":"bsabattier7@vinaora.com","gender":"Bigender"},
          {"id":9,"first_name":"Corabella","last_name":"Link","Phone Num":"714-961-6694","email":"clink8@wikispaces.com","gender":"Polygender"},
          {"id":10,"first_name":"Rheta","last_name":"Jerams","Phone Num":"223-163-7259","email":"rjerams9@squarespace.com","gender":"Genderfluid"}]});
       
    const ItemWidget = (props) => {
        const { id,fname,lname,num,email,gender } = props;
        return (
          <tr>
              <td>{id}</td>
              <td>{fname}</td>
              <td>{lname}</td>
              <td>{num}</td>
              <td>{email}</td>
              <td>{gender}</td>
          </tr>
        );
      };
    const renderItems = (items) => {
        return (
          <>
            { 
                items.map((item) => {
                    return (
                    <ItemWidget
                    id={item["id"]}
                    fname={item["first_name"]}
                    lname={item["last_name"]}
                    num={item["Phone Num"]}
                    email={item["email"]}
                    gender={item["gender"]}
                  />
                    )})
            }
          </>
        );
      };
   

     
     const handleTextChange=(e)=>{
         setInputText(e.target.value);
         
           if(e.target.value === usernam){
               setC1(true)
           }
        
           console.log(c1);
         
         console.log(inputText);
         console.log(e.target.value);
     }

     const handlePassChange=(e)=>{
        setInputPass(e.target.value);
        
            if(e.target.value===pass){
                setC2(true);
            }
         
        
       
        console.log(c2);
        console.log(inputPass);
        console.log(e.target.value);
    }

    
 let click=()=>{
    // console.log(c1,c2);
    if(inputPass!=="" || inputText!==""){
    if(c1===true && c2===true){
        setVal(true);
    }else{
        alert("wrong username or password");
       
    }
    setInputPass("");
    setInputText("");
}
    // console.log(c1,c2);

 }
    

    return (
        <>
        <div className="login">
            <div className='input-field'>
                <h4>Username : </h4>
                <input type ="text" value = {inputText} onChange = {handleTextChange} />
            </div>
            <div className='pass-field'>
                <h4>Password : </h4>
                <input type ="password" value = {inputPass} onChange = {handlePassChange} />
            </div>
            <button className="btn1" onClick={click}>Submit</button>
        </div>


        {
            val?(
                <>
                <table className="tab">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone No</th>
                        <th>Email</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                { renderItems(widgets.results)}
                </tbody>
            </table>
            <button onClick={()=>{
                setVal(false)
                setC1(false)
                setC2(false)}} className="btn2">Back</button>
            </>
            ):""
        }
        </>
    )

}

export default Login;