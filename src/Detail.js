import React from "react";
import { Query } from "react-apollo";
import { GET_DETAIL } from "./queries";

const detail = ({ match }) => {
    console.log(match.params);
  const {movieId} = match.params;
  const intedMovieId = parseInt(movieId);
  return (
    <Query query={GET_DETAIL} variables={{movieId: intedMovieId}}>
      {({ loading, error, data }) => {
        if (loading) return <span>loading</span>;
        if (error) return <span>error!!!!</span>;
        return (
            <div>
            {data.movie.title}
            {data.movie.medium_cover_image}
        </div>
        );
      }}
    </Query>
  );
};
export default detail;
