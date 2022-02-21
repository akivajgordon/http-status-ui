import { useState } from 'react'
import { Stack, Heading, Paragraph, Button, Input, Centered } from './utils'

export default () => {
  const [hostName, setHostName] = useState('')

  return (
    <Stack>
      <Stack size="small">
        <Heading>HTTP Status</Heading>
        <Paragraph>A nerdy party game.</Paragraph>
      </Stack>
      <Centered>
        <form style={{ maxWidth: '35ch', width: '100%' }}>
          <Stack>
            <div>
              <Input
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
