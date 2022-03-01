import { useRef, useState } from 'react'
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
const SHARE_LABEL = 'Copy shareable link to clipboard'

export default () => {
  const { id } = useParams()
  const { gameState } = useGameState()
  const { players: joinedPlayers } = gameState
  const [shareButtonText, setShareButtonText] = useState(SHARE_LABEL)
  const shareButtonTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await postJSON(`/start/${id}`, {})
  }

  const onShareClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (shareButtonTimeoutRef.current) {
      clearTimeout(shareButtonTimeoutRef.current)
    }

    // navigator.share({ url: window.location.href })
    navigator.clipboard.writeText(window.location.href).then(() => {
      setShareButtonText('✓ Copied')
      shareButtonTimeoutRef.current = setTimeout(() => {
        setShareButtonText(SHARE_LABEL)
      }, 3 * 1000)
    })
  }

  return (
    <Stack>
      <Stack size="small">
        <Heading>Invite your friends</Heading>
        <Paragraph>You do have friends, right?</Paragraph>
        <Centered>
          <IconButton
            style={joinedPlayers.length ? 'secondary' : 'primary'}
            icon={SHARE_ICON}
            label={shareButtonText}
            onClick={onShareClick}
          />
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
        {joinedPlayers.length > 0 && (
          <Centered>
            <form onSubmit={onSubmit}>
              <Button type="submit" label="Everyone's here, let's go!" />
            </form>
          </Centered>
        )}
      </Stack>
    </Stack>
  )
}
