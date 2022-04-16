import { ButtonLabel, CreateNewButtonContainer, PlusIcon } from "./create-new-button.styles";

const CreateNewButton = ({text}) => {
    return(
        <CreateNewButtonContainer>
            <PlusIcon/>
            <ButtonLabel>{text}</ButtonLabel>
        </CreateNewButtonContainer>
    )
}

export default CreateNewButton;