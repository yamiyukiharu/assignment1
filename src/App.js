
import { Routes, Route, Outlet } from 'react-router-dom';
import { Layout } from './components/layout/layout.component';
import SideBar from './components/side-bar/side-bar.component'
import TeamsPage from './routes/teams-page/teams-page.component';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<TeamsPage/>}/>
        <Route path='team' element={<div/>}/>
      </Route>
    </Routes>
  );
}

export default App;
