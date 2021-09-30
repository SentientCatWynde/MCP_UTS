import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import MyProfile from "../components/MyProfile";

const Profile: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color = 'secondary' >
                    <IonButtons slot = 'start'>
                        <IonBackButton/>
                    </IonButtons>
                    <IonTitle>
                        My Profile 
                    </IonTitle>
                </IonToolbar>

            </IonHeader>
            <IonContent >
                <IonItem color = 'tetriary' >
                    {/* My Profile Image */}
                    <MyProfile/>
                    
                </IonItem>
            </IonContent>
        </IonPage>
    );
}

export default Profile;