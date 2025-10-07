const jokes: string[] = [
  "¿Por qué el hacker cruzó la carretera? Para evitar el firewall. 🚧",
  "Me encanta la seguridad informática… desde el sofá de mi casa. 🛋️",
  "¿Cuál es el colmo de un hacker? Que le roben la contraseña de su diario. 📖",
  "Error 404: Mi vida social no encontrada. 🤖",
  "Hackear mi dieta es más difícil que hackear un servidor. 🥗",
  "Si la vida fuera un sistema, yo sería el bug que nadie puede arreglar. 🐞",
  "Mi antivirus y yo tenemos una relación sólida: no nos hablamos. 🙃",
  "Contraseña segura: contraseña123. — No. Sólo no. 🔐",
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-800">
      <header className="backdrop-blur-sm bg-white/60 border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-600 to-emerald-400 flex items-center justify-center shadow-md">
              <span className="text-white font-semibold text-lg">HJ</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-tight">Hacker Jokes</h1>
              <p className="text-xs text-slate-500">Parodia · Solo humor</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a className="text-slate-600 hover:text-slate-800 transition" href="#jokes">Chistes</a>
            <a className="text-slate-600 hover:text-slate-800 transition" href="#about">Sobre</a>
            <a className="text-slate-600 hover:text-slate-800 transition" href="#contact">Contacto</a>
            <button
              className="ml-2 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-indigo-600 to-emerald-400 text-white px-4 py-2 text-sm font-medium shadow hover:scale-[1.02] transform transition"
              aria-label="Empezar"
            >
              Inicio
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Hackeame si puedes <span className="text-indigo-600">:)</span> y si puedes ganas 😄
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl">
              Proyecto Final de Auditoria de Sistemas
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#jokes"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white font-medium shadow hover:shadow-lg transition"
              >
                Ver chistes
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50 transition"
              >
                Sobre la parodia
              </a>
            </div>

            <div className="mt-6 flex gap-3 flex-wrap">
              <span className="px-3 py-1 rounded-full text-sm bg-emerald-50 text-emerald-700">UMG</span>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Terminal de broma</h3>
                    <p className="mt-1 text-sm text-slate-500">Apariencia de consola, respuestas ficticias y mucho estilo.</p>
                  </div>
                  <div className="text-xs text-slate-400">v0.1</div>
                </div>

                <div className="mt-6 bg-slate-50 rounded-lg p-4 font-mono text-slate-700">
                  <div className="text-sm leading-relaxed">
                    <div className="opacity-80">user@parodia:~$ echo "hola mundo"</div>
                    <div className="mt-2 text-indigo-600">hola_mundo_☻</div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-indigo-50 to-white border border-slate-100">
                    <div className="text-xs text-slate-500">Estética</div>
                    <div className="font-medium text-slate-800">Glass & Elevation</div>
                  </div>
                  <div className="p-3 rounded-lg bg-gradient-to-r from-emerald-50 to-white border border-slate-100">
                    <div className="text-xs text-slate-500">Contenido</div>
                    <div className="font-medium text-slate-800">Solo chistes</div>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-slate-100 bg-white/50 flex items-center justify-between">
                <div className="text-sm text-slate-500">Parodia — seguro y legal</div>
                <div className="flex gap-2">
                  <button className="text-sm text-indigo-600 hover:underline">Leer más</button>
                  <button className="text-sm text-slate-500">Compartir</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="jokes" className="mt-16">
          <h3 className="text-2xl font-semibold text-slate-900">Chistes</h3>
          <p className="text-slate-600 mt-2 max-w-2xl">
            Una selección corta y pulida para compartir en Slack, presentaciones o para animar el día.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jokes.map((j, idx) => (
              <article
                key={idx}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transform hover:-translate-y-1 transition"
                aria-label={`Chiste ${idx + 1}`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-sm text-indigo-600 font-semibold">#{idx + 1}</h4>
                    <p className="mt-3 text-slate-800 leading-relaxed">{j}</p>
                  </div>
                  <div className="ml-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-50 to-emerald-50 flex items-center justify-center text-indigo-700 font-semibold">
                      😄
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <span>Compartir · Copiar</span>
                  <span className="opacity-80">Inofensivo</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-600">&copy; {new Date().getFullYear()} Seguridad y Auditoria de Sistemas</div>
        </div>
      </footer>
    </div>
  );
}
