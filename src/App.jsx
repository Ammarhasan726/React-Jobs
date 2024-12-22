import React from "react";
import HomePage from "./Pages/HomePage";
import MainLayout from "./Layouts/MainLayout";
import JobsPage from "./Pages/JobsPage";
import NotFoundPage from "./Pages/NotFoundPage";
import JobPage , {jobLoader} from "./Pages/JobPage";
import AddJobPage from "./Pages/AddJobPage";
import EditJobPage from "./Pages/EditJobPage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

  
function App() {
  //add new job
  const addJob= async (newJob)=>{
    const res=await fetch ('/api/jobs',{
      method:'POST',
      headers : {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(newJob)
    })
  return;
  };
  //Update Job
  const updateJob= async (job)=>{
    const res=await fetch (`/api/jobs/${job.id}`,{
      method:'PUT',
      headers : {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(job)
    })
  return;
  };
  //Delete Job
  const deleteJob = async(id)=>{
   const res = await fetch(`/api/jobs/${id}`,{
    method : 'DELETE'
   });
   return; 
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element ={<JobsPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/> 
        <Route path= '/edit-job/:id' element={<EditJobPage  updateJobSubmit={updateJob} />} loader={jobLoader}/> 
        <Route path= '/jobs/:id' element={<JobPage  deleteJob={deleteJob} />} loader={jobLoader}/> 
        <Route path= '/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/> 
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
