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

export const IconButton: React.FC<{ icon: string; label: string }> = ({
  label,
}) => {
  return (
    <button className="button">
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
}> = ({ instructions, options }) => {
  return (
    <select style={{ fontSize: '16px', maxWidth: '100%' }}>
      <option disabled hidden>
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
