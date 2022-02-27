import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

interface Player {
  id: string
  name: string
}

export enum GameStatus {
  Created = 'created',
  Round1 = 'round-1',
}

interface GameState {
  isHost: boolean
  playerId: string | null
  joinedPlayers: Player[]
  gameStatus: GameStatus
}

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>({
    isHost: false,
    playerId: null,
    joinedPlayers: [],
    gameStatus: GameStatus.Created,
  })
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  // useEffect(() => {
  //   fetchJSON({ url: backend(`/games/${id}`) }).then((s) => setGameState(s))
  // }, [id])
  useEffect(() => {
    setLoading(true)
    const ws = new WebSocket(`ws://localhost:3001/${id}`)

    ws.addEventListener('message', (e) => {
      console.log('data', e.data)
      setGameState(JSON.parse(e.data))
      setLoading(false)
    })

    return () => ws.close()
  }, [id])

  return { gameState, loading }
}
