import Link from 'next/link'
import Header from '../../components/Header'
// import articles from '@/data/articles'
import articles from '@/data/articles'

export default function Article({ article }) {
  if (!article) return <p>Article non trouvé</p>

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="mx-auto max-w-2xl">

          <Link href="/" className="text-purple-600 hover:underline text-sm mb-8 block">
            ← Retour au blog
          </Link>

          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
            <div className="text-5xl mb-6">{article.image}</div>

            <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
              {article.categorie}
            </span>

            <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-2">
              {article.titre}
            </h1>

            <p className="text-gray-400 text-sm mb-6">{article.date}</p>

            <p className="text-gray-600 leading-relaxed">
              {article.resume}
            </p>

            <div className="mt-8 p-4 bg-purple-50 rounded-xl">
              <p className="text-purple-700 text-sm font-medium">
                ✍️ Article écrit par BOTON Kpèdétin Elfriede
              </p>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}

export async function getStaticProps({ params }) {
  const article = articles.find(a => a.id === parseInt(params.id))
  return {
    props: { article: article || null }
  }
}

export async function getStaticPaths() {
  const paths = articles.map(a => ({
    params: { id: a.id.toString() }
  }))
  return { paths, fallback: false }
}