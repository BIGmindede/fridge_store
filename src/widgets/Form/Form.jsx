import React from 'react'
import cls from './Form.module.css'
import { useState } from 'react'
import { useEffect } from 'react'

const Form = ({fields, title, action}) => {

  const [inputData, setInputData] = useState({}) 

  useEffect(() => {
    Object.keys(fields).forEach(key => {
      setInputData(prevData => ({...prevData, [key]: ""}))
    })
  }, [])

  return (
    <form className={cls.form}>
      <h1>{title}</h1>
      <hr />
      <div className={cls.fields}>
        {Object.keys(fields).map(key => 
          <input type={fields[key].type} placeholder={fields[key].placeholder}
            onChange={(e) => {setInputData({...inputData, [key]: event.target.value})}}
            value={inputData[key]}
          ></input>
          )}
      </div>
      <hr />
      <button onClick={() => {action(inputData)}}>{title}</button>    
    </form>
  )
}

export default Form