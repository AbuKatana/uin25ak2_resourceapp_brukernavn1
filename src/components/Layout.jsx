import Nav from './Nav';
import PageTitle from './PageTitle';
import { Outlet } from 'react-router-dom';
import '../styles/main.scss';

export default function Layout() {
  return (
    <main className="container">
        <PageTitle title="Ressursarkiv" />
        <Nav />
        <Outlet />
    </main>
  );
}

