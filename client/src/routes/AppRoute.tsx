import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import PostInventoryPage from '../pages/PostInventoryPage';
import PostCreatePage from '../pages/PostCreatePage';
import SignupPage from '../pages/SignupPage';
import PostDetailPage from '../pages/PostDetailPage';
import MyPageRoute from './MyPageRoute';

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/intro" element={<div>test</div>} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/generation/:age" element={<PostInventoryPage />} />
      <Route path="/post/create" element={<PostCreatePage />} />
      <Route path="/post/edit/:id" element={<PostCreatePage />} />
      <Route path="/post/view/:id" element={<PostDetailPage />} />
      <Route path="/my/*" element={<MyPageRoute />} />
    </Routes>
  );
}

export default AppRoute;
