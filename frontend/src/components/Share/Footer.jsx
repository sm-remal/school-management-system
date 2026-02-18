"use client";

import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-700 pt-14 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div className="space-y-4">
          <h2 className="text-2xl items-center flex font-bold text-indigo-600">
            <Logo></Logo>
            <p className="text-[8px]">School Management System</p>
          </h2>
          <p className="text-sm leading-relaxed text-gray-600">
            A smart and secure School Management System designed to simplify
            student management, attendance tracking, exam processing, and
            communication between teachers, students, and parents.
          </p>

          <div className="space-y-2 text-sm">
            <p>📍 123 Education Road, Academic City</p>
            <p>📞 +880 1234-567890</p>
            <p>✉️ support@edumanage.com</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              "About System",
              "Features",
              "Teacher Portal",
              "Student Portal",
              "Parent Access",
              "Academic Calendar",
              "Contact Administration",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-indigo-600 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Core Modules */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Core Modules</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Student Management",
              "Attendance System",
              "Exam & Results",
              "Class Routine",
              "Fee Management",
              "Notice Board",
              "Reports & Analytics",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-indigo-600 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Help Center",
              "Technical Support",
              "User Guide",
              "FAQ",
              "System Status",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-indigo-600 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t mt-12 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>
          © 2025 EduManage. All rights reserved. Developed for modern
          educational institutions.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <a href="#" className="hover:text-indigo-600">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-indigo-600">
            Terms of Service
          </a>
          <a href="#" className="hover:text-indigo-600">
            Data Protection Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
