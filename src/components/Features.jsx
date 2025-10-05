import React from 'react';
import { Mic, BookOpen, Brain, Award } from 'lucide-react';
import { FEATURES } from '../utils/constants';

const iconMap = {
  Mic: Mic,
  BookOpen: BookOpen,
  Brain: Brain,
  Award: Award,
};

const Features = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose IELTS Excellence?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of expert teaching and innovative technology
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div
                key={feature.id}
                className={`group bg-gradient-to-br ${feature.bgGradient} p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer`}
              >
                <div
                  className={`bg-gradient-to-r ${feature.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <IconComponent className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;