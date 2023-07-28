import { getPostBySlug } from '@/app/_lib/posts'
import { format } from 'date-fns'
import ReactMarkdown from 'react-markdown'

type Params = {
  slug: string
}

type Props = {
  params: Params
}

const Post = ({ params }: Props) => {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'author', 'content', 'ogImage', 'coverImage'])
  return (
    <main className="min-h-screen p-12">
      <article>
        <h1>{post.title}</h1>
        <time dateTime={post.date}>{format(new Date(post.date), 'LLLL	d, yyyy')}</time>
        <ReactMarkdown>{post.content}</ReactMarkdown>
        <section>{post.content}</section>
      </article>
    </main>
  )
}

export default Post
