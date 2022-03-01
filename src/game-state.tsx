import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

interface Player {
  id: string
  name: string
  completed: boolean
}

export enum GameStatus {
  Created = 'created',
  Round1 = 'round-1',
  Round2 = 'round-2',
  Finished = 'finished',
}

interface GameState {
  isHost: boolean
  joined: boolean
  players: Player[]
  gameStatus: GameStatus
}

export interface Round1 extends GameState {
  opponents: Player[]
}

export const useGameState = <T extends Round1 | GameState = GameState>() => {
  const [gameState, setGameState] = useState<T>({
    isHost: false,
    joined: false,
    players: [],
    gameStatus: GameStatus.Created,
    opponents: [],
  } as unknown as T)
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
