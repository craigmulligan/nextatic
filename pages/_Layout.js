import Link from 'next/link'

export default ({ children }) => {
  return (
    <div>
      <Link prefetch href="/"><a>Home</a></Link>
      {children}
    </div>
  )
}
