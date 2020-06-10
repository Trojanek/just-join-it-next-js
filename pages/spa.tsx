import { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import OffersList from 'components/OffersList';

const JobboardSPA = () => {
  const [offers, setOffers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://justjoin.it/api/offers');
      const json = await res.json();
      setOffers(json);
    };

    fetchData();
  }, []);

  return (
    <>
      <Typography variant="h6">
        Single Page App
      </Typography>
      {offers
        ? <OffersList offers={offers} />
        : <Typography>loading...</Typography>}
    </>
  );
};

export default JobboardSPA;
