import Invite from './invite'
import Join from './join'
import { useGameState, GameStatus } from './game-state'
import Lobby from './lobby'
import AssignRound from './assign-round'
import VoteRound from './vote-round'
import Results from './results'

export default () => {
  const { gameState, loading } = useGameState()

  if (loading) {
    return <span>Loading...</span>
  }

  if (gameState.gameStatus === GameStatus.Finished) {
    return <Results />
  }

  if (gameState.gameStatus === GameStatus.Round2) {
    return <VoteRound />
  }

  if (gameState.gameStatus === GameStatus.Round1) {
    return <AssignRound />
  }

  if (gameState.gameStatus === GameStatus.Created) {
    if (gameState.isHost) {
      return <Invite />
    }

    if (gameState.joined) {
      return <Lobby />
    }

    return <Join />
  }

  return <div>Something is wrong</div>
}
