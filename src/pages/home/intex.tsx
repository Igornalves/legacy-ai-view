import AccontsUser from "../../componentes/AccontsUser/intex";
import SearchBar from "../../componentes/SearchBar/intex";
import { 
    ConteinerHome, 
    DivRetangulo2,
    Text1,
} from "./style";

export default function Home() {
    return (
        <ConteinerHome>
            <DivRetangulo2>
                <SearchBar/>
                <Text1>CHATS</Text1>
                <AccontsUser 
                    name="CHRISTOFFER P. M"
                />
            </DivRetangulo2>
        </ConteinerHome>
    );
}