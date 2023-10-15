import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./default.scss";
import { checkUserSession } from "./redux/User/user.actions";
import { useDispatch } from "react-redux";

// componenents
import AdminToolbar from "./components/AdminToolbar";

//hoc
import WithAuth from "./hoc/withAuth";

//layouts
import MainLayout from "./layouts/MainLayout";
import HomepageLayout from "./layouts/HomePageLayout";
import AdminLayout from "./layouts/AdminLayout";
import DashBoardLayout from "./layouts/DashboardLayout";

// pages
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Recovery from "./pages/Recovery";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import WithAdminAuth from "./hoc/withAdminAuth";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  });

  return (
    <div className="App">
      <AdminToolbar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )}
        />
        <Route
        exact
        path='/search'
        render={() => (
          <MainLayout>
            <Search />
          </MainLayout>
        )}
        />
        <Route
        exact
        path='/search/:filterType'
        render={() => (
          <MainLayout>
            <Search />
          </MainLayout>
        )}
        />
        <Route
        exact
        path='/product/:productID'
        render={() => (
          <MainLayout>
            <ProductDetails />
          </MainLayout>
        )}
        />
        <Route
        exact
        path='/cart'
        render={() => (
          <MainLayout>
            <Cart />
          </MainLayout>
        )}
        />
        <Route
        exact
        path='/payment'
        render={() => (
          <WithAuth>
            <MainLayout>
              <Payment />
            </MainLayout>
          </WithAuth>
        )}
        />
        <Route
          exact
          path="/registration"
          render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}
        />
        <Route
          exact
          path="/login"
          render={() => (
            <MainLayout>
              <Login />
            </MainLayout>
          )}
        />
        <Route
          exact
          path="/recovery"
          render={() => (
            <MainLayout>
              <Recovery />
            </MainLayout>
          )}
        />
        <Route
          exact
          path="/dashboard"
          render={() => (
            <WithAuth>
              <DashBoardLayout>
                <Dashboard />
              </DashBoardLayout>
            </WithAuth>
          )}
        />
        <Route
          exact
          path="/admin"
          render={() => (
            <WithAdminAuth>
              <AdminLayout>
                <Admin />
              </AdminLayout>
            </WithAdminAuth>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
