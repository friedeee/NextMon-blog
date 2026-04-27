import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
      <div className="mx-auto max-w-4xl px-6 py-4 flex justify-between items-center">
        
        <Link href="/" className="text-2xl font-bold text-purple-600">
          ✍️ Mon Blog
        </Link>

        <nav className="flex gap-6">
          <Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
            Accueil
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
            À propos
          </Link>
        </nav>

      </div>
    </header>
  )
}