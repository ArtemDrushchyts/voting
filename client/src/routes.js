import { LOGIN_ROUTE, REGISTRATION_ROUTE, SURVEY_PAGE } from "./utils/consts";
import Auth from './pages/Auth';
import Survey from "./pages/Survey";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: SURVEY_PAGE,
        Component: Survey
    }
]