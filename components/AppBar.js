import { Box, Heading, Button } from 'grommet'
import { Login } from 'grommet-icons'

const AppBar = () => (
  <Box
    tag="nav"
    direction="row"
    align="center"
    justify="between"
    background="dark-1"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    style={{ zIndex: 1 }}
  >
    <Heading level="1" size="small" margin="none" color="light">
      Doorman
    </Heading>
    <Button icon={<Login />} label="Login" color="inherit" path="/login" />
  </Box>
)

export default AppBar
