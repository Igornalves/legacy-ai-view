import AccontsUser from "../../componentes/AccontsUser/intex";
import ChatBox from "../../componentes/ChatBox/intex";
import ChatsAPPs from "../../componentes/ChatsAPPs/intex";
import SearchBar from "../../componentes/SearchBar/intex";
import { 
    ConteinerHome, 
    DivConta, 
    DivRetangulo2,
    Text1,
} from "./style";

export default function Home() {
    return (
        <ConteinerHome>
            <DivRetangulo2>
                <SearchBar/>
                <Text1>CHATS</Text1>
                <ChatsAPPs
                    text="Como fazer um bolo de chocolate ?"
                />
                <ChatsAPPs
                    text="Como fazer um bolo de chocolate ?"
                />
                <ChatsAPPs
                    text="Como fazer um bolo de chocolate ?"
                />
                <DivConta>
                    <AccontsUser 
                        name="CHRISTOFFER P. M"
                    />
                </DivConta>
            </DivRetangulo2>
            <ChatBox/>
        </ConteinerHome>
    );
}