import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { getViewIdeaRoute, getAllIdeasRoute, viewRouteParams } from './lib/routes'
import { TrpcProvider } from './lib/trpc'
import { AllIdeasPage } from './pages/AllIdeasPage'
import { ViewIdeaPage } from './pages/ViewIdeaPage'

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path={getAllIdeasRoute()} element={<AllIdeasPage />} />
          <Route path={getViewIdeaRoute(viewRouteParams)} element={<ViewIdeaPage />} />
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}
