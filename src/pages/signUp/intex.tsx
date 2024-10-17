import ButtonSubmit from "../../componentes/ButtonSubmit/intex";
import Forms from "../../componentes/Forms/intex";
import TextPagesBack from "../../componentes/TextPagesBack/intex";
import TituleLogin from "../../componentes/TituleLogin/intex";
import { ConteinerMain, DivFormsCreate } from "./style";

export default function SignUp() {
    return(
        <ConteinerMain>
            <DivFormsCreate>
                <TituleLogin text="Cadastre-se em Legacy AI"/>

                <Forms/>
                <ButtonSubmit text="Cadastrar"/>
                <TextPagesBack
                    text="Já possui uma conta?"
                    link="Faça login"
                    href="/"
                />
            </DivFormsCreate>
        </ConteinerMain>
    );
}