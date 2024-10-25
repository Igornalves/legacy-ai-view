import { List, MagnifyingGlass } from "phosphor-react";
import { ConteinerDiv, InputConversas } from "./styles";

export default function SearchBar() {
    return(
        <ConteinerDiv>
            <List size={30} color="#fff"/>
            <InputConversas placeholder="Conversas"/>
            <MagnifyingGlass size={30} color="#fff" />
        </ConteinerDiv>
    );
}