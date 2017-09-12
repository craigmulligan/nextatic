import Link from 'next/link'

const Post = ({ title, html, slug }) => {
  return (
    <div>
      <Link prefetch as={slug} href={`/post/?slug=${slug}`}>
        <h1>{title}</h1>
      </Link>
      <p dangerouslySetInnerHTML={{__html: html}}/>
    </div>
  )
}

export default Post
