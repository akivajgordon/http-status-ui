import {
  Stack,
  Heading,
  Paragraph,
  Centered,
  IconButton,
  List,
  ListItem,
  Button,
} from './utils'

const SHARE_ICON = 'share'

const joinedPlayers = [
  { id: '13t3ito', name: 'Akiva' },
  { id: '1p3itjo', name: 'Joe' },
  { id: 'alkjszi', name: 'Dan' },
  { id: 'joivkml', name: 'Adrienne' },
]

export default () => {
  return (
    <Stack>
      <Stack size="small">
        <Heading>Invite your friends</Heading>
        <Paragraph>You do have friends, right?</Paragraph>
        <Centered>
          <IconButton icon={SHARE_ICON} label="Share link" />
        </Centered>
        <List>
          {joinedPlayers.map((joinedPlayer) => {
            return (
              <ListItem key={joinedPlayer.id}>
                <div className="player-list-item">{joinedPlayer.name}</div>
              </ListItem>
            )
          })}
        </List>
        <Centered>
          <Button label="Everyone's here, let's go!" />
        </Centered>
      </Stack>
    </Stack>
  )
}
