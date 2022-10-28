import React from 'react';
import { Outlet } from 'react-router-dom';

import PageWrapper from '../components/page-wrapper/PageWrapper';
import SkillsStack from '../components/skills-stack/SkillsStack';

const SkillsPage = (props: any) => {
    return (
        <PageWrapper>
            <Outlet />
        </PageWrapper>
    )
};

export default SkillsPage;