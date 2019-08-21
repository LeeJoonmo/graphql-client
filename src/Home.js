import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";
import {Link} from "react-router-dom";

export default () => {
  return (
    <Query query={HOME_PAGE}>
      {({ loading, data, error }) => {
        if (loading) return <span>loading</span>;
        if (error) return <span>error!!!!</span>;
        return data.movies.map((movie, index) => (
          <div  key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <h2>
                {movie.title}/{movie.rating}
              </h2>
            </Link>
          </div>
        ));
      }}
    </Query>
  );
};
