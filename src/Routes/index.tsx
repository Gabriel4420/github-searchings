import { Route, Routes } from 'react-router-dom'
import { Footer } from '../components/templates/Footer'
import { Header } from '../components/templates/Header'
import { EspecifySearch } from '../pages/EspecifySearch'
import { SearchByRelated } from '../pages/searchByRelated'

export function Routers() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SearchByRelated />} />
        <Route path="/use-filters" element={<EspecifySearch />} />
      </Routes>
      <Footer />
    </>
  )
}
