import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { IconButton, Stack } from '@mui/material'

function SocialNetworks() {
    return (
        <Stack direction="row" spacing="24px" paddingBottom="24px">
            <IconButton>
                <FacebookRoundedIcon />
            </IconButton>
            <IconButton>
                <InstagramIcon />
            </IconButton>
            <IconButton>
                <LinkedInIcon />
            </IconButton>
        </Stack>
    )
}

export default SocialNetworks
