import { Button, Heading, Paragraph, Stack } from './utils'

export default () => {
  return (
    <Stack>
      <Heading>Hang tight...</Heading>
      <Paragraph>
        We're waiting for <s>the slackers</s> everyone else to finish up Round
        1.
      </Paragraph>
      <Paragraph>Need another beer already? No judging here...</Paragraph>
      <Paragraph>
        If you need to go back and make a change, now would be a good time.
      </Paragraph>

      <Button style="secondary" label="I need to make a change" />
    </Stack>
  )
}
