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
  type Props = {
    data: User
  }

function UserCard(props:Props) {
  return (
    <div style={{border:'1px black solid', borderRadius:'3px', margin:'5px'}}>{`name: ${props.data.name} email: ${props.data.email}`}</div>
  )
}

export default UserCard