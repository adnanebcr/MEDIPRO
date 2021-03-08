import { useSelector } from 'react-redux'
import React, {  useEffect } from 'react'
import TopProducts from '../Components/topProducts'
import NewProducts from '../Components/newProducts'

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
               <TopProducts/>
        <NewProducts/>
        </div>
    )
}

export default FirstPage
