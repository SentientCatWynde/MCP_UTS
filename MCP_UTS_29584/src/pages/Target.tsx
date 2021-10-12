import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { heartDislikeCircleOutline } from "ionicons/icons";
import { useRef } from "react";
import FirstUser from "../components/FirstUser";
import Gender from "../components/Gender";
import EmptyTarget from './../components/EmptyTarget';
import { DISPLAY_DATA } from './Variables';

const Target: React.FC = () => {
    const slidingOptionRef = useRef<HTMLIonItemSlidingElement>(null);
    let temp = DISPLAY_DATA[0].id;

    const heartButtonHandler = () => {
        console.log('Heart Button Pressed...');
    }

    /* Check first data */
    

    /* const added */

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color = 'secondary'>
                    <IonButtons slot = 'start'>
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>
                        Target Gebetan
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent> 
                {/* Jika Target Kosong */}
                {/* <EmptyTarget/> */}
                { temp === 't1' && ( <EmptyTarget/> )}

                { temp !== 't1' && DISPLAY_DATA.map( p => (
                    <IonItemSliding key = { p.id } ref = { slidingOptionRef } class = 'ion-margin-horizontal'>
                        <IonItemOptions  side = 'end'>
                            <IonItemOption key = { p.id } color = 'danger' onClick = { heartButtonHandler } >
                                <IonIcon  icon = { heartDislikeCircleOutline } slot = 'icon-only' />
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
                                                <br></br>
                                                _____________________________________________
                                            </IonCol>
                                            <IonCol size = '6'>
                                                <Gender myGender = { p.gender } />
                                            </IonCol>
                                            {/* <IonCol size = '10'>
                                                <IonGrid>
                                                    <IonRow>
                                    
                                                    </IonRow>
                                                    <IonRow>
                                    
                                                    </IonRow>
                                                </IonGrid>
                                            </IonCol> */}
                                        </IonRow>
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
                                    
                                </IonCardContent>
                            </IonCard>
                        </IonItem>
                    </IonItemSliding>
                ) ) }
            </IonContent>
        </IonPage>
    );
}

export default Target;