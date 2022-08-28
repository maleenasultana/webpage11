import { Container, makeStyles } from "@material-ui/core";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Post title="Perfect place to Shop" img="https://th.bing.com/th/id/OIP.4w0XtC1Qkk2t4-QbmCxynQHaE9?w=269&h=180&c=7&r=0&o=5&pid=1.7"/>
      <Post title="Simply Best Recipies" img="https://th.bing.com/th/id/OIP.3FHEYE24p1rlvisY9jIXUAHaHa?w=220&h=196&c=7&r=0&o=5&pid=1.7"/>
      <Post title="Travel Blog" img="https://th.bing.com/th/id/OIP.Lh9VE1z6hx6OLwHyzfALxwHaEo?w=316&h=187&c=7&r=0&o=5&pid=1.7"/>
      <Post title="Dinning Places" img="https://images.pexels.com/photos/7245477/pexels-photo-7245477.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post title="Travel Guide" img="https://th.bing.com/th/id/OIP.Lxg3aBKuT3MP2x5MT_MhzAHaEo?w=286&h=180&c=7&r=0&o=5&pid=1.7"/>
      <Post title="Best Family Times" img="https://th.bing.com/th/id/OIP.-2xnnFn697mBLbephdHjWwHaEK?w=317&h=180&c=7&r=0&o=5&pid=1.7"/>
    </Container>
  );
};

export default Feed;