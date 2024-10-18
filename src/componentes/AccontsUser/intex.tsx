import { 
    ConteinerDiv, 
    Images,
    Text
} from "./styles";

import img from '../../assets/2f9ba115c7d5cc790cc48a457815fb67.png'

interface AccontsUserProps {
    name: string
    img?: string
}

export default function AccontsUser({ name }: AccontsUserProps) {
    return (
        <ConteinerDiv>
            <Images src={img} alt=""/>
            <Text>
                {name}
            </Text>
        </ConteinerDiv>
    );
}
