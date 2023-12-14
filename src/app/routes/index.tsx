import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Login } from "../pages/login/Login";

//component que retonar as minhas rotas
export const Rotas = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/entrar" element={<Login/>} />
                <Route path="/pagina-inicial" element={<Dashboard/>}/>

                <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>
            </Switch>
        
        </BrowserRouter>
    );
}