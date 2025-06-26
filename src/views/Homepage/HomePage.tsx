import { FC } from "react";
import { 
  Title, 
  Grid,
  GridItem,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
} from '@patternfly/react-core';
import { Link } from 'react-router-dom';

const allComponents = [
  {
    path: "/button",
    title: "Button",
    description: "Explore different button variations and states"
  },
  {
    path: "/breadcrumb",
    title: "BreadCrumb",
    description: "Navigation breadcrumb component examples"
  },
  {
    path: "/accordion",
    title: "Accordion",
    description: "Collapsible content panels"
  },
  {
    path: "/card",
    title: "Card",
    description: "Various card layouts and configurations"
  },
  {
    path: "/table",
    title: "Table",
    description: "Data table with sorting, filtering, and actions"
  }
];

const HomePage: FC = () => {
  return (
    <div className="homepage">
      <div className="homepage-header">
        <Title headingLevel="h1" size="2xl" className="homepage-title">
          Red Hat Branded Theme for PatternFly 6
        </Title>
        <p className="homepage-subtitle">
          Explore PatternFly components styled with Red Hat's brand theme. 
          Navigate through different components using the sidebar menu.
        </p>
      </div>

      <div className="homepage-components">
        <Title headingLevel="h2" size="xl" className="section-title">
          Available Components
        </Title>
        
        <Grid hasGutter>
          {allComponents.map((component) => (
            <GridItem key={component.path} span={6} lg={4}>
              <Card isClickable isCompact>
                <CardHeader>
                  <CardTitle>
                    <Link to={component.path} className="component-link">
                      {component.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <p>{component.description}</p>
                </CardBody>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </div>

      {/* <div className="homepage-preview">
        <Title headingLevel="h2" size="xl" className="section-title">
          Component Preview - Table
        </Title>
        <Table />
      </div> */}
    </div>
  );
};

export default HomePage;