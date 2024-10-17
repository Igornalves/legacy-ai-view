import { 
    DivConteiner, 
    DivForms, 
    DivTitule, 
    TextTitule,
    Image,
} from "./style";
import Icon from '../../assets/Unknown 1.png'
import Forms from "../../componentes/Forms/intex";
import ButtonSubmit from "../../componentes/ButtonSubmit/intex";

export default function SignIn() {
    return(
        <DivConteiner>
            <DivForms>
                <DivTitule>
                    <Image src={Icon} alt=""/>
                    <TextTitule>
                        Entre em Legacy AI
                    </TextTitule>
                </DivTitule>
               
                <Forms />
                <ButtonSubmit />
            </DivForms>
        </DivConteiner>
    );
}