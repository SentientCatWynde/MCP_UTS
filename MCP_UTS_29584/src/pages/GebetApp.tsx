import { 
    IonButtons, 
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardSubtitle, 
    IonCardTitle, 
    IonCol, 
    IonContent, 
    IonGrid, 
    IonHeader, 
    IonIcon, 
    IonItem, 
    IonItemOption, 
    IonItemOptions, 
    IonItemSliding, 
    IonLabel, 
    IonMenuButton, 
    IonPage, 
    IonRow, 
    IonTitle, 
    IonToolbar 
} from "@ionic/react";

import FirstUser from "../components/FirstUser";
import Gender from "../components/Gender";
import { PERSON_DATA } from "./Variables";
import { heart } from "ionicons/icons";
import { useRef } from "react";

const GebetApp: React.FC = () => {
    const slidingOptionRef = useRef<HTMLIonItemSlidingElement>(null);

    const heartButtonHandler = () => {
        console.log('Heart Button Pressed...');
        
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color = 'secondary' >
                    <IonButtons slot = 'start' >
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>
                        GebetApp
                        
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent class = 'ion-padding'>
                
                { PERSON_DATA.map( p => (
                    <IonItemSliding key = { p.id } ref = { slidingOptionRef } class = 'ion-margin-horizontal'>
                        <IonItemOptions  side = 'end'>
                            <IonItemOption key = { p.id } color = 'danger' onClick = { heartButtonHandler } >
                                <IonIcon  icon = { heart } slot = 'icon-only' />
                            </IonItemOption>
                        </IonItemOptions>
                        <IonItem key = { p.id } > 
                            <IonCard key = { p.id } color = 'primary'  >
                                <IonCardHeader class = 'ion-mrgin-horizontal'>
                                    <IonCardTitle class = 'ion-text-left'>
                                        <h1>{ p.name }</h1>
                                    </IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent className = 'ion-text-center' >
                                    
                                    <IonGrid >
                                        <IonRow>
                                            {/* <IonCol size = '1' ></IonCol> */}
                                            <IonCol size = '6'>
                                            {/* First User Image */}
                                                <FirstUser/>
                                            </IonCol>
                                            <IonCol size = '6'>
                                                <Gender myGender = { p.gender } />
                                            </IonCol>
                                            <IonCol size = '10'>
                                                <IonGrid>
                                                    <IonRow>
                                    <IonLabel class = 'ion-text-left' >
                                        <h2>{ p.desc }</h2>
                                    </IonLabel>
                                                    </IonRow>
                                                    <IonRow>
                                    <IonCardSubtitle>
                                        <h3>
                                        { p.gender === 'male' ? 'Male' : (p.gender === 'female' ) ? 'Female' : p.gender } 
                                        </h3>
                                    </IonCardSubtitle>
                                                    </IonRow>
                                                </IonGrid>
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                    
                                </IonCardContent>
                            </IonCard>
                        </IonItem>
                    </IonItemSliding>
                ) ) }
            </IonContent>
        </IonPage>
    );
}

export default GebetApp;