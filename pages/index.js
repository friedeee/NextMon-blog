import Link from 'next/link'
import articles from '../data/articles'
import Header from '../components/Header'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Mon Blog ✍️
          </h1>
          <p className="text-xl text-gray-500">
            Développement web, conseils et parcours
          </p>
        </div>

        {/* Liste articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map(article => (
            <Link href={`/blog/${article.id}`} key={article.id}>
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 cursor-pointer border border-gray-100">
                <div className="text-4xl mb-4">{article.image}</div>
                <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                  {article.categorie}
                </span>
                <h2 className="text-xl font-bold text-gray-900 mt-3 mb-2">
                  {article.titre}
                </h2>
                <p className="text-gray-500 text-sm mb-4">{article.resume}</p>
                <p className="text-xs text-gray-400">{article.date}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  )
}