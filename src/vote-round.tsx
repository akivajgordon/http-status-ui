import { Button, Heading, List, ListItem, Paragraph, Stack } from './utils'
import { statuses } from './status'

const opponents = [
  { id: '13t3ito', name: 'Akiva' },
  { id: '1p3itjo', name: 'Joe' },
  { id: 'alkjszi', name: 'Dan' },
  { id: 'joivkml', name: 'Adrienne' },
]

const Player: React.FC<{ id: string; name: string }> = ({ name }) => {
  return (
    <div
      style={{
        padding: '1em',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <span
          style={{
            width: '50px',
            marginRight: '1em',
            color: '#61D836',
            fontWeight: 'bold',
          }}
        >
          ✓
        </span>
        <span>{name}</span>
      </div>
      <select style={{ maxWidth: '30ch' }}>
        {statuses.map((status) => (
          <option
            key={status.id}
            value={status.id}
          >{`${status.id} – ${status.label}`}</option>
        ))}
      </select>
    </div>
  )
}

export default () => {
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
            <Player {...opponent} />
          </ListItem>
        ))}
      </List>
      <Button label="Done" />
    </Stack>
  )
}
