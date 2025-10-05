import React from 'react';
import { Check, Clock, TrendingUp } from 'lucide-react';

const CourseCard = ({ course }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
        course.popular ? 'ring-2 ring-blue-600' : ''
      }`}
    >
      {course.popular && (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm font-semibold">
          🔥 Most Popular
        </div>
      )}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h3>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp className="h-4 w-4" />
              <span>{course.level}</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl">
          <div className="text-sm text-gray-600 mb-1">Target Band</div>
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {course.targetBand}
          </div>
        </div>

        <div className="space-y-2">
          {course.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm">{feature}</span>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t">
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl font-bold text-gray-900">{course.price}</span>
            <span className="text-gray-600 text-sm">One-time payment</span>
          </div>
          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;