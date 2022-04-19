import { ScCreateNewButtonContainer } from "./create-new-button.styles";
import { ReactComponent as PlusIcon } from "../../assets/plus-sign.svg";

const CreateNewButton = ({ text }) => {
  return (
    <ScCreateNewButtonContainer>
      <PlusIcon />
      <span>{text}</span>
    </ScCreateNewButtonContainer>
  );
};

export default CreateNewButton;
