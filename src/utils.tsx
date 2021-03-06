import React, { Key } from 'react'

export const Stack: React.FC<{ size?: 'small' }> = ({ size, children }) => {
  return <div className={`stack ${size ? `mod-${size}` : ''}`}>{children}</div>
}

export const PageWrap: React.FC<{}> = ({ children }) => {
  return <div className="page-wrap">{children}</div>
}

export const Heading: React.FC<{}> = ({ children }) => (
  <h1 className="heading">{children}</h1>
)

export const Paragraph: React.FC<{}> = ({ children }) => (
  <p className="paragraph">{children}</p>
)

export const Centered: React.FC<{}> = ({ children }) => {
  return <div className="centered">{children}</div>
}

export const IconButton: React.FC<{
  style: 'primary' | 'secondary'
  icon: string
  label: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}> = ({ label, style, onClick }) => {
  return (
    <button
      className={`button ${style ? `mod-${style}` : ''}`}
      onClick={onClick}
    >
      {/* <img src={`${share}#svgView(viewBox(10, 0, 32, 32))`} /> */}
      {label}
    </button>
  )
}

export const Input = React.forwardRef<
  HTMLInputElement,
  React.HTMLProps<HTMLInputElement>
>((props, ref) => {
  return <input ref={ref} className="input" {...props} />
})

export const List: React.FC<{}> = ({ children }) => {
  return <ul className="list">{children}</ul>
}

export const ListItem: React.FC<{}> = ({ children }) => {
  return <li className="list-item">{children}</li>
}

export const Button: React.FC<{
  label: string
  style?: 'secondary'
  type?: 'button' | 'submit'
}> = ({ label, style }) => {
  return (
    <button className={`button ${style ? `mod-${style}` : ''}`}>{label}</button>
  )
}

interface Option {
  id: Key
  label: string
}

export const Select: React.FC<{
  instructions: string
  options: Option[]
  value: Option['id'] | null
  onChange: (value: Option['id']) => void
}> = ({ instructions, options, value, onChange }) => {
  return (
    <select
      style={{ fontSize: '16px', width: '100%' }}
      onChange={(e) => onChange(e.target.value)}
      value={value || 'instructions'}
    >
      <option disabled hidden value="instructions">
        {instructions}
      </option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
