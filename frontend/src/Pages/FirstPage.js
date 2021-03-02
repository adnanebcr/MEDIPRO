import { useSelector } from 'react-redux'
import React, {  useEffect } from 'react'

const FirstPage = ({history}) => {

      const userLogin = useSelector((state) => state.userlogin)
  const { userInfo } = userLogin
useEffect(() => {
    if (!userInfo) {
      history.push('/Signin')
    }
  })
    return (
        <div>
            This is the first Page
        </div>
    )
}

export default FirstPage
