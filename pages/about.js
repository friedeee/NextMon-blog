import Header from '../components/Header'

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="mx-auto max-w-2xl">
          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
            
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">👩‍💻</div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                BOTON Kpèdétin Elfriede
              </h1>
              <p className="text-purple-600 font-medium">
                Développeuse Web Junior
              </p>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Passionnée par le développement web, je construis des interfaces 
                modernes avec React, Next.js et Tailwind CSS.
              </p>
              <p>
                Ce blog est mon espace pour partager mon parcours, mes apprentissages 
                et mes conseils pour les développeurs débutants.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="bg-purple-50 rounded-xl p-4">
                <p className="text-2xl font-bold text-purple-600">6+</p>
                <p className="text-sm text-gray-500">Projets</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4">
                <p className="text-2xl font-bold text-purple-600">3+</p>
                <p className="text-sm text-gray-500">Technos</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4">
                <p className="text-2xl font-bold text-purple-600">1+</p>
                <p className="text-sm text-gray-500">An d'expérience</p>
              </div>
            </div>

            <div className="mt-8 flex gap-4 justify-center">
              <a 
                href="https://github.com/friedeee" 
                target="_blank"
                className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors">
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/friedeee-boton-446b1a3b7/" 
                target="_blank"
                className="bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-purple-500 transition-colors">
                LinkedIn
              </a>
            </div>

          </div>
        </div>
      </main>
    </>
  )
}