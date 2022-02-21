import './App.css'
import Invite from './invite'
import CreateGame from './create-game'
import { PageWrap } from './utils'
import Lobby from './lobby'

function App() {
  return (
    <PageWrap>
      <Lobby />
      <CreateGame />
      <Invite />
    </PageWrap>
  )
}

export default App
