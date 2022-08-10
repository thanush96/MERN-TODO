import React from "react";
import { Card, CardActions, Button, Typography } from "@material-ui/core/";
import Favourite from "@material-ui/icons/Favorite";
import Normal from "@material-ui/icons/FavoriteBorder";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";
import { useDispatch } from "react-redux";

import { favouritePost, deletePost } from "../../../actions/posts";
import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Button
        size="small"
        color="primary"
        onClick={() => dispatch(favouritePost(post._id))}
      >
        {post.favourite ? (
          <Favourite fontSize="small" />
        ) : (
          <Normal fontSize="small" color="red" />
        )}
      </Button>

      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {post.title}
      </Typography>

      <CardActions className={classes.cardActions}>
        <Button
          style={{ color: "red" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          edit
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize="small" /> Remove
        </Button>
      </CardActions>

      <Typography
        className={classes.title}
        gutterBottom
        variant="p"
        component="p"
      >
        {moment(post.createdAt).fromNow()}
      </Typography>
    </Card>
  );
};

export default Post;
