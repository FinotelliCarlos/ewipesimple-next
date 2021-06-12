import PageTitle from "UI/components/data-display/PageTitle/PageTitle";
import SafeEnvironment from "UI/components/feedback/SafeEnvironment/SafeEnvironment";
import UserInformation from "UI/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "UI/components/inputs/TextFieldMask/TextFieldMask";
import { Button, Typography, Container } from "@material-ui/core";
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "UI/styles/pages/index.style";
import useIndex from "data/hooks/pages/useIndex.page";

export default function Home() {
  const { cep, setCep } = useIndex();

  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça nossos profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={"99.999-999"}
            variant={"outlined"}
            label={"Digite seu CEP"}
            fullWidth
            value={cep}
            onChange={(value) => setCep(value.target.value)}
          />
          <Typography color={"error"}>
            O CEP {cep} informado é Inválido
          </Typography>
          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
          >
            Buscar
          </Button>
        </FormElementsContainer>
        {/* 55:18 */}
        <ProfissionaisPaper>
          <ProfissionaisContainer>
            <UserInformation
              picture={"Https://github.com/finotellicarlos.png"}
              name={"Carlos"}
              rating={3}
              description={"São Paulo"}
            />
            <UserInformation
              picture={"Https://github.com/finotellicarlos.png"}
              name={"Carlos"}
              rating={3}
              description={"São Paulo"}
            />
            <UserInformation
              picture={"Https://github.com/finotellicarlos.png"}
              name={"Carlos"}
              rating={3}
              description={"São Paulo"}
            />
            <UserInformation
              picture={"Https://github.com/finotellicarlos.png"}
              name={"Carlos"}
              rating={3}
              description={"São Paulo"}
            />
            <UserInformation
              picture={"Https://github.com/finotellicarlos.png"}
              name={"Carlos"}
              rating={3}
              description={"São Paulo"}
            />
            <UserInformation
              picture={"Https://github.com/finotellicarlos.png"}
              name={"Carlos"}
              rating={3}
              description={"São Paulo"}
            />
          </ProfissionaisContainer>
        </ProfissionaisPaper>
      </Container>
    </div>
  );
}
