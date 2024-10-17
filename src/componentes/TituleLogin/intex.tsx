import { 
    DivTitule,
    Conteiner,
    Image,
    TextTitule
} from "./styles";
import Icon from '../../assets/Unknown 1.png'

interface TituleLoginProps {
    text: string
}

export default function TituleLogin({text}: TituleLoginProps) {
    return(
        <Conteiner>
            <DivTitule>
                <Image src={Icon} alt="icon do site"/>
                <TextTitule>
                    {text}
                </TextTitule>
            </DivTitule>
        </Conteiner>
    );
}