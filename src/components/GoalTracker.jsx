import confetti from "canvas-confetti";
import { useEffect, useRef } from "react";

export default function GoalTracker({ goals, badges, onGoalAchieved }) {
    const celebratedGoalsRef = useRef(new Set());

    const triggerCelebration = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    };

    const handleCelebrate = (goal) => {
        triggerCelebration();
        onGoalAchieved(goal.id);
        celebratedGoalsRef.current.add(goal.id);
    };
    
    // Reset celebration state when badges decrease below requirement
    useEffect(() => {
        goals.forEach(goal => {
            if (badges < goal.requiredBadges && celebratedGoalsRef.current.has(goal.id)) {
                celebratedGoalsRef.current.delete(goal.id);
            }
        });
    }, [badges, goals]);

    useEffect(() => {
        goals.forEach(goal => {
            const isAchievable = badges >= goal.requiredBadges;
            const notYetAchieved = !goal.achieved;
            const notYetCelebrated = !celebratedGoalsRef.current.has(goal.id);
            
            if (isAchievable && notYetAchieved && notYetCelebrated) {
                handleCelebrate(goal);
            }
        });
    }, [badges, goals]);

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
                                className={`h-3 rounded-full transition-all duration-1000 ${achieved ? "bg-green-500" : "bg-blue-400"}`}
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                        {achieved && (
                            <div className="mt-2 text-green-500 text-sm font-medium flex items-center gap-1">
                                <span>Goal achieved!</span> 
                                <span className="animate-bounce">🎉</span>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}