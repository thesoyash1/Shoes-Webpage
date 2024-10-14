import React, { useCallback, useState } from 'react';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const [input,setInput]=useState({
    uName :'',
    uEmail : ''
  });
  const [error,seterror]=useState({
    uName :'',
    uEmail:''
 } );

  const handleSubmit = (event) => {
    event.preventDefault();
    let newError={ uName : '', uEmail:'' };

    if(!input.uName || input.uName.length <=2 && input.uName.length <=15){
      newError.uName='Jhatu Naam Thik Se Bhr';
    }
    if(!input.uEmail || !/\S+@\S+\.\S+/.test(input.uEmail)){
      newError.uEmail='Jhatu Email Thik Se Bhr';
    }   

    seterror(newError);
    if(!newError.uName && !newError.uEmail){
      setInput({
        uName : '',
        uEmail : ''
      });
    }

  };

  const handleChange=useCallback((event)=>{
   const {name,value}=event.target;
      setInput((prevValue) =>({
        ...prevValue, 
        [name] : value,
  }));
    seterror((prevValue)=>({
      ...prevValue,
      [name] : '',
    }));
    },[]);


  return (
    <>
      <form className={styles.form} action="" method="" onSubmit={handleSubmit}>
        <h2 className={styles.head_login}> Login Page </h2>
        <div className={styles.all_data}>
          
          <label htmlFor="uname">Enter Your Name</label>
          <input 
            type="text" 
            id="uname"
            name="uName" 
            className={styles.uname} 
            value={input.uName} 
            onChange={handleChange}
            />
            {error.uName && <p className={styles.error}>{error.uName}</p>} 


          <label htmlFor="uemail">Enter Your Email</label>
          <input
            type="text"
            id="uemail" 
            name="uEmail" 
            className={styles.uemail}
            onChange={handleChange}
            value={input.uEmail}
            />
            {error.uEmail && <p className={styles.error}>{error.uEmail}</p>} 

            <p>opt pussy</p>
            
          <button type="submit" className={styles.login_btn}>Login NOW</button>
        </div>
      </form>
    </>
  );
}

export default LoginPage;

/**
 * var [example,setExample] = useState({
    text1:"",
    text2:"",
});

var handleChange = useCallback(
    (field, value) => {
      setExample({
        ...example,
        [field]: value,
      }),
        [example]
    });



<TextField
  label="text1"
  autoComplete="off"
  value={example.text1}
  onChange={(value) => handleChange("text1", value)}
/>                            
 */