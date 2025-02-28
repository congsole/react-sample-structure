import React from "react";
import { Navigate } from "react-router-dom";

const defaultServiceId = 1;
const defaultPage = 1;

const AimcMain: React.FC = ()=> {
    return <Navigate to={`/aimc/${defaultServiceId}/${defaultPage}`} replace />;
}

export default AimcMain;