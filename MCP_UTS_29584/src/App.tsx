import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
/* import Menus from './pages/Menus'; */
import GebetApp from './pages/GebetApp';
import Target from './pages/Target';
import Profile from './pages/Profile';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonMenu contentId = 'main' >
          <IonHeader>
            <IonToolbar>
              <IonTitle>
                Gebetapp
              </IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonMenuToggle>
                <IonItem button routerLink = '/gebetan'>
                  <IonLabel>
                    Daftar Calon Gebetan
                  </IonLabel>
                </IonItem>
                <IonItem button routerLink = '/target'>
                  <IonLabel>
                    Target Gebetan
                  </IonLabel>
                </IonItem>
                <IonItem button routerLink = '/profile'>
                  <IonLabel>
                    Profile
                  </IonLabel>
                </IonItem>
              </IonMenuToggle>
            </IonList>
          </IonContent>
        </IonMenu>
        <IonRouterOutlet id = 'main'>
          {/* <Route path = '/menu'component = { Menus } /> */}
          <Route path = '/gebetan'  component = { GebetApp } />
          <Route path = '/target'  component = { Target }   />
          <Route path = '/profile' component = { Profile }  />
          <Route exact path="/" >
            <Redirect to="/gebetan" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  ); 
} 

export default App;
