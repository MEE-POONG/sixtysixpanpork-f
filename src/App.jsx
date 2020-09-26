
import React, { Suspense } from "react";
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import routes from './routes'
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
export default function App() {
  // document.documentElement.classList.remove("nav-open");
  // React.useEffect(() => {
  //   document.body.classList.add("index");
  //   return function cleanup() {
  //     document.body.classList.remove("index");
  //   };
  // });
  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  )
  return (
    <>
      <IndexNavbar />
      <div className="main">
      {/* <img className="bg-q" src={require('./assets/img/bgq.png')} alt="test"/> */}

      <Suspense fallback={loading}>
        <Switch>
            {routes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                      <route.component {...props} />
                  )} />
              )
            })}
            <Redirect from="/" to="/home" />
          </Switch>
      </Suspense>
      </div>
    </>
  );
}