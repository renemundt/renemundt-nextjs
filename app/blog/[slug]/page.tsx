import { getPostBySlug } from '@/app/_lib/posts'
import { format } from 'date-fns'

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
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <article>
          <h1>{post.title}</h1>
          <time dateTime={post.date}>{format(new Date(post.date), 'LLLL	d, yyyy')}</time>
        </article>
      </div>
    </main>
  )
}

export default Post
