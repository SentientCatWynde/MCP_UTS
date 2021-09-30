import { IonButton, IonCol, IonGrid, IonRow, IonTitle } from "@ionic/react";

const EmptyTarget: React.FC = () => {
    return (
        <>
        <br></br>
            <IonTitle class = 'ion-padding ion-text-center'>
                Anda belum punya target gebetan
            </IonTitle>
            <IonGrid>
                <IonRow>
                    <IonCol size = '4'></IonCol>
                    <IonCol size = '4'>
                        <IonButton routerLink = '/gebetan' class = 'ion-text-center'>
                            Cari Gebetan 
                        </IonButton>
                    </IonCol>
                    <IonCol size = '4'></IonCol>
                </IonRow>
            </IonGrid>
            
        </>
    );
}

export default EmptyTarget;