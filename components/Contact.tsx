import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    playerAge: '',
    currentLevel: '',
    interests: [] as string[],
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const trainingInterests = [
    'Hitting Development',
    'Catching Excellence', 
    'Fielding Mastery',
    'All Three Areas'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        playerAge: '',
        currentLevel: '',
        interests: [],
        message: ''
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-light-slate mb-4">
            <span className="text-softball-yellow font-mono mr-2">05.</span> Get More Information
          </h2>
          <p className="text-slate-gray text-lg max-w-2xl mx-auto">
            Ready to take your game to the next level? Have questions about training? Let's talk about how we can help you achieve your softball goals.
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-900/50 border border-green-500 text-green-300 px-8 py-6 rounded-xl text-center">
            <h3 className="font-bold text-2xl mb-2">Thank You!</h3>
            <p className="text-lg">Your message has been sent. Coach Jay will be in touch within 24 hours to discuss your training needs.</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-light-slate mb-6">Why Choose Coach Jay?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-softball-yellow/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-softball-yellow text-sm">🏆</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-light-slate">D1 Director Experience</h4>
                      <p className="text-slate-gray">Currently developing players at the highest collegiate level</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-softball-yellow/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-softball-yellow text-sm">⚾</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-light-slate">Live College Pitching</h4>
                      <p className="text-slate-gray">The only program where you face current college pitchers</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-softball-yellow/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-softball-yellow text-sm">🎯</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-light-slate">Proven Results</h4>
                      <p className="text-slate-gray">Athletes who train with us see measurable improvement</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-softball-yellow/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-softball-yellow text-sm">⭐</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-light-slate">Limited Availability</h4>
                      <p className="text-slate-gray">Small group sizes ensure personalized attention</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <h4 className="font-bold text-light-slate mb-4">Quick Response Guarantee</h4>
                <p className="text-slate-gray mb-4">Coach Jay personally responds to all inquiries within 24 hours.</p>
                <div className="text-softball-yellow font-mono text-sm">
                  📧 coachjay@sbplayerdevelopment.com<br />
                  📱 (555) 123-4567
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-light-slate mb-2 font-medium">Your Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      required 
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-3 px-4 text-light-slate focus:outline-none focus:ring-2 focus:ring-softball-yellow focus:border-transparent" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-light-slate mb-2 font-medium">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      required 
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-3 px-4 text-light-slate focus:outline-none focus:ring-2 focus:ring-softball-yellow focus:border-transparent" 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-light-slate mb-2 font-medium">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-3 px-4 text-light-slate focus:outline-none focus:ring-2 focus:ring-softball-yellow focus:border-transparent" 
                    />
                  </div>
                  <div>
                    <label htmlFor="playerAge" className="block text-light-slate mb-2 font-medium">Player's Age *</label>
                    <select 
                      id="playerAge" 
                      name="playerAge" 
                      value={formData.playerAge} 
                      onChange={handleInputChange} 
                      required 
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-3 px-4 text-light-slate focus:outline-none focus:ring-2 focus:ring-softball-yellow focus:border-transparent"
                    >
                      <option value="">Select Age</option>
                      <option value="12-13">12-13 years old</option>
                      <option value="14-15">14-15 years old</option>
                      <option value="16-17">16-17 years old</option>
                      <option value="18+">18+ years old</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="currentLevel" className="block text-light-slate mb-2 font-medium">Current Playing Level *</label>
                  <select 
                    id="currentLevel" 
                    name="currentLevel" 
                    value={formData.currentLevel} 
                    onChange={handleInputChange} 
                    required 
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-3 px-4 text-light-slate focus:outline-none focus:ring-2 focus:ring-softball-yellow focus:border-transparent"
                  >
                    <option value="">Select Level</option>
                    <option value="Recreation">Recreation League</option>
                    <option value="Travel">Travel Ball</option>
                    <option value="High School JV">High School JV</option>
                    <option value="High School Varsity">High School Varsity</option>
                    <option value="Club/Select">Club/Select</option>
                  </select>
                </div>

                <div>
                  <label className="block text-light-slate mb-3 font-medium">Training Interests *</label>
                  <div className="grid grid-cols-2 gap-3">
                    {trainingInterests.map(interest => (
                      <label key={interest} className="flex items-center space-x-3 cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleInterestChange(interest)}
                          className="w-4 h-4 text-softball-yellow bg-slate-700 border-slate-600 rounded focus:ring-softball-yellow focus:ring-2"
                        />
                        <span className="text-slate-gray text-sm">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-light-slate mb-2 font-medium">Tell us about your goals *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    required 
                    rows={4}
                    placeholder="What are your softball goals? What specific areas would you like to improve? Any questions about the training program?"
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-3 px-4 text-light-slate focus:outline-none focus:ring-2 focus:ring-softball-yellow focus:border-transparent resize-none" 
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full px-8 py-4 bg-softball-yellow text-navy-blue rounded-lg font-bold text-lg hover:bg-softball-yellow/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-softball-yellow/25"
                >
                  💬 Send Message to Coach Jay
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
