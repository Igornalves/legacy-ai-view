import { PaperPlaneRight } from "phosphor-react";
import { ButtonPaper, ConteinerBox, DivBox, InputForChat } from "./styles";

export default function ChatBox() {
    return(
        <ConteinerBox>
            <DivBox>
                <InputForChat placeholder="Escreva aqui a sua duvida" />
                
                <ButtonPaper>
                    <PaperPlaneRight size={29} color="white" />
                </ButtonPaper>
            </DivBox>
        </ConteinerBox>
    );
}