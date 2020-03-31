import React from 'react';
import posed from 'react-pose';

const Container = posed.div({
    enter: { opacity: 1 },
    exit: { opacity: 0 }
});

const PosedContainer = ({children}) => (
    <Container>
        {children}
    </Container>
);

export default PosedContainer;

