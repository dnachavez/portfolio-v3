export function DNachavezMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      aria-hidden
      {...props}
    >
      <path
        fill="currentColor"
        d="M0 0H192V64H64V192H192V256H0ZM192 64H256V192H192ZM320 64H384V192H320ZM384 0H512V64H384ZM384 192H512V256H384Z"
      />
    </svg>
  )
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M0 0H96V32H32V96H96V128H0ZM96 32H128V96H96ZM160 32H192V96H160ZM192 0H256V32H192ZM192 96H256V128H192Z"/></svg>`
}
