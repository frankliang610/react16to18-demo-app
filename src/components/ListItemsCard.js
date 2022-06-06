import React from 'react';
import {
  ListItemSecondaryAction,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Typography,
  List,
  SvgIcon,
  Box,
  CircularProgress,
} from '@material-ui/core';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SearchAgainIcon from '@material-ui/icons/YoutubeSearchedFor';
import Card from '@material-ui/core/Card';
import { isEmpty, isNil } from 'lodash';
import { useListItemsCardStyles } from './styles';

const ListRow = ({ name, description, icon }) => {
  const classes = useListItemsCardStyles();

  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <SvgIcon>{icon}</SvgIcon>
        </ListItemAvatar>
        <ListItemText
          className={classes.text}
          primary={name}
          secondary={
            <React.Fragment>
              <Typography component='span' variant='body2' color='textPrimary'>
                {name}
              </Typography>
              {description}
            </React.Fragment>
          }
        />
        <ListItemSecondaryAction>
          <IconButton>
            <EditIcon color='primary' />
          </IconButton>
          <IconButton>
            <DeleteIcon color='primary' />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </>
  );
};

const Centered = ({ children }) => {
  const classes = useListItemsCardStyles();

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      className={classes.centered}
    >
      {children}
    </Box>
  );
};
const EmptyState = () => {
  const classes = useListItemsCardStyles();

  return (
    <Centered>
      <SearchAgainIcon className={classes.searchAgainIcon} />
      <Typography variant='h6'>No Matches found</Typography>
    </Centered>
  );
};

const LoadingState = () => {
  return (
    <Centered>
      <CircularProgress />
    </Centered>
  );
};

const ListItemsCard = ({ data, icon }) => {
  const classes = useListItemsCardStyles();

  let component;

  if (isNil(data)) {
    component = <LoadingState />;
  } else if (isEmpty(data)) {
    component = <EmptyState />;
  } else {
    component = (
      <List>
        {data.map((d) => (
          <ListRow
            key={d.key}
            name={d.name}
            description={d.description}
            icon={icon}
          />
        ))}
      </List>
    );
  }

  return (
    <Card raised className={classes.card}>
      {component}
    </Card>
  );
};

export default ListItemsCard;
