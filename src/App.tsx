import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CreateGame from './create-game'
import JoinGame from './join'
import { PageWrap } from './utils'
import Lobby from './lobby'
import AssignRound from './assign-round'
import AssignRoundWait from './assign-round-wait'
import VoteRound from './vote-round'
import VoteRoundWait from './vote-round-wait'
import Results from './results'
import Game from './game'

function App() {
  return (
    <div style={{ margin: '3rem auto', fontSize: '1em' }}>
      <PageWrap>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CreateGame />} />
            <Route path="/:id" element={<Game />} />
          </Routes>
        </BrowserRouter>
        {/* <JoinGame /> */}
        {/* <CreateGame onGameCreated={(/> */}
        {/* <Results /> */}
        {/* <VoteRoundWait /> */}
        {/* <VoteRound /> */}
        {/* <AssignRoundWait /> */}
        {/* <AssignRound /> */}
        {/* <Lobby /> */}
        {/* <Invite /> */}
      </PageWrap>
    </div>
  )
}

export default App
