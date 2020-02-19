import React from "react";
import Button from "@material-ui/core/Button";
import { useLocation } from "react-router-dom";

///////////////////
/* function useQuery() {
  return new URLSearchParams(useLocation().search);
} */
const Dash = (props) => {
  console.log(props);

  // ******** Checks Querry for Search *********
  //
  /*   const {querry} = props.location;
  const {date,filter}  = querry */

  /** Logout Button Click Event -> Redirects to Home Page **/
  const handleClickEvent = () => {
    props.history.push("/");
  };

  const { userName, passWord } = props.match.params;
  //console.log(props)

  /* URL search params implementation */
  const usp = new URLSearchParams(useLocation().search);
  console.log(usp.get("name"));


  return (
    <div>
      <div className="container">
        <h4 className="center">DashBoard </h4>
        <p className="flow-text">
          Username: {userName}
          <hr />
          Password: {passWord}
        </p>
        <p className="flow-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          repudiandae repellat illo magni eligendi cupiditate voluptates eius
          nam voluptate. Incidunt nihil ullam quae quia officia quaerat,
          deserunt eligendi explicabo totam?
        </p>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClickEvent}
        >
          LogOut
        </Button>
      </div>
    </div>
  );
};

export default Dash;
