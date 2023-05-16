import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Notifications } from '@mantine/notifications'
import Router from 'router'

export const queryClient = new QueryClient({
  defaultOptions: { queries: { retryDelay: 15000, refetchOnWindowFocus: false } },
})

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Notifications position='top-right' />
        <Router />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter >
  )
}

export default AppWrapper
