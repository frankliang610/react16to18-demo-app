import { makeStyles } from '@material-ui/styles';

export const useListItemsCardStyles = makeStyles({
  card: {
    marginTop: 20,
    padding: 10,
    minHeight: 200,
    position: 'relative',
  },
  text: {
    maxWidth: '70%',
  },
  centered: {
    display: 'flex',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  searchAgainIcon: {
    width: 25,
    height: 25,
    marginBottom: 2,
    marginRight: 10,
  },
});
