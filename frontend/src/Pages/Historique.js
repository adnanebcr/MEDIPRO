import { useSelector } from 'react-redux'
import React, {  useEffect } from 'react'

const Historique = ({history}) => {

      const userLogin = useSelector((state) => state.userlogin)
  const { userInfo } = userLogin
useEffect(() => {
    if (!userInfo) {
      history.push('/Signin')
    }
  })
    return (
        <div>
            Historique Commandes :
        </div>
    )
}

export default Historique
