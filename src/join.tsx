import { useEffect, useRef, useState } from 'react'
import { Stack, Heading, Paragraph, Button, Input, Centered } from './utils'

const HOST = 'Akiva'

export default () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [name, setName] = useState('')

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [inputRef.current])

  return (
    <Stack>
      <Stack size="small">
        <Heading>HTTP Status</Heading>
        <Paragraph>A nerdy party game.</Paragraph>
        <Paragraph>
          Your host, <strong>{HOST}</strong>, invited you to this game.
        </Paragraph>
      </Stack>
      <Centered>
        <form style={{ maxWidth: '35ch', width: '100%' }}>
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
