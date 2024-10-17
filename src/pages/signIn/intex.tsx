import { 
    DivConteiner, 
    DivForms, 
} from "./style";
import Forms from "../../componentes/Forms/intex";
import ButtonSubmit from "../../componentes/ButtonSubmit/intex";
import TituleLogin from "../../componentes/TituleLogin/intex";
import TextPagesBack from "../../componentes/TextPagesBack/intex";

export default function SignIn() {
    return(
        <DivConteiner>
            <DivForms>
                <TituleLogin text="Entre em Legacy AI"/>
               
                <Forms />
                <ButtonSubmit text="Entrar"/>
                <TextPagesBack 
                    text="Não possui uma conta?"
                    link="Registre-se"
                    href="/sign-up"
                />
            </DivForms>
        </DivConteiner>
    );
}