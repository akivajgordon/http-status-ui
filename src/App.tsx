import './App.css'
import Invite from './invite'
import CreateGame from './create-game'
import { PageWrap } from './utils'
import Lobby from './lobby'
import AssignRound from './assign-round'
import AssignRoundWait from './assign-round-wait'

function App() {
  return (
    <PageWrap>
      <AssignRoundWait />
      <AssignRound />
      <Lobby />
      <CreateGame />
      <Invite />
    </PageWrap>
  )
}

export default App
