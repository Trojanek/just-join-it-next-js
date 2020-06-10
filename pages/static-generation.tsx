import { GetStaticProps } from 'next';
import Typography from '@material-ui/core/Typography';
import Offers from 'types/Offers';
import OffersList from 'components/OffersList';

interface JobboardStaticProps {
  offers: Offers;
}

const JobboardStatic = ({ offers }: JobboardStaticProps) => (
  <>
    <Typography>
      <code>getStaticProps</code>
    </Typography>
    <Typography variant="h6">
      Static Generation
    </Typography>
    <OffersList offers={offers} />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://justjoin.it/api/offers');
  const json = await res.json();

  return {
    props: {
      offers: json,
    },
  };
};

export default JobboardStatic;
