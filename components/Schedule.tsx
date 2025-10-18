
import React, { useState } from 'react';
import { TrainingType } from '../types';

const Schedule: React.FC = () => {
  const [trainingType, setTrainingType] = useState<TrainingType>(TrainingType.Hitting);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend.
    console.log({ trainingType, date, time, playerName, parentName, email });
    setSubmitted(true);
    // Reset form after a delay
    setTimeout(() => {
        setSubmitted(false);
        setTrainingType(TrainingType.Hitting);
        setDate('');
        setTime('');
        setPlayerName('');
        setParentName('');
        setEmail('');
    }, 5000);
  };

  const timeSlots = ["4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"];

  return (
    <section id="schedule" className="py-24">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-light-slate mb-4">
          <span className="text-softball-yellow font-mono mr-2">04.</span> Schedule Your Session
        </h2>
        <p className="text-slate-gray mb-12">
          Fill out the form below to book your training. Slots are limited and fill up quickly.
        </p>
      </div>
      <div className="max-w-2xl mx-auto">
        {submitted ? (
          <div className="bg-green-900/50 border border-green-500 text-green-300 px-6 py-4 rounded-lg text-center">
            <h3 className="font-bold text-xl">Thank You!</h3>
            <p>Your training request has been submitted. Coach Jay will be in touch shortly to confirm your session.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="trainingType" className="block text-light-slate mb-2">Training Type</label>
                <select id="trainingType" value={trainingType} onChange={(e) => setTrainingType(e.target.value as TrainingType)} className="w-full bg-slate-800/50 border border-slate-700 rounded-md py-3 px-4 text-light-slate focus:outline-none focus:ring-2 focus:ring-softball-yellow">
                  {Object.values(TrainingType).map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="date" className="block text-light-slate mb-2">Date</label>
                <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required className="w-full bg-slate-800/50 border border-slate-700 rounded-md py-3 px-4 text-light-slate focus:outline-none focus:ring-2 focus:ring-softball-yellow" />
              </div>
            </div>
            <div>
              <label htmlFor="time" className="block text-light-slate mb-2">Available Time Slots</label>
              <select id="time" value={time} onChange={(e) => setTime(e.target.value)} required className="w-full bg-slate-800/50 border border-slate-700 rounded-md py-3 px-4 text-light-slate focus:outline-none focus:ring-2 focus:ring-softball-yellow">
                <option value="" disabled>Select a time</option>
                {timeSlots.map(slot => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
               <div>
                <label htmlFor="playerName" className="block text-light-slate mb-2">Player's Name</label>
                <input type="text" id="playerName" value={playerName} onChange={(e) => setPlayerName(e.target.value)} required className="w-full bg-slate-800/50 border border-slate-700 rounded-md py-3 px-4 text-light-slate focus:outline-none focus:ring-2 focus:ring-softball-yellow" />
              </div>
              <div>
                <label htmlFor="parentName" className="block text-light-slate mb-2">Parent's Name</label>
                <input type="text" id="parentName" value={parentName} onChange={(e) => setParentName(e.target.value)} required className="w-full bg-slate-800/50 border border-slate-700 rounded-md py-3 px-4 text-light-slate focus:outline-none focus:ring-2 focus:ring-softball-yellow" />
              </div>
            </div>
             <div>
              <label htmlFor="email" className="block text-light-slate mb-2">Contact Email</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-slate-800/50 border border-slate-700 rounded-md py-3 px-4 text-light-slate focus:outline-none focus:ring-2 focus:ring-softball-yellow" />
            </div>
            <div>
              <button type="submit" className="w-full px-8 py-4 border border-softball-yellow text-softball-yellow rounded font-mono text-lg hover:bg-softball-yellow/10 transition-colors duration-300">
                Book Session
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Schedule;
