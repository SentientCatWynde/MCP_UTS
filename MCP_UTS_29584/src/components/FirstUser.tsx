import { IonImg, IonItem, IonThumbnail } from "@ionic/react";
import { FIRST_USER } from "../pages/Variables";

const FirstUser: React.FC = () => {
    return (
        <>
        { FIRST_USER.map ( ( image, i ) =>
            <IonItem color = 'primary' key = { i } >
                <IonThumbnail>
                    <IonImg alt = 'default-user-image' src = { image.src } />
                </IonThumbnail>
            </IonItem>
        ) }
        </>
    );
}

export default FirstUser;