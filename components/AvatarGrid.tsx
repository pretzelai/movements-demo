// Decorative avatar grid matching the source layout.
// Uses deterministic gradient colors so it has visual life
// without requiring external images.
const gradients = [
  "from-rose-400 to-pink-600",
  "from-purple-500 to-indigo-600",
  "from-amber-400 to-orange-600",
  "from-emerald-400 to-teal-600",
  "from-sky-400 to-blue-600",
  "from-fuchsia-400 to-purple-600",
  "from-lime-400 to-green-600",
  "from-yellow-400 to-amber-600",
  "from-cyan-400 to-sky-600",
  "from-red-400 to-rose-600",
];

function row(start: number) {
  return Array.from({ length: 5 }).map((_, i) => gradients[(start + i) % gradients.length]);
}

export function AvatarGrid() {
  const rows = [row(0), row(3), row(6), row(1)];
  return (
    <div className="flex flex-col gap-4 mx-auto w-full">
      <div className="flex flex-col gap-4">
        {rows.map((r, ri) => (
          <div key={ri} className="flex justify-center gap-4">
            {r.map((g, i) => (
              <div
                key={i}
                className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white bg-gradient-to-br ${g} flex-shrink-0`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
