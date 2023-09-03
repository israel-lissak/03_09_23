import UserCard from './UserCard'
import {useState, useEffect} from 'react'

async function getData() {
    let data = await fetch('https://jsonplaceholder.typicode.com/users')
    data = await data.json()
    return data
}

const data = getData();

type User = {
    id: number
    name: string
    username: string
    email: string
    address: {
      street: string
      suite: string
      city: string
      zipcode: string
      geo: {
        lat: string
        lng: string
      }
    }
    phone: string
    website: string
    company: {
      name: string
      catchPhrase: string
      bs: string
    }
  };

function UsersFromServer() {

    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
            const fetchItems = async () => {
                const result = await getData();
                setUsers(result);
            }

            fetchItems();
    },[])
    
    
    return (
            <>
                {users.map((user) => {
                    return<UserCard data={user}/>
                })}


            </>
        )
}

export default UsersFromServer