import './App.css'
import Invite from './invite'
import CreateGame from './create-game'
import { PageWrap } from './utils'
import Lobby from './lobby'
import AssignRound from './assign-round'
import AssignRoundWait from './assign-round-wait'
import VoteRound from './vote-round'
import VoteRoundWait from './vote-round-wait'
import Results from './results'

function App() {
  return (
    <div style={{ margin: '3rem auto', fontSize: '1em' }}>
      <PageWrap>
        <Results />
        <VoteRoundWait />
        <VoteRound />
        <AssignRoundWait />
        <AssignRound />
        <Lobby />
        <CreateGame />
        <Invite />
      </PageWrap>
    </div>
  )
}

export default App
