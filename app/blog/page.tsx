import Link from 'next/link'
import { getAllPosts } from '../_lib/posts'

export default function blog() {
  const posts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt'])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        {posts?.map((post, i) => (
          <>
            <Link key={i} as={`/posts/${post.slug}`} href="/posts/[slug]">
              {post.title}
            </Link>
          </>
        ))}
      </div>
    </main>
  )
}
