import React, { Component } from "react";
import Router from "Components/Router";
import GlobalStyles from "Components/GlobalStyles";
import Helmet from "react-helmet";

class App extends Component {
  render() {
    return (
      <>
        <Helmet>
          <link
            rel="shortcut icon"
            href="https://dh.aks.ac.kr/Edu/wiki/images/b/ba/%EB%AF%B8%EC%86%8C.jpeg"
          />
        </Helmet>
        <Router />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
