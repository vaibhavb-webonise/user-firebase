import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setUser, deleteUser } from '../redux';
import { db } from '../style/firebase';
import '../style/users.css';
function Users(props) {
  const userArray = props.users;

  useEffect(() => {
    db.collection('user').onSnapshot((snap) => {
      const userList = snap.docs.map((doc) => ({
        userObj: doc.data(),
        id: doc.id,
      }));
      setUser(userList);
    });
  }, []);

  console.log('redux store values are ==>', props.users);

  return (
    <div>
      <ul className="list">
        {false && `The user list is as follows`}
        {userArray.map((user) => (
          <List className="listitem">
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={user.name}
                secondary={`Village is ${user.village} contact is ${user.contact}`}
              />
              <Button
                id="btndel"
                color="secondary"
                variant="contained"
                onClick={() => props.deleteUser(user.id)}
              >
                Delete User
              </Button>
            </ListItem>
          </List>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { users: state };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (userId) => dispatch(deleteUser(userId)),
    setUser: (user) => dispatch(setUser(user)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
