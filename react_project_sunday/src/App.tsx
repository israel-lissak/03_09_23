import './App.css'
import Counter from './Counter'
import StyleChanger from './StyleChanger'
import Users from './Users'
import UsersFromServer from './UsersFromServer'



function App() {

  const users = [
    { id: 1, name: "שם 1", email: "user1@example.com" },
    { id: 2, name: "שם 2", email: "user2@example.com" },
    { id: 3, name: "שם 3", email: "user3@example.com" },
    { id: 4, name: "שם 4", email: "user4@example.com" },
    { id: 5, name: "שם 5", email: "user5@example.com" },
];

  return (
    <>
{/*       
      <Counter/>

      <StyleChanger/>

      <Users users={users}/> */}

      <UsersFromServer/>

    </>
  )
}

export default App
