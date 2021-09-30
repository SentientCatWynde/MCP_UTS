import { IonRouterOutlet } from "@ionic/react";
import Target from '../pages/Target';
import Profile from '../pages/Profile';
import GebetApp from '../pages/GebetApp';
import { Redirect, Route } from "react-router";

const Menus: React.FC = () => {
    return (
        <>
            <IonRouterOutlet>
                <Route path = '/menu'>
                    <Redirect to = '/menu/gebetan' />
                </Route>
                <Route path = 'menu/gebetan'  component = { GebetApp } />
                <Route path = '/menu/target'  component = { Target }   />
                <Route path = '/menu/profile' component = { Profile }  />
            </IonRouterOutlet>
        </>
    );
}

export default Menus;