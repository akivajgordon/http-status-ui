import { Heading, List, ListItem, Stack } from './utils'
import { labelForStatus } from './status'

interface Player {
  id: string
  name: string
  score: number
  status: number
}

const players: Player[] = [
  { id: '13t3ito', name: 'Akiva', score: 6, status: 401 },
  { id: '1p3itjo', name: 'Joe', score: 5, status: 303 },
  { id: 'alkjszi', name: 'Dan', score: 3, status: 502 },
  { id: 'joivkml', name: 'Adrienne', score: 2, status: 504 },
]

const Player: React.FC<{
  id: string
  name: string
  score: number
  status: number
}> = ({ name, status, score }) => {
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
          Others voted: <strong>{labelForStatus(status)}</strong>
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

const winners: Winner[] = [
  {
    id: 'lkmweaq',
    name: 'Matt',
    score: 7,
    status: 200,
    assignments: [
      { id: '1iwejoiw', name: 'Mary Anne', status: 401 },
      { id: 'oijlsqq', name: 'Roger', status: 501 },
      { id: 'oiwejoiw', name: 'Joe', status: 301 },
      { id: 'oixlsqq', name: 'Andrei', status: 101 },
    ],
  },
  {
    id: '39hunoj',
    name: 'Michael',
    score: 7,
    status: 201,
    assignments: [
      { id: 'oilejoiw', name: 'Mary Anne', status: 301 },
      { id: 'oijlsqq', name: 'Roger', status: 101 },
      { id: 'oiwejoiw', name: 'Joe', status: 304 },
      { id: 'oijpsqq', name: 'Andrei', status: 201 },
    ],
  },
]

const Winner: React.FC<Winner> = ({ id, name, score, status, assignments }) => {
  return (
    <Stack>
      <List>
        <div style={{ background: 'gold' }}>
          <Player id={id} name={name} score={score} status={status} />
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
