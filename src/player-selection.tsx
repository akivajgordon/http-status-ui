import { Select } from './utils'
import { labelForStatus, Status } from './status'

const Player: React.FC<{
  id: string
  name: string
  completed: boolean
  statuses: Status[]
  value: Status['id'] | null
  onChange: (statusCode: Status['id']) => void
}> = ({ name, completed, statuses, value, onChange }) => {
  return (
    <div
      style={{
        padding: '1em',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <span
          style={{
            width: '50px',
            marginRight: '1em',
            color: '#61D836',
            fontWeight: 'bold',
          }}
        >
          {completed && '✓'}
        </span>
        <span>{name}</span>
      </div>
      <div style={{ maxWidth: '22ch' }}>
        <Select
          instructions="Choose status"
          options={statuses.map((s) => ({
            id: s.id,
            label: labelForStatus(s.id),
          }))}
          value={value}
          onChange={(v) => {
            onChange(Number(v))
          }}
        />
      </div>
    </div>
  )
}

export default Player
