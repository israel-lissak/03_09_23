import { useRef } from "react"

interface User {
    id: number
    name: string
    email: string
}
interface Props {
    users: User[]
}

function Users(props:Props) {


    
    function addNewUser():void {
        
    }

  return (
  <>
    {props.users.map((user,index) => {
        return <p>{`user ${index + 1}:
        name: ${user.name}
        id: ${user.id}
        email: ${user.email}`}</p>
    })}
    
    <input type="text" placeholder="name"/>
    <input type="text" placeholder="email"/>
    <button onClick={addNewUser}>add user</button>
  </>
    
  )
}

export default Users