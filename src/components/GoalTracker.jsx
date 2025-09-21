import confetti from "canvas-confetti";

export default function GoalTracker({ goals, badges, onGoalAchieved }) {
    const handleCelebrate = (goal) => {
        confetti();
        onGoalAchieved(goal.id);
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-3">🎯 Goals</h2>
            {goals.length === 0 && (
                <p className="text-gray-600 italic">No goals yet — add one below!</p>
            )}

            {goals.map(goal => {
                const progress = Math.min((badges / goal.requiredBadges) * 100, 100);
                const achieved = badges >= goal.requiredBadges || goal.achieved;

                return (
                    <div key={goal.id} className="bg-white text-gray-900 rounded-lg p-3 shadow mb-3">
                        <div className="flex justify-between items-center">
                            <span className="font-bold">{goal.title}</span>
                            <span>{badges}/{goal.requiredBadges}</span>

                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                            <div
                                className={`h-3 rounded-full ${achieved ? "bg-green-500" : "bg-blue-400"}`}
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                        {achieved && !goal.achieved && (
                            <button
                                onClick={() => handleCelebrate(goal)}
                                className="mt-2 px-3 py-1 bg-pink-500 text-white rounded-lg font-bold"
                            >
                                Celebrate 🎉
                            </button>
                        )}
                    </div>
                );
            })}
        </div>
    );
}