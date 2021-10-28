import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
  state = {
    movieResults: null,
    TVResults: null,
    serchTerm: "",
    loading: false,
    error: null,
  };
  render() {
    const { movieResults, TVResults, serchTerm, loading, error } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        TVResults={TVResults}
        serchTerm={serchTerm}
        loading={loading}
        error={error}
      />
    );
  }
}
