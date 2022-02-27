import Invite from './invite'
import Join from './join'
import { useGameState, GameStatus } from './game-state'
import Lobby from './lobby'
import AssignRound from './assign-round'

export default () => {
  const { gameState, loading } = useGameState()

  if (loading) {
    return <span>Loading...</span>
  }

  if (gameState.gameStatus === GameStatus.Round1) {
    return <AssignRound />
  }

  if (gameState.isHost) {
    return <Invite />
  }

  if (gameState.playerId) {
    return <Lobby />
  }

  return <Join />
}
