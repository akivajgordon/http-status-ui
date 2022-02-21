import './App.css'
import Invite from './invite'
import CreateGame from './create-game'
import { PageWrap } from './utils'
import Lobby from './lobby'
import AssignRound from './assign-round'

function App() {
  return (
    <PageWrap>
      <AssignRound />
      <Lobby />
      <CreateGame />
      <Invite />
    </PageWrap>
  )
}

export default App
