import React from "react";

import HeaderGnb from "shared/components/layout-ui/HeaderGnb";
import Footer from "shared/components/layout-ui/Footer";

import { AlertProvider } from "shared/components/alert/AlertContextProvider";
import { ConfirmProvider } from "shared/components/alert/ConfirmContextProvider";
import MenuProvider from "shared/components/menu/MenuProvider";

// import "./report-style.scss";
// import "/node_modules/react-grid-layout/css/styles.css";
// import "/node_modules/react-resizable/css/styles.css";
import MenuCheckerProvider from "shared/components/menu/MenuCheckerProvider";
import { Outlet } from "react-router-dom";

export default function Layout() {

    return (
        <MenuCheckerProvider>
            <MenuProvider>
                <ConfirmProvider>
                    <AlertProvider>
                        <div className="container">
                            <HeaderGnb />
                            <div className="main-content">
                                <Outlet />
                            </div>
                            <Footer />
                        </div>
                    </AlertProvider>
                </ConfirmProvider>
            </MenuProvider>
        </MenuCheckerProvider>
    );
}
