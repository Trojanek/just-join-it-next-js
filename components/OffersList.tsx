import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Offer from 'types/Offer';
import Offers from 'types/Offers';

const MAX_OFFERS = 25;

interface OffersListProps {
  offers: Offers;
}

const getSecondaryText = (offer: Offer): string => {
  const salary = offer.salary_from && offer.salary_to
    ? `${offer.salary_from} - ${offer.salary_to} ${offer.salary_currency.toUpperCase()}, `
    : '';
  return ` ${salary}${offer.company_name}`;
};

const OffersList = ({ offers }: OffersListProps) => (
  <>
    <Typography variant="body1" paragraph>
      {`Showing ${MAX_OFFERS} out of ${offers.length} offers`}
    </Typography>
    <List>
      {offers.splice(0, MAX_OFFERS).map((offer) => (
        <ListItem
          key={offer.id}
          divider
          disableGutters
        >
          <ListItemText
            primary={offer.title}
            secondary={(
              <>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  {offer.city},
                </Typography>
                <Typography
                  component="span"
                  variant="body2"
                  color="textSecondary"
                >
                  {getSecondaryText(offer)}
                </Typography>
              </>
            )}
          />
        </ListItem>
      ))}
    </List>
  </>
);

export default OffersList;
