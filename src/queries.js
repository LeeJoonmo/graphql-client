import gql from "graphql-tag";

export const HOME_PAGE = gql`
    {
        movies{
            id
            title
            genres
            rating
        }
    }
`;

export const GET_DETAIL = gql`
    query getMovieDetails($movieId: Int!){
        movie(id: $movieId){
            medium_cover_image
            title
            rating
            description_intro
            language
            genres
        }
        suggestions(id: $movieId){
            medium_cover_image
            title
            rating
        }
    }
`;
