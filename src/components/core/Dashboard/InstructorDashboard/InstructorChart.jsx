import { useState } from "react";
import { Chart, registerables } from "chart.js";
import { Pie } from "react-chartjs-2";

Chart.register(...registerables);

export default function InstructorChart({ courses }) {
  // State to keep track of the currently selected chart
  const [currChart, setCurrChart] = useState("students");

  // Function to generate random colors for the chart
  const generateRandomColors = (numColors) => {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
      const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;
      colors.push(color);
    }
    return colors;
  };

  // Data for the chart displaying student information
  const chartDataStudents = {
    labels: courses.map((course) => course.courseName),
    datasets: [
      {
        data: courses.map((course) => course.totalStudentsEnrolled),
        backgroundColor: generateRandomColors(courses.length),
      },
    ],
  };

  // Data for the chart displaying income information
  const chartIncomeData = {
    labels: courses.map((course) => course.courseName),
    datasets: [
      {
        data: courses.map((course) => course.totalAmountGenerated),
        backgroundColor: generateRandomColors(courses.length),
      },
    ],
  };

  // Options for the chart
  const options = {
    maintainAspectRatio: false,
  };

  return (
    <div className="border-[2px] border-richblack-600 hover:shadow-none hover:scale-95 transition-all duration-200 flex flex-1 flex-col gap-y-4 rounded-md bg-richblack-800 p-6">
      <p className="text-lg font-bold text-richblack-50">Visualize</p>
      <div className="space-x-4 font-semibold">
        {/* Button to switch to the "students" chart */}
        <button
          onClick={() => setCurrChart("students")}
          className={`rounded-lg p-1 px-3 transition-all duration-200 ${
            currChart === "students"
              ? "bg-blue-200 text-richblack-900"
              : "text-yellow-300"
          }`}
        >
          Students
        </button>
        {/* Button to switch to the "income" chart */}
        <button
          onClick={() => setCurrChart("income")}
          className={`rounded-lg p-1 px-3 transition-all duration-200 ${
            currChart === "income"
              ? "bg-blue-200 text-richblack-900"
              : "text-yellow-300"
          }`}
        >
          Income
        </button>
      </div>
      <div className="relative mx-auto aspect-square">
        {/* Render the Pie chart based on the selected chart */}
        <div className="bg-richblack-900 p-4 rounded-lg border-[2px] border-richblack-600 w-96 h-[305px]">
          <Pie
            data={
              currChart === "students" ? chartDataStudents : chartIncomeData
            }
            options={options}
          />
        </div>
      </div>
    </div>
  );
}
