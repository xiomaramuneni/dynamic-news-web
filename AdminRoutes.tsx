
import { Route, Routes } from 'react-router-dom'
import AddNews from '../Pages/Admin/AddNews'
import Dashbord from '../Pages/Admin/Dashbord'

const AdminRoutes = () => {
  return (
    <Routes>
        <Route index element={<Dashbord/>} />
        <Route path='/create-news' element={<AddNews/>} />
    </Routes>
  )
}

export default AdminRoutes