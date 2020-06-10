import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from 'components/Link';

const LandingPage = () => (
  <>
    <Typography variant="h6">
      Landing page
    </Typography>
    <Box>
      <Link href="/landing-page/second-landing-page">
        Go to second landing page
      </Link>
    </Box>
    <Box>
      <img
        src="/assets/infographic.png"
        alt="infographic"
      />
    </Box>
  </>
);

export default LandingPage;
