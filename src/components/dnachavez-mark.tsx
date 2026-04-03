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
        d="M192 64H64V192H192V256H0V0H192V64ZM256 192H192V64H256V192ZM512 256H384V192H512V256ZM384 192H320V64H384V192ZM512 64H384V0H512V64Z"
      />
    </svg>
  )
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M96 32h-64v64h64v32h-96V0h96v32ZM128 96h-32V32h32v64ZM256 128H192V96h64v32ZM192 96H160V32h32v64ZM256 32H192V0h64v32Z"/></svg>`
}
