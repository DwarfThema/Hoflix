import React from "react";
import TVPresenter from "./TVPresenter";

export default class extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingTodya: null,
    error: null,
    loading: true,
  };
  render() {
    const { topRated, popular, airingTodya, error, loading } = this.state;
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingTodya={airingTodya}
        error={error}
        loading={loading}
      />
    );
  }
}
