import { Grommet, Box, Button } from 'grommet'
import { Github } from 'grommet-icons'

import Head from '../components/Head'
import AppBar from '../components/AppBar'

const theme = {
  global: {
    font: {
      family: 'Open Sans',
      size: '14px',
      height: '20px'
    }
  }
}

const Home = () => (
  <Grommet theme={theme} full>
    <Head title="Home" />
    <AppBar />
    <Box fill justify="center" align="center">
      <Button
        primary
        icon={<Github />}
        label="Login with GitHub"
        color="neutral-1"
      />
    </Box>
  </Grommet>
)

export default Home
