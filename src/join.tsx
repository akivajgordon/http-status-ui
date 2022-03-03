import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { postJSON } from './api'
import { useGameState } from './game-state'
import { Stack, Heading, Paragraph, Button, Input, Centered } from './utils'
import Lobby from './lobby'

const Join: React.FC<{ refreshData(): void }> = ({ refreshData }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const { id } = useParams()
  const { gameState } = useGameState()

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [inputRef.current])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)

    await postJSON(`/join/${id}`, { name })

    refreshData()
  }

  if (submitted) return <Lobby />

  return (
    <Stack>
      <Stack size="small">
        <Heading>HTTP Status</Heading>
        <Paragraph>A nerdy party game.</Paragraph>
        <Paragraph>
          Your host, <strong>{gameState.host}</strong>, invited you to this
          game.
        </Paragraph>
      </Stack>
      <Centered>
        <form style={{ maxWidth: '35ch', width: '100%' }} onSubmit={onSubmit}>
          <Stack>
            <div>
              <Input
                ref={inputRef}
                placeholder="Your name"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
              />
            </div>
            <Button type="submit" label="Join" />
          </Stack>
        </form>
      </Centered>
    </Stack>
  )
}

export default Join
