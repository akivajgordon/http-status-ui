import { Button, Heading, List, ListItem, Paragraph, Stack } from './utils'
import { Status, statuses } from './status'
import Player from './player-selection'
import { Round2, useGameState } from './game-state'
import { useState } from 'react'
import { postJSON } from './api'
import { useParams } from 'react-router-dom'
import VoteRoundWait from './vote-round-wait'

export default () => {
  const { id: gameId } = useParams()
  const { gameState } = useGameState<Round2>()
  const opponents = gameState.opponents

  type PlayerId = typeof gameState.opponents[number]['id']
  type StatusCode = Status['id']

  const [votes, setVotes] = useState<Record<PlayerId, StatusCode | null>>({})

  const isDone = opponents.every((p) => votes[p.id])

  const onChangePlayerAssignment =
    (playerId: PlayerId) => (statusCode: StatusCode) => {
      setVotes({ ...votes, [playerId]: statusCode })
    }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await postJSON(`/votes/${gameId}`, { votes })
  }

  if (gameState.completed) return <VoteRoundWait />

  return (
    <Stack>
      <Heading>Round 2</Heading>
      <Paragraph>
        Now, vote on what you think is the best status for each player based on
        the list of statuses that others chose from the previous round.
      </Paragraph>
      <Paragraph>
        <strong>
          You'll get a point for each one where your vote matches the most
          popular vote
        </strong>
        , so you may not want to vote for the same statuses that you chose
        earlier.
      </Paragraph>
      <Paragraph>
        Want more detail? See{' '}
        <a href="http://httpstatuses.com/" target="_blank">
          https://httpstatuses.com
        </a>
      </Paragraph>
      <List>
        {opponents.map((opponent) => (
          <ListItem key={opponent.id}>
            <Player
              {...opponent}
              statuses={statuses.filter((s) => opponent.options.includes(s.id))}
              value={votes[opponent.id]}
              onChange={onChangePlayerAssignment(opponent.id)}
            />
          </ListItem>
        ))}
      </List>
      {isDone && (
        <form onSubmit={onSubmit}>
          <Button label="Done" />
        </form>
      )}
    </Stack>
  )
}
