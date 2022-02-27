import { useParams } from 'react-router-dom'
import { postJSON } from './api'
import { useGameState } from './game-state'
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

export default () => {
  const { id } = useParams()
  const { gameState } = useGameState()
  const { joinedPlayers } = gameState

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await postJSON(`/start/${id}`, {})
  }

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
          <form onSubmit={onSubmit}>
            <Button type="submit" label="Everyone's here, let's go!" />
          </form>
        </Centered>
      </Stack>
    </Stack>
  )
}
