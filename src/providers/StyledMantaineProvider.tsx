import React from 'react'
import { MantineProvider } from '@mantine/core'

import '@mantine/core/styles/default-css-variables.css';
import '@mantine/core/styles/Popover.css';
import '@mantine/core/styles/Input.css';
import '@mantine/core/styles/Button.css';
import '@mantine/core/styles/Paper.css';
import '@mantine/core/styles/ScrollArea.css';
import '@mantine/core/styles/Typography.css';
import '@mantine/dates/styles.css';


interface StyledMantaineProviderProps {
    children: React.ReactNode
}

const StyledMantaineProvider: React.FC<StyledMantaineProviderProps> = ({ children }) => {
    return (
        <MantineProvider withGlobalClasses={false}>
            {children}
        </MantineProvider>
    )
}

export default StyledMantaineProvider