
import Hero from '../hero'
import Card from '../card'
import JobListing from '../jobListing'
import ViewAllJobs from '../ViewAllJobs'
const HomePage = ({refreshKey}) => {
  return (
    <>
    <Hero/>
     <Card>
        <h2 className="text-2xl font-bold">For Developers</h2>
        <p className="mt-2 mb-4">
          Browse our React jobs and start your career today
        </p>
      </Card>
    <JobListing isHome={true} refreshKey={refreshKey} />
    <ViewAllJobs/>
    </>
  )
}

export default HomePage