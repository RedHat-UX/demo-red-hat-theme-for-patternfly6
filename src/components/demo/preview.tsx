import React from 'react';
import {
    Toolbar,
    ToolbarItem,
    ToolbarContent,
    Title
} from '@patternfly/react-core';
import Table from '../Table/Table';

const Preview: React.FunctionComponent = () => {
    
    return (
        <>
            <div className='toolbar'>
                <Toolbar id="toolbar-items-example">
                    <ToolbarContent>
                        <ToolbarItem>
                            <img src="../src/assets/redhat-icon.svg" alt="Red Hat logo" />
                        </ToolbarItem>
                        <ToolbarItem>
                            <p>Red Hat Brand Theme</p>
                        </ToolbarItem>
                    </ToolbarContent>
                </Toolbar>
            </div>
            <div className='container'>
              <Title headingLevel="h1">Red Hat Branded Theme for Patternfly 6</Title>
              <Table></Table>
            </div>
        </>
    );
};

export default Preview; 