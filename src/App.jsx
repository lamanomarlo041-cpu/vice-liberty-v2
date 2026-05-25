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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#140018] to-[#22002c] text-white">
      <header className="text-center py-24 px-6">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 to-fuchsia-600 bg-clip-text text-transparent">
          Vice Liberty V2
        </h1>

        <p className="max-w-2xl mx-auto text-gray-300 text-lg">
          Serveur GTA RP sérieux • Free Access
        </p>

        <a
          href="https://discord.gg/gCY6AvpfX6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-8 py-4 rounded-2xl bg-purple-700 hover:bg-purple-600 transition"
        >
          Rejoindre le Discord
        </a>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="rounded-3xl p-8 bg-white/5 border border-white/10"
            >
              <h2 className="text-3xl font-bold text-purple-300 mb-6">
                {section.title}
              </h2>

              <ul className="space-y-4">
                {section.rules.map((rule, idx) => (
                  <li key={idx} className="text-gray-300">
                    • {rule}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
