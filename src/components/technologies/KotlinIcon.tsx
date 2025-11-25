export default function KotlinIcon() {
  return (
    <svg viewBox="0 0 128 128" role="img" aria-label="Kotlin">
      <defs>
        <linearGradient id="kotlinGradient" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#f67f00" />
          <stop offset="50%" stopColor="#ed1e79" />
          <stop offset="100%" stopColor="#7f52ff" />
        </linearGradient>
      </defs>
      <path
        d="M28 28h72L28 100z"
        fill="url(#kotlinGradient)"
      />
      <path d="M100 100H28l36-36z" fill="#00a6ff" opacity="0.7" />
    </svg>
  );
}

