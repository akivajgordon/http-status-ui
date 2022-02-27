import {
  Button,
  Heading,
  List,
  ListItem,
  Paragraph,
  Select,
  Stack,
} from './utils'
import { labelForStatus, statuses } from './status'
import { useGameState } from './game-state'

const Player: React.FC<{ id: string; name: string }> = ({ name }) => {
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
      <div style={{ maxWidth: '22ch' }}>
        <Select
          instructions="Choose status"
          options={statuses.map((s) => ({
            id: s.id,
            label: labelForStatus(s.id),
          }))}
        />
      </div>
    </div>
  )
}

export default () => {
  const { gameState } = useGameState()

  const opponents: { id: string; name: string }[] = []
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
            <Player {...opponent} />
          </ListItem>
        ))}
      </List>
      <Button label="Done" />
    </Stack>
  )
}
