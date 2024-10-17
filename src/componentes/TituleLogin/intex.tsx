import { 
    DivTitule,
    Image,
    TextTitule
} from "./styles";
import Icon from '../../assets/Unknown 1.png'

interface TituleLoginProps {
    text: string
}

export default function TituleLogin({text}: TituleLoginProps) {
    return(
        <div>
            <DivTitule>
                <Image src={Icon} alt=""/>
                <TextTitule>
                    {text}
                </TextTitule>
            </DivTitule>
        </div>
    );
}