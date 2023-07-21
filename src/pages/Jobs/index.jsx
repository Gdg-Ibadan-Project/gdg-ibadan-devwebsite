import { Box, Stack,} from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import Hero from './components/Hero'
import JobCard from './components/JobCard'
import Filters from './components/Filters'
import axios from 'axios'

const index = () => {
  const [jobs, setJobs] = useState([]);

  const getJobs = async () => {
    const url = `https://findwork.dev/api/jobs/`
    const token = '82129fb1c2a18bc72a949b595fd961125f213091'
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Token ${token}`
        }
      });
      const data = await response.data;
      console.log(response.data);
      setJobs(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getJobs();
  }, []);

  console.log();

  return (
    <Box>
      <Hero />
      <Stack w={['90%', '80%']} mx='auto' direction='row' justifyContent='space-between'>
        <Filters />
        <JobCard />
      </Stack>
    </Box>
  )
}

export default index