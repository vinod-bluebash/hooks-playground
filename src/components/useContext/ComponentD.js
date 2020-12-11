import React, {useContext} from 'react'
import { UserContext, UserEmail } from '../../App'

function ComponentD() {
  const userName = useContext(UserContext)
  const userEmail = useContext(UserEmail)

  // return (
  //   <div>
  //     <UserContext.Consumer>
  //       {
  //         user => {
  //           return (
  //             <div>UserContext - {user}</div>
  //           )
  //         }
  //       }
  //     </UserContext.Consumer>
  //   </div>
  // )

  // return (
  //   <div>
  //     <UserContext.Consumer>
  //       {
  //         user => {
  //           return (
  //             <UserEmail.Consumer>
  //               {
  //                 email => {
  //                   return (
  //                     <div>UserContext - {user}, UserEmail - {email}</div>
  //                   )
  //                 }
  //               }
  //             </UserEmail.Consumer>
  //           )
  //         }
  //       }
  //     </UserContext.Consumer>
  //   </div>
  // )

  return (
    <div>
      UserContext - {userName}, UserEmail - {userEmail}
    </div>
  )
}

export default ComponentD
