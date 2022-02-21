import { Centered, Heading, Paragraph, Stack } from './utils'

export default () => {
  return (
    <Stack>
      <Heading>Waiting for the game to start...</Heading>
      <Paragraph>
        While the rest are joining, now's a good time to grab a beer.
      </Paragraph>
      <Centered>
        <p className="silhouette-icon">🍻</p>
      </Centered>
    </Stack>
  )
}
