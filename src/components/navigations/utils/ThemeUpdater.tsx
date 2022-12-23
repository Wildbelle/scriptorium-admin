import React, { FC } from 'react'

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { Button, MenuItem, Select, Typography } from '@mui/material'
import { useTheme } from 'next-themes'

const ThemeUpdater: FC<{}> = () => {
    const { theme, resolvedTheme, setTheme } = useTheme()
    const [monted, setMounted] = React.useState(false)

    React.useEffect(() => setMounted(true), [])

    if (!monted) return null

    return (
        <div>
            {/* <Typography variant="h4" gutterBottom>
                Persisted{' '}
                {resolvedTheme !== theme
                    ? `${theme} (${resolvedTheme})`
                    : theme}{' '}
                mode
            </Typography> */}
            {/* <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={theme}
                onChange={a => setTheme(a.target.value)}
            >
                <MenuItem value="system">System</MenuItem>
                <MenuItem value="light">Light</MenuItem>
                <MenuItem value="dark">Dark</MenuItem>
            </Select> */}
            <Button
                variant="unstyled"
                size="large"
                startIcon={<FiberManualRecordIcon />}
                onClick={() =>
                    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
                }
            >
                {resolvedTheme === 'light' ? 'Nox' : 'Lux'}
            </Button>
        </div>
    )
}

export default ThemeUpdater
