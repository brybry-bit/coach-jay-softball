
import React from 'react';

const CollegeEdge: React.FC = () => {
  return (
    <section id="college-edge" className="py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-light-slate mb-4">
          <span className="text-softball-yellow font-mono mr-2">02.</span> The College Edge
        </h2>
        <p className="text-softball-yellow text-xl mb-8">
          Why training with us is a game-changer.
        </p>
        <div className="bg-slate-800/50 p-8 md:p-12 rounded-lg shadow-xl text-left">
          <p className="text-lg text-slate-gray leading-relaxed">
            Success in softball is about preparation meeting opportunity. At the middle and high school levels, it's rare to consistently face pitching that truly challenges you and prepares you for the next level. That's the gap we fill.
          </p>
          <br/>
          <p className="text-lg text-light-slate leading-relaxed font-semibold">
            Our hitters and catchers don't just train—they get live, game-speed reps against current collegiate pitchers. This isn't a pitching machine. It's real spin, real velocity, and real experience that you can't get anywhere else. You'll learn to recognize pitches, adjust your timing, and build the confidence that only comes from competing against the best.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CollegeEdge;
