import React from "react";
import { Info, Briefcase, Users, GraduationCap } from "lucide-react";

const LoginInstructions = () => {
  const credentials = [
    {
      type: "admin",
      icon: <Briefcase size={16} />,
      color: "text-blue-600",
    },
    {
      type: "teacher",
      icon: <Users size={16} />,
      color: "text-green-600",
    },
    {
      type: "student",
      icon: <GraduationCap size={16} />,
      color: "text-purple-600",
    },
  ];

  return (
    <div className="fixed top-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-200">
      <div className="flex items-center gap-2 text-gray-700 mb-3">
        <Info size={18} />
        <span className="font-medium">Login Credentials</span>
      </div>
      <div className="space-y-2">
        {credentials.map((cred) => (
          <div
            key={cred.type}
            className={`p-2 rounded ${"bg-gray-50 border border-gray-100"}`}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className={`${cred.color}`}>{cred.icon}</span>
              <span className="font-medium capitalize">{cred.type}</span>
            </div>
            <div className="space-y-1 text-sm pl-6">
              <p>
                <span className="text-gray-600">Username:</span>{" "}
                <code className="bg-gray-100 px-1.5 py-0.5 rounded">
                  {cred.type}
                </code>
              </p>
              <p>
                <span className="text-gray-600">Password:</span>{" "}
                <code className="bg-gray-100 px-1.5 py-0.5 rounded">
                  MyTestPass@12
                </code>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoginInstructions;
