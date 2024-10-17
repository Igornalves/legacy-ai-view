import { useNavigate } from "react-router-dom";
import { ButtonSubmitExist, Conteiner } from "./style";

interface ButtonSubmitProps {
    text: string
}

export default function ButtonSubmit({text}: ButtonSubmitProps) {

    const Navigation = useNavigate();

    function HanderClick() {
        Navigation('/home')
    }

    return(
        <Conteiner>
            <ButtonSubmitExist onClick={HanderClick}>
                {text}
            </ButtonSubmitExist>
        </Conteiner>
    );
}