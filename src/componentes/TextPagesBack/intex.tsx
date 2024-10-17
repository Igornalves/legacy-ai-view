import { 
    ConteinerDiv,
    Text,
    Links
} from "./styles";

interface TypeTextPagesBack {
    text: string,
    link: string,
    href: string
}

export default function TextPagesBack({ text, link, href }:TypeTextPagesBack) {
    return(
        <ConteinerDiv>
            <Text>
                {text}
            </Text>
            <Links href={href} rel="stylesheet">
                {link}
            </Links>
        </ConteinerDiv>
    );
}