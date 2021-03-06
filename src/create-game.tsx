import { useEffect, useRef, useState } from 'react'
import { Stack, Heading, Paragraph, Button, Input, Centered } from './utils'
import { postJSON } from './api'
import { useNavigate } from 'react-router-dom'

export default () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [hostName, setHostName] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [inputRef.current])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { gameId } = await postJSON('/create', { host: hostName })

    navigate(`/${gameId}`)
  }

  return (
    <Stack>
      <Stack size="small">
        <Heading>HTTP Status</Heading>
        <Paragraph>A nerdy party game.</Paragraph>
      </Stack>
      <Centered>
        <form style={{ maxWidth: '35ch', width: '100%' }} onSubmit={onSubmit}>
          <Stack>
            <div>
              <Input
                ref={inputRef}
                placeholder="Host name"
                value={hostName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setHostName(e.target.value)
                }
              />
            </div>
            <Button type="submit" label="Start a game" />
          </Stack>
        </form>
      </Centered>
    </Stack>
  )
}
