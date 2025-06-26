import ReactDOM  from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.scss'
import HomePage from './views/Homepage/HomePage'
import PfButton from "./components/Button/Button";
import PfBreadcrumb from "./components/BreadCrumb/BreadCrumb";
// import PfForm from "./components/Form/Form";
import PfAccordion from "./components/Accordion/Accordion";
import PfCard from "./components/Card/Cards";
import PfTable from "./components/Table/Table";
import Dashboard from "./components/Dashboard/Dashboard";
// import 'redhat-brand-theme/dist/redhat-brand-theme.css';
import '/Users/hrithikgavankar/Desktop/WORK/Patternfly/rhds-theme/dist/redhat-brand-theme.css'
import './rhds-theme.css';

const AppRoutes = createBrowserRouter([{
  path: '/',
  element: <Dashboard/>,
  children:[
    {
      index: true,
      element: <HomePage/>
    },
    {
      path: "/home",
      element: <HomePage/>
    },
    {
      path: "/button",
      element: <PfButton/>
    },
    {
      path: "/breadcrumb",
      element: <PfBreadcrumb/>
    },
    {
      path: "/form",
      // element: <PfForm/>
    },
    {
      path: "/accordion",
      element: <PfAccordion/>
    },
    {
      path: "/card",
      element: <PfCard/>
    },
    {
      path: "/table",
      element: <PfTable/>
    }
  ]
}])

const root= ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<RouterProvider router={AppRoutes}/>)
