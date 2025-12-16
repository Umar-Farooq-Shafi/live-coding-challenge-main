export const useApi = () => {
  const jobs = useState('jobs', () => [])
  const loading = useState('jobs-loading', () => false)
  const error = useState('jobs-error', () => null);

  const config = useRuntimeConfig()

  const getJobs = async (page = 1) => {
    loading.value = true
    error.value = null

    try {
      const response = await $fetch(`${config.public.apiBase}/api/v1/jobs`, {
        query: {
          page,
          include: ['photos', 'author', 'category']
        }
      })

      jobs.value = response.data ?? response
      return response
    } catch (err) {
      error.value = err
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    jobs,
    loading,
    error,
    getJobs
  }
}
