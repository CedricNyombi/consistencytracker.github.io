import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Calendar, CheckCircle2, Activity, Book, Star } from 'lucide-react';

const ConsistencyTracker = () => {
  const [date] = useState(new Date());
  const [habits, setHabits] = useState({
    fajr: false,
    dhuhr: false,
    asr: false,
    maghrib: false,
    isha: false,
    morningJog: false,
    forex: false,
    graphics: false,
    fasting: false
  });

  const toggleHabit = (habit) => {
    setHabits(prev => ({
      ...prev,
      [habit]: !prev[habit]
    }));
  };

  // Calculate completion percentage
  const calculateProgress = () => {
    const completed = Object.values(habits).filter(v => v).length;
    return Math.round((completed / Object.keys(habits).length) * 100);
  };

  const HabitCard = ({ title, icon, checked, onClick, description }) => (
    <div 
      className={`p-4 border rounded-lg mb-4 cursor-pointer transition-all ${
        checked ? 'bg-green-50 border-green-500' : 'hover:bg-gray-50'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center space-x-3">
        {icon}
        <div className="flex-1">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <CheckCircle2 
          className={`w-6 h-6 ${
            checked ? 'text-green-500' : 'text-gray-300'
          }`}
        />
      </div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Daily Consistency Tracker</CardTitle>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>{date.toLocaleDateString()}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Daily Progress</span>
              <span>{calculateProgress()}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-500 rounded-full h-2 transition-all"
                style={{ width: `${calculateProgress()}%` }}
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-3">Islamic Obligations</h2>
              <HabitCard
                title="Fajr"
                icon={<Star className="w-5 h-5 text-blue-500" />}
                checked={habits.fajr}
                onClick={() => toggleHabit('fajr')}
                description="Early morning prayer"
              />
              <HabitCard
                title="Dhuhr"
                icon={<Star className="w-5 h-5 text-blue-500" />}
                checked={habits.dhuhr}
                onClick={() => toggleHabit('dhuhr')}
                description="Noon prayer"
              />
              <HabitCard
                title="Asr"
                icon={<Star className="w-5 h-5 text-blue-500" />}
                checked={habits.asr}
                onClick={() => toggleHabit('asr')}
                description="Afternoon prayer"
              />
              <HabitCard
                title="Maghrib"
                icon={<Star className="w-5 h-5 text-blue-500" />}
                checked={habits.maghrib}
                onClick={() => toggleHabit('maghrib')}
                description="Sunset prayer"
              />
              <HabitCard
                title="Isha"
                icon={<Star className="w-5 h-5 text-blue-500" />}
                checked={habits.isha}
                onClick={() => toggleHabit('isha')}
                description="Night prayer"
              />
              <HabitCard
                title="Fasting"
                icon={<Book className="w-5 h-5 text-purple-500" />}
                checked={habits.fasting}
                onClick={() => toggleHabit('fasting')}
                description="Monday/Thursday Sunnah fast"
              />
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-3">Personal Development</h2>
              <HabitCard
                title="Morning Jog"
                icon={<Activity className="w-5 h-5 text-red-500" />}
                checked={habits.morningJog}
                onClick={() => toggleHabit('morningJog')}
                description="15-minute jog after Fajr"
              />
              <HabitCard
                title="Forex Trading"
                icon={<Activity className="w-5 h-5 text-yellow-500" />}
                checked={habits.forex}
                onClick={() => toggleHabit('forex')}
                description="45-minute trading session"
              />
              <HabitCard
                title="Graphics Design"
                icon={<Activity className="w-5 h-5 text-indigo-500" />}
                checked={habits.graphics}
                onClick={() => toggleHabit('graphics')}
                description="45-minute design practice"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConsistencyTracker;
