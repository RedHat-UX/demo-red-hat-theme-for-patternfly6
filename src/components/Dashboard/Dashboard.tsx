import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  Nav,
  NavList,
  NavItem,
  Toolbar,
  ToolbarItem,
  ToolbarContent,
  Title
} from '@patternfly/react-core';
import { 
  TableIcon, 
  LayerGroupIcon, 
  ListIcon, 
  CreditCardIcon,
  ClipboardListIcon,
  HomeIcon
} from '@patternfly/react-icons';
import './Dashboard.scss';

interface NavigationItem {
  path: string;
  title: string;
  icon: React.ComponentType;
}

const navigationItems: NavigationItem[] = [
  {
    path: "/home",
    title: "Home",
    icon: HomeIcon
  },
  {
    path: "/button",
    title: "Button",
    icon: LayerGroupIcon
  },
  {
    path: "/breadcrumb", 
    title: "BreadCrumb",
    icon: ListIcon
  },
  {
    path: "/accordion",
    title: "Accordion",
    icon: ClipboardListIcon
  },
  {
    path: "/card",
    title: "Card",
    icon: CreditCardIcon
  },
  {
    path: "/table",
    title: "Table",
    icon: TableIcon
  }
];

const Dashboard: React.FunctionComponent = () => {
  const location = useLocation();

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <Toolbar id="dashboard-toolbar">
          <ToolbarContent>
            <ToolbarItem>
              <img src="/src/assets/redhat-icon.svg" alt="Red Hat logo" />
            </ToolbarItem>
            <ToolbarItem>
              <Title headingLevel="h4" className="dashboard-title">
                Red Hat Brand Theme for PatternFly 6
              </Title>
            </ToolbarItem>
          </ToolbarContent>
        </Toolbar>
      </header>

      <div className="dashboard-body">
        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <Nav id="dashboard-nav">
            <NavList>
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <NavItem
                    key={item.path}
                    isActive={location.pathname === item.path || (location.pathname === '/' && item.path === '/home')}
                  >
                    <Link to={item.path} className="nav-link">
                      <IconComponent />
                      <span className="nav-text">{item.title}</span>
                    </Link>
                  </NavItem>
                );
              })}
            </NavList>
          </Nav>
        </aside>

        {/* Main Content */}
        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard; 