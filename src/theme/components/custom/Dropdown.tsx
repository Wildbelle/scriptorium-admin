import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box, Icon, Typography } from '@mui/material'

interface DropdownProps {
    icon?: JSX.Element
    label: string
    isOpen: boolean
    callback: () => void
    sx?: React.CSSProperties
}

const Dropdown = ({ icon = null, label, isOpen, callback, sx = null }) => {
    return (
        <Box
            sx={{ display: 'flex', alignItems: 'center', gap: '8px', ...sx }}
            onClick={callback}
        >
            {icon}
            <Typography variant="textMdRegular">{label}</Typography>
            {isOpen ? (
                <Icon
                    translate="yes"
                    sx={{
                        width: 'fit-content',
                        height: 'fit-content',
                    }}
                >
                    <ExpandMoreIcon
                        sx={{
                            fontSize: '24px',
                        }}
                    />
                </Icon>
            ) : (
                <Icon
                    sx={{
                        width: 'fit-content',
                        height: 'fit-content',
                    }}
                >
                    <ExpandLessIcon
                        sx={{
                            fontSize: '24px',
                        }}
                    />
                </Icon>
            )}
        </Box>
    )
}

export default Dropdown
