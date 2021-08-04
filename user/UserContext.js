import React, {createContext, useEffect, useState} from 'react'
import { useRouter } from 'next/router'

export const UserContext = createContext({})

const restoreToken = () => document.cookie;
export const UserContextProvider = props => {
    const router = useRouter()
    const [token, setToken] = useState("")
    const [userId, setUserId] = useState("")
    
    const processLogin = ({ token, user = {}}) => {
      const { id } = user;
      if (id) setUserId(id)
      if (token) {
        setToken(token)
        document.cookie = token
        router.push("/")
      }      
    }
    const signUp = () => {
      console.log('onsingup')
    }
    useEffect(() => {
      const token = restoreToken();
      if (token) setToken(token);
      else router.push("/login")
    }, [])
  
    return (
      <UserContext.Provider
        value={{
          token,
          userId,
          processLogin,
          signUp
        }}
      >
        {props.children}
      </UserContext.Provider>
    )
  }
  