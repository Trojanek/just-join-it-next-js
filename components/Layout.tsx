import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Logo from '../svgs/logo.svg';
import Link from './Link';

const JJLogo = styled(Logo)({
  width: 120,
});

interface LayoutProps {
  children: any
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <AppBar color="inherit">
      <Toolbar>
        <Box
          display="flex"
          flex="1 1 100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link href="/">
            <JJLogo />
          </Link>
          <Box display="flex">
            <Box ml={3} fontWeight="fontWeightMedium">
              <Link href="/landing-page">
                Landing Page
              </Link>
            </Box>
            <Box ml={3} fontWeight="fontWeightMedium">
              <Link href="/ssr">
                Server-side Rendering
              </Link>
            </Box>
            <Box ml={3} fontWeight="fontWeightMedium">
              <Link href="/static-generation">
                Static Generation
              </Link>
            </Box>
            <Box ml={3} fontWeight="fontWeightMedium">
              <Link href="/spa">
                Single Page App
              </Link>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
    <Toolbar />
    <Container maxWidth={false}>
      <Box my={4}>
        {children}
      </Box>
    </Container>
  </>
);

export default Layout;
