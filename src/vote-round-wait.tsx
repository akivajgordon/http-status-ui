import { Button, Heading, Paragraph, Stack } from './utils'

export default () => {
  return (
    <Stack>
      <Heading>Relax for a bit...</Heading>
      <Paragraph>
        Some others haven't finished voting yet. Feel free to shame them while
        you go grab another beer.
      </Paragraph>
      <Paragraph>
        If you need to go back and make a change, now would be a good time.
      </Paragraph>

      <Button style="secondary" label="I need to make a change" />
    </Stack>
  )
}
