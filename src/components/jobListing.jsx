import { useState, useEffect } from "react";
import JobList from "./jobList";
import Spinner from "./spinner";

const JobListing = ({ isHome = false, refreshKey = 0 }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";

      try {
        const res = await fetch(apiUrl);

        if (!res.ok) {
          throw new Error(`HTTP error ${res.status}`);
        }

        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [isHome, refreshKey]); // ✅ refreshKey энд байна

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {loading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobList key={job.id} Job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListing;
