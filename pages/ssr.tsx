import { GetServerSideProps } from 'next';
import Typography from '@material-ui/core/Typography';
import Offers from 'types/Offers';
import OffersList from 'components/OffersList';

interface JobboardSSRProps {
  offers: Offers;
}

const JobboardSSR = ({ offers }: JobboardSSRProps) => (
  <>
    <Typography>
      <code>getServerSideProps</code>
    </Typography>
    <Typography variant="h6">
      Server-side Rendering
    </Typography>
    <OffersList offers={offers} />
  </>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://justjoin.it/api/offers');
  const json = await res.json();

  return {
    props: {
      offers: json,
    },
  };
};

export default JobboardSSR;
