import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_HOST, WS_HOST } from './config'

interface Player {
  id: string
  name: string
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
  host: string
}

type StatusCode = number

export interface Round2 extends GameState {
  opponents: (Player & { completed: boolean; options: StatusCode[] })[]
  completed: boolean
}

export interface Round1 extends GameState {
  opponents: (Player & { completed: boolean })[]
  completed: boolean
}

interface PlayerResult extends Player {
  score: number
  statuses: StatusCode[]
}

export interface Finished extends GameState {
  players: PlayerResult[]
  winners: (PlayerResult & {
    assignments: {
      id: Player['id']
      name: Player['name']
      status: StatusCode
    }[]
  })[]
}

export const useGameState = <
  T extends Round1 | Round2 | Finished | GameState = GameState
>() => {
  const [gameState, setGameState] = useState<T>({
    isHost: false,
    joined: false,
    players: [],
    gameStatus: GameStatus.Created,
    opponents: [],
    winners: [],
  } as unknown as T)
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    const ws = new WebSocket(`${WS_HOST}/${id}`)

    ws.addEventListener('message', (e) => {
      console.log('data', e.data)
      setGameState(JSON.parse(e.data))
      setLoading(false)
    })

    return () => ws.close()
  }, [id])

  return { gameState, loading }
}
