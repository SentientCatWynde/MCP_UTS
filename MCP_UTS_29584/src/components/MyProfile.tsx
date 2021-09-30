import { IonGrid, IonImg, IonItem, IonLabel, IonRow, IonThumbnail, IonTitle } from "@ionic/react";
import { STUDENT_PROFILE } from "../pages/Variables";

const MyProfile: React.FC = () => {
    return (
        <IonItem>
            {
                STUDENT_PROFILE.map ( ( student ) => 
                    <>
                    <IonThumbnail slot = 'start' key = { student.id }>
                        <IonImg alt = 'My Favorite Profile Image'
                        src = { student.src }
                        />
                        
                    </IonThumbnail>
                    <IonGrid>
                        <IonRow>
                        <IonTitle class = 'ion-text-center'>
                            { student.name } 
                        </IonTitle>
                        </IonRow>
                        <IonRow>
                            <IonLabel>
                            000000{ student.id } 
                            </IonLabel>
                        </IonRow>
                    </IonGrid>
                    
                    </>
                )
            }

        </IonItem>
    );
}

export default MyProfile;