import React, { useContext } from "react";
import CustomAllPosts from "../components/CustomAllPosts";
import { Grid } from "semantic-ui-react";
import CustomHeader from "../components/CustomHeader";
import CustomPostForm from "../components/CustomPostForm";
import CentralContext from "../context/CentralContext";
import 'semantic-ui-css/semantic.min.css'

function Central() {
  const { loggedUser, allPosts, isFetching, createPost, createUpvote } = useContext(CentralContext);

  if (isFetching) return <span>Carregando...</span>;
  else return (
    <div>
      <h3>Seja bem vindo <span style={{ color: "blue"}}>{loggedUser.username}</span>!</h3>
      <Grid
        textAlign="center"
        style={{ height: "30vh" }}
        verticalAlign="middle"
        
      >
        <Grid.Column style={{ maxWidth: 1600, borderRadius: 20 }}>
          <CustomHeader message="Segware Book" />
          <CustomPostForm createPost={createPost} />
          <CustomAllPosts loggedUser={loggedUser} allPosts={allPosts} isFetching={isFetching} createUpvote={createUpvote} />
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Central;
