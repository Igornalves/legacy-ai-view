import { ConteinerDev, TextChat } from "./styles";

interface TypeChatsAppProps {
    text: string,
}

export default function ChatsAPPs({ text }:TypeChatsAppProps ) {
    return(
        <ConteinerDev>
            <TextChat>
                {text}
            </TextChat>
        </ConteinerDev>
    );
}