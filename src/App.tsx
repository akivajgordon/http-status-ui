import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CreateGame from './create-game'
import { PageWrap } from './utils'
import Game from './game'

function App() {
  return (
    <div style={{ margin: '3rem auto', fontSize: '1em' }}>
      <PageWrap>
        <HashRouter>
          <Routes>
            <Route path="/" element={<CreateGame />} />
            <Route path="/:id" element={<Game />} />
          </Routes>
        </HashRouter>
      </PageWrap>
    </div>
  )
}

export default App
