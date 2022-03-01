import { Button, Heading, List, ListItem, Paragraph, Stack } from './utils'
import { statuses } from './status'
import Player from './player-selection'

const opponents = [
  { id: '13t3ito', name: 'Akiva', completed: true },
  { id: '1p3itjo', name: 'Joe', completed: false },
  { id: 'alkjszi', name: 'Dan', completed: true },
  { id: 'joivkml', name: 'Adrienne', completed: true },
]

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
            <Player
              {...opponent}
              statuses={statuses}
              value={null}
              onChange={(v) => {}}
            />
          </ListItem>
        ))}
      </List>
      <Button label="Done" />
    </Stack>
  )
}
