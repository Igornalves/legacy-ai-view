import { 
    Conteiner, 
    DivFormsInput, 
    InputForms,
    TextForms
} from "./style";

export default function Forms() {
    return(
        <Conteiner>
            <DivFormsInput>
                <TextForms>
                    Email
                </TextForms>
                <InputForms type="text" />
            </DivFormsInput>
            <DivFormsInput>
                <TextForms>
                    Senha
                </TextForms>
                <InputForms type="password" />
            </DivFormsInput>
        </Conteiner>
    );
}