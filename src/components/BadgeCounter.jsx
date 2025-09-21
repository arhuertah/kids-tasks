export default function BadgeCounter({ badges }) {
  return (
    <div className="text-center mb-6">
      <h2 className="text-4xl font-bold tracking-wide">⭐ Badges: {badges} ⭐</h2>
    </div>
  );
}