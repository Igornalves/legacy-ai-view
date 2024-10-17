import { ButtonSubmitExist, Conteiner } from "./style";

interface ButtonSubmitProps {
    text: string
}

export default function ButtonSubmit({text}: ButtonSubmitProps) {
    return(
        <Conteiner>
            <ButtonSubmitExist>
                {text}
            </ButtonSubmitExist>
        </Conteiner>
    );
}