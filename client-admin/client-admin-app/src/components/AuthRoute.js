import { Route } from "react-router-dom";
import RequireAuth from "./RequireAuth";

export default function AuthRoute({ path, element}) {
    <Route
    path={path}
    element={
        <RequireAuth>
            {element}
        </RequireAuth>
    }
    ></Route>
}