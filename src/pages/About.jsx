import React from 'react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20 bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}IELTS Excellence
            </span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are a leading IELTS preparation institute committed to helping students achieve
            their dream band scores through innovative teaching methods, personalized guidance, and
            cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="inline-block bg-blue-100 p-3 rounded-lg">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To empower students worldwide with the skills, confidence, and knowledge needed to
                excel in the IELTS examination. We believe in creating a supportive learning
                environment where every student can reach their full potential.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-block bg-purple-100 p-3 rounded-lg">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted and innovative IELTS preparation platform globally,
                recognized for our exceptional success rates, personalized approach, and commitment
                to student excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">15,000+</div>
              <div className="text-blue-100">Students Trained</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">8.5</div>
              <div className="text-blue-100">Average Band Score</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Expert Trainers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Students Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Faculty</h3>
              <p className="text-gray-600">
                Learn from certified IELTS trainers with years of experience and proven track
                records of success.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <Award className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">
                98% of our students achieve their target band scores on their first attempt.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-2xl">
              <Target className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Approach</h3>
              <p className="text-gray-600">
                Customized study plans and one-on-one mentorship tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Our trainers are certified IELTS professionals with 8.5+ band scores and extensive
            teaching experience
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Amit Singh', 'Priya Desai', 'Rajesh Kumar', 'Sneha Patel'].map((name, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{name}</h3>
                <p className="text-sm text-gray-600 mb-2">Senior IELTS Trainer</p>
                <div className="text-sm font-semibold text-blue-600">Band Score: 8.5+</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;