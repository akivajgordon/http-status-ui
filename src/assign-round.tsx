import { Button, Heading, List, ListItem, Paragraph, Stack } from './utils'
import { statuses, Status } from './status'
import { Round1, useGameState } from './game-state'
import Player from './player-selection'
import { useState } from 'react'

export default () => {
  const { gameState } = useGameState<Round1>()
  type PlayerId = typeof gameState.opponents[number]['id']
  type StatusCode = Status['id']

  const [assignments, setAssignments] = useState<
    Record<PlayerId, StatusCode | null>
  >({})

  const opponents = gameState.opponents

  const isDone = opponents.every((p) => assignments[p.id])

  const onChangePlayerAssignment =
    (playerId: PlayerId) => (statusCode: StatusCode) => {
      setAssignments({ ...assignments, [playerId]: statusCode })
    }

  return (
    <Stack>
      <Heading>Round 1</Heading>
      <Paragraph>Describe your friends with an HTTP status.</Paragraph>
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
              statuses={statuses}
              value={assignments[opponent.id]}
              onChange={onChangePlayerAssignment(opponent.id)}
            />
          </ListItem>
        ))}
      </List>
      {isDone && <Button label="Done" />}
    </Stack>
  )
}
