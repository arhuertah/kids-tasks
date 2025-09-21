export default function BadgeCounter({ badges }) {
  return (
    <div className="text-center mb-6">
      <h2 className="text-3xl font-bold tracking-wide text-purple-600">⭐ Badges: {badges} ⭐</h2>
    </div>
  );
}