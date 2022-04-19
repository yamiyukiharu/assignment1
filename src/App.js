import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/layout.component';
import TeamsPage from './routes/teams-page/teams-page.component';
import { getCurrentUserData } from './utils/backend/backend.utils';
import { setCurrentUser } from './store/user/user.actions'

export const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const getCurrentUser = async () => {
      const currentUser = await getCurrentUserData()
      dispatch(setCurrentUser(currentUser))
    }
    getCurrentUser();
  }, [dispatch])
  

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<TeamsPage/>}/>
        <Route path='home' element={<div/>}/>
        <Route path='campaigns' element={<div/>}/>
        <Route path='teams' element={<TeamsPage/>}/>
        <Route path='leads' element={<div/>}/>
        <Route path='reports' element={<div/>}/>
        <Route path='help' element={<div/>}/>
      </Route>
    </Routes>
  );
}

export default App;
