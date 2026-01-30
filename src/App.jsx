 import { useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import EditJobPage from "./components/pages/editJobPage";
import MainLayout from "./layouts/mainLayout";
import HomePage from "./components/pages/homePage";
import JobsPage from "./components/pages/jobsPage";
import NotFoundPage from "./components/pages/notFoundPage";
import JobPage, { jobLoader } from "./components/pages/jobPage";
import AddPage from "./components/pages/addPage";

const App = () => {
  const [refreshKey, setRefreshKey] = useState(0);
  const bumpRefresh = () => setRefreshKey((k) => k + 1);

  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newJob),
    });
    bumpRefresh();
    return res;
  };

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, { method: "DELETE" });
    bumpRefresh();
    return res;
  };

  const restoreJob = async (job) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(job),
    });
    bumpRefresh();
    return res;
  };

  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(job),
    });
    bumpRefresh();
    return res;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage refreshKey={refreshKey} />} />
        <Route path="jobs" element={<JobsPage refreshKey={refreshKey} />} />
        <Route
          path="jobs/:id"
          element={<JobPage deleteJob={deleteJob} restoreJob={restoreJob} />}
          loader={jobLoader}
        />
        <Route
          path="jobs/edit/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route path="jobs/add" element={<AddPage addJobSubmit={addJob} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
