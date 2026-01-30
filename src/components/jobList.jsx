import { Link } from "react-router-dom";
import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";

const JobList = ({ Job }) => {
  const [showDescription, setShowDescription] = useState(false);

  let description = Job.description ?? "";
  if (!showDescription) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{Job.type}</div>
          <h3 className="text-xl font-bold">{Job.title}</h3>
        </div>

        <div className="mb-5">{description}</div>

        <button
          onClick={() => setShowDescription((prev) => !prev)}
          className="text-indigo-500 mb-2"
        >
          {showDescription ? "Less" : "More"}
        </button>

        <h3 className="text-indigo-500 mb-2">{Job.salary} / Year</h3>

        <div className="border border-gray-100 mb-5" />

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="inline text-lg mr-1" />
            {Job.location}
          </div>

          <Link
            to={`/jobs/${Job.id}`}
            className="h-9 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobList;
