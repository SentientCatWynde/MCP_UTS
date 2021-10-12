import { IonImg, IonItem, IonThumbnail } from "@ionic/react";
import { FEMALE_ICON, MALE_ICON, SOME_GENDER_ICON } from "../pages/Variables";

const Gender: React.FC < { myGender: string } > = props => {
    return (
        <>
            { props.myGender === 'male' && (
                <IonItem color = 'primary'>
                    <IonThumbnail >
                        { MALE_ICON.map ( ( image, i ) => 
                            <IonImg key = { i } alt = 'default-user-image' src = { image.src } />
                        ) }
                    </IonThumbnail>
                </IonItem>
                ) 
            } 
                { props.myGender === 'female' && (
                <IonItem color = 'primary'>
                    <IonThumbnail>
                        { FEMALE_ICON.map ( ( image, i ) => 
                            <IonImg key = { i } alt = 'default-user-image' src = { image.src } />
                        ) }
                    </IonThumbnail>
                </IonItem>
            )}
            { props.myGender !== 'male' && props.myGender !== 'female' && (
                <IonItem color = 'primary'>
                    <IonThumbnail>
                        { SOME_GENDER_ICON.map ( ( image, i ) => 
                            <IonImg key = { i } alt = 'default-user-image' src = { image.src } />
                        ) }
                    </IonThumbnail>
                </IonItem>
                )
            }
        </>
    );
}

export default Gender;