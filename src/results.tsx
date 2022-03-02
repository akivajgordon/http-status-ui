import { Heading, List, ListItem, Stack } from './utils'
import { labelForStatus } from './status'
import { Finished, useGameState } from './game-state'

interface Player {
  id: string
  name: string
  score: number
  statuses: number[]
}

const Player: React.FC<{
  id: string
  name: string
  score: number
  statuses: number[]
}> = ({ name, statuses, score }) => {
  return (
    <div
      style={{
        padding: '1em',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <span>{name}</span>
        <br />
        <span className="typography mod-small mod-muted">
          Others voted:{' '}
          {statuses.map((status) => (
            <strong key={status}>{labelForStatus(status)}</strong>
          ))}
        </span>
      </div>
      <strong>{score}</strong>
    </div>
  )
}

interface Assignment {
  id: string
  name: string
  status: number
}

interface Winner extends Player {
  assignments: Assignment[]
}

const Winner: React.FC<Winner> = ({
  id,
  name,
  score,
  statuses,
  assignments,
}) => {
  return (
    <Stack>
      <List>
        <div style={{ background: 'gold' }}>
          <Player id={id} name={name} score={score} statuses={statuses} />
        </div>
      </List>
      <div className="typography mod-small" style={{ padding: '0 1em' }}>
        <span>
          <strong>{name} assigned:</strong>
        </span>
        <table className="typography mod-muted">
          <tbody>
            {assignments.map((assignment) => (
              <tr key={assignment.id}>
                <td style={{ paddingRight: '1em' }}>{assignment.name}</td>
                <td>{labelForStatus(assignment.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Stack>
  )
}

export default () => {
  const { gameState } = useGameState<Finished>()

  const { winners, players } = gameState

  return (
    <Stack>
      <Heading>And the winner is...</Heading>
      {winners.map((winner) => (
        <Winner key={winner.id} {...winner} />
      ))}
      <List>
        {players.map((player) => (
          <ListItem key={player.id}>
            <Player {...player} />
          </ListItem>
        ))}
      </List>
    </Stack>
  )
}
