import React, { useState, useEffect } from "react";
import { kids as initialKids } from "./data/sampleData";
import KidSelector from "./components/KidSelector";
import WeeklyDashboard from "./components/WeeklyDashboard";
import BadgeCounter from "./components/BadgeCounter";
import GoalTracker from "./components/GoalTracker";
import AddTaskForm from "./components/AddTaskForm";
import AddGoalForm from "./components/AddGoalForm";
import KidForm from "./components/KidForm";
import Starfield from "./components/Starfield";
import ThemeSelector, { themes } from "./components/ThemeSelector";

function App() {
    const [kids, setKids] = useState(() => {
        const savedKids = localStorage.getItem('kids');
        return savedKids ? JSON.parse(savedKids) : initialKids;
    });
    
    const [selectedKid, setSelectedKid] = useState(() => {
        const savedKids = localStorage.getItem('kids');
        const parsedKids = savedKids ? JSON.parse(savedKids) : initialKids;
        return parsedKids[0] || null;
    });
    
    const [currentTheme, setCurrentTheme] = useState(() => {
        return localStorage.getItem('theme') || 'cotton-candy';
    });
    const [kidFormData, setKidFormData] = useState(null);

    useEffect(() => {
        localStorage.setItem('theme', currentTheme);
    }, [currentTheme]);

    // Effect for persisting kids data
    useEffect(() => {
        localStorage.setItem('kids', JSON.stringify(kids));
        console.log('Kids saved to localStorage:', kids);
    }, [kids]);

    // Effect for handling kid selection
    useEffect(() => {
        console.log('Kids updated:', kids);
        console.log('Selected kid:', selectedKid);
        
        // Update selected kid if current selection becomes invalid
        if (kids.length > 0 && !kids.find(k => k.id === selectedKid?.id)) {
            console.log('Selecting first kid as current selection is invalid');
            setSelectedKid(kids[0]);
        }
    }, [kids, selectedKid]);

    const handleTaskComplete = (taskId, dateStr) => {
        const updatedKids = kids.map(kid => {
            if (kid.id === selectedKid.id) {
                const task = kid.tasks.find(t => t.id === taskId);
                const isCompleted = task.completed.includes(dateStr);
                const updatedTasks = kid.tasks.map(task =>
                    task.id === taskId
                        ? { 
                            ...task, 
                            completed: isCompleted 
                                ? task.completed.filter(date => date !== dateStr)
                                : [...task.completed, dateStr]
                          }
                        : task
                );
                return { 
                    ...kid, 
                    tasks: updatedTasks, 
                    badges: kid.badges + (isCompleted ? -1 : 1)
                };
            }
            return kid;
        });
        setKids(updatedKids);
        setSelectedKid(updatedKids.find(k => k.id === selectedKid.id));
    };

    const handleAddTask = (title) => {
        const newTask = { id: Date.now().toString(), title, frequency: "daily", completed: [] };
        const updatedKids = kids.map(kid =>
            kid.id === selectedKid.id ? { ...kid, tasks: [...kid.tasks, newTask] } : kid
        );
        setKids(updatedKids);
        setSelectedKid(updatedKids.find(k => k.id === selectedKid.id));
    };

    const handleAddGoal = (title, requiredBadges) => {
        const newGoal = { id: Date.now().toString(), title, requiredBadges, achieved: false };
        const updatedKids = kids.map(kid =>
            kid.id === selectedKid.id ? { ...kid, goals: [...kid.goals, newGoal] } : kid
        );
        setKids(updatedKids);
        setSelectedKid(updatedKids.find(k => k.id === selectedKid.id)); // refresh selection
    };

    const handleGoalAchieved = (goalId) => {
        const updatedKids = kids.map(kid => {
            if (kid.id === selectedKid.id) {
                const updatedGoals = kid.goals.map(goal =>
                    goal.id === goalId ? { ...goal, achieved: true } : goal
                );
                return { ...kid, goals: updatedGoals };
            }
            return kid;
        });
        setKids(updatedKids);
        setSelectedKid(updatedKids.find(k => k.id === selectedKid.id));
    };

    const handleSubmitKid = (kidData) => {
        console.log('Submitting kid:', kidData);
        if (!kidFormData) {
            // Add mode
            if (kids.length >= 5) return; // Maximum 5 kids
            const newKid = {
                ...kidData,
                tasks: [],
                badges: 0,
                goals: []
            };
            console.log('Adding new kid:', newKid);
            setKids([...kids, newKid]);
            setSelectedKid(newKid);
        } else {
            // Edit mode
            const updatedKids = kids.map(kid => 
                kid.id === kidFormData.id 
                    ? { ...kid, name: kidData.name, emoji: kidData.emoji }
                    : kid
            );
            setKids(updatedKids);
            if (selectedKid && selectedKid.id === kidFormData.id) {
                setSelectedKid({ ...selectedKid, name: kidData.name, emoji: kidData.emoji });
            }
        }
        // Close the form
        setKidFormData(null);
    };

    return (
        <div className={`relative min-h-screen text-gray-800 p-6 ${themes.find(t => t.id === currentTheme)?.class}`}>
            <ThemeSelector currentTheme={currentTheme} onThemeChange={setCurrentTheme} />
            <h1 className="text-3xl font-bold text-center mb-6">⭐ Family Task Board ⭐</h1>
            <KidSelector 
                kids={kids} 
                onSelect={setSelectedKid} 
                selectedKid={selectedKid} 
                onAddKid={() => setKidFormData({})} 
                onEditKid={(kid) => setKidFormData(kid)}
                maxKidsReached={kids.length >= 5} 
            />
            {kidFormData !== null && (
                <KidForm 
                    onClose={() => setKidFormData(null)}
                    onSubmit={handleSubmitKid}
                    initialKid={kidFormData.id ? kidFormData : null}
                />
            )}
            {selectedKid ? (
                <>
                    <BadgeCounter badges={selectedKid.badges} />
                    <AddTaskForm onAddTask={handleAddTask} />
                    <WeeklyDashboard kid={selectedKid} onTaskComplete={handleTaskComplete} />
                    <AddGoalForm onAddGoal={handleAddGoal} />
                    <GoalTracker goals={selectedKid.goals} badges={selectedKid.badges} onGoalAchieved={handleGoalAchieved} />
                </>
            ) : (
                <div className="text-center py-8">
                    <p className="text-gray-600 text-lg">
                        {kids.length === 0 
                            ? "Click the 'Add Kid' button to get started!" 
                            : "Select a kid to view their tasks and goals"}
                    </p>
                </div>
            )}
        </div>
    );
}

export default App;