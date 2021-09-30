import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import EmptyTarget from './../components/EmptyTarget';

const Target: React.FC = () => {
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
                <EmptyTarget/>
            </IonContent>
        </IonPage>
    );
}

export default Target;