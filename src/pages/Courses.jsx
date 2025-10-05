import React from 'react';
import CourseCard from '../components/CourseCard';
import { COURSES } from '../utils/constants';

const Courses = () => {
  return (
    <div className="pt-20 bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Perfect
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}IELTS Course
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Structured programs designed to help you achieve your target band score with expert
            guidance and proven strategies
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What's Included in Every Course
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-bold text-gray-900 mb-2">Study Materials</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive resources and practice questions
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-gray-900 mb-2">Live Sessions</h3>
              <p className="text-gray-600 text-sm">Interactive classes with expert trainers</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-bold text-gray-900 mb-2">Doubt Clearing</h3>
              <p className="text-gray-600 text-sm">24/7 support from our dedicated team</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-bold text-gray-900 mb-2">Progress Tracking</h3>
              <p className="text-gray-600 text-sm">Detailed analytics and performance reports</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;