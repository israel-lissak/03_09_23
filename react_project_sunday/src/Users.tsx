import { useRef, useState } from "react"
import {v4}  from "uuid"

interface User {
    id: string
    name: string
    email: string
}
interface Props {
    users: User[]
}

function Users(props:Props) {

    const [users, setUsers] = useState<User[]>(props.users);

    const nameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    
    function addNewUser():void {

      if (nameRef.current && emailRef.current){

        const newUser = {
          id: v4(),
          name: nameRef.current?.value,
          email: emailRef.current?.value
        }
  
        setUsers((prevUsers) => [...prevUsers, newUser]);

        nameRef.current.value = "";
        emailRef.current.value = "";

        console.log(props.users);
        
      }

    }

  return (
  <>
      {users.map((user,index) => {
        return <p>
                  {`user ${index + 1}:
                  name: ${user.name}
                  id: ${user.id}
                  email: ${user.email}`}
               </p>
    })}
    
    <input type="text" placeholder="name" ref={nameRef} />
    <input type="text" placeholder="email" ref={emailRef}/>
    <button onClick={addNewUser}>add user</button>
  </>
    
  )
}

export default Users