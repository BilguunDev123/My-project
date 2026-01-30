import React from 'react'
import Card from'./card'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <Card>
          
            <h2 className="text-2xl font-bold"></h2>
            <p className="mt-2 mb-4">
              
            </p>
            <Link
              to="/jobs"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Jobs
            </Link>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold">For Employers</h2>
            <p className="mt-2 mb-4">
              List your job to find perfect developer for the role
            </p>
            <Link
              to="/jobs"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Jobs
            </Link>
          </Card>
        </div>
      
    </section>
  );
}

export default Home