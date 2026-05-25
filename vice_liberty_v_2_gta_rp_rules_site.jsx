export default function ViceLibertyV2() {
  const sections = [
    {
      title: 'Règlement Général',
      rules: [
        'Le respect entre tous les joueurs est obligatoire.',
        'Le HRP vocal ou écrit abusif est interdit.',
        'Le troll, le spam et les comportements toxiques sont sanctionnés.',
        'Toute exploitation de bug est strictement interdite.',
      ],
    },
    {
      title: 'Règles RP',
      rules: [
        'Le Fear RP est obligatoire dans toutes les scènes.',
        'Le PowerGaming est interdit.',
        'Le MetaGaming est interdit.',
        'Le Mass RP doit être respecté en permanence.',
        'La déconnexion en scène RP est interdite.',
      ],
    },
    {
      title: 'Règlement Illégal',
      rules: [
        'Les prises d’otages doivent rester cohérentes RP.',
        'Les braquages abusifs ou répétitifs sont interdits.',
        'Le revenge kill est interdit.',
        'Les scènes doivent privilégier le RP avant le gunfight.',
      ],
    },
    {
      title: 'Règlement Police & EMS',
      rules: [
        'Les forces de l’ordre doivent rester professionnelles.',
        'Les EMS doivent prioriser le RP médical.',
        'L’abus de pouvoir est interdit.',
        'Les scènes doivent être jouées sérieusement.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#140018] to-[#22002c] text-white font-sans">
      <header className="relative overflow-hidden border-b border-purple-900/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.25),transparent_55%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-700/20 border border-purple-500/30 text-purple-300 text-sm tracking-widest uppercase mb-6">
            Serveur GTA RP • Free Access
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 bg-gradient-to-r from-purple-400 to-fuchsia-600 bg-clip-text text-transparent">
            Vice Liberty V2
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
            Bienvenue sur Vice Liberty V2, un serveur GTA RP sérieux basé sur une immersion réaliste, des scènes cohérentes et une communauté respectueuse.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <button className="px-8 py-4 rounded-2xl bg-purple-700 hover:bg-purple-600 transition-all duration-300 shadow-2xl shadow-purple-900/40 font-semibold text-lg">
              Rejoindre le Discord
            </button>

            <button className="px-8 py-4 rounded-2xl border border-purple-500/40 hover:bg-purple-700/20 transition-all duration-300 font-semibold text-lg">
              Lire le règlement
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl">
            <h3 className="text-2xl font-bold text-purple-300 mb-3">RP Sérieux</h3>
            <p className="text-gray-300 leading-relaxed">
              Des scènes immersives et réalistes avec une modération active.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl">
            <h3 className="text-2xl font-bold text-purple-300 mb-3">Communauté Active</h3>
            <p className="text-gray-300 leading-relaxed">
              Une communauté accueillante avec événements et activités régulières.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl">
            <h3 className="text-2xl font-bold text-purple-300 mb-3">Économie Réaliste</h3>
            <p className="text-gray-300 leading-relaxed">
              Une progression équilibrée pour une expérience durable.
            </p>
          </div>
        </section>

        <section>
          <div className="text-center mb-14">
            <h2 className="text-5xl font-black mb-4">Règlement Officiel</h2>
            <p className="text-gray-400 text-lg">
              Merci de lire et respecter toutes les règles du serveur.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="group rounded-3xl p-8 bg-white/5 border border-white/10 hover:border-purple-500/40 transition-all duration-300 backdrop-blur-xl shadow-2xl"
              >
                <h3 className="text-3xl font-bold mb-6 text-purple-300 group-hover:text-fuchsia-400 transition-colors duration-300">
                  {section.title}
                </h3>

                <ul className="space-y-4">
                  {section.rules.map((rule, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-4 text-gray-300 leading-relaxed"
                    >
                      <div className="mt-2 w-2 h-2 rounded-full bg-purple-400" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <div className="rounded-[2rem] overflow-hidden border border-purple-500/20 bg-gradient-to-r from-purple-900/30 to-fuchsia-900/20 backdrop-blur-xl p-10 text-center shadow-2xl shadow-purple-900/20">
            <h2 className="text-5xl font-black mb-6">
              Rejoins Vice Liberty V2
            </h2>

            <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed mb-8">
              Crée ton histoire, développe ton personnage et vis une expérience RP unique sur un serveur moderne et immersif.
            </p>

            <button className="px-10 py-5 rounded-2xl bg-purple-600 hover:bg-purple-500 transition-all duration-300 text-xl font-bold shadow-xl shadow-purple-900/40">
              Accéder au Discord
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400">
          <p>© 2026 Vice Liberty V2 — Tous droits réservés.</p>
          <p>Développé pour une expérience GTA RP immersive.</p>
        </div>
      </footer>
    </div>
  );
}
