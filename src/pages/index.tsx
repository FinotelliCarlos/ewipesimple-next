import PageTitle from "UI/components/data-display/PageTitle/PageTitle";
import SafeEnvironment from "UI/components/feedback/SafeEnvironment/SafeEnvironment";
import UserInformation from "UI/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "UI/components/inputs/TextFieldMask/TextFieldMask";
import {
  Button,
  Typography,
  Container,
  CircularProgress,
} from "@material-ui/core";
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "UI/styles/pages/index.style";
import useIndex from "data/hooks/pages/useIndex.page";

export default function Home() {
  const {
    cep,
    setCep,
    cepValido,
    searchProfessional,
    error,
    professional,
    search,
    load,
    others,
  } = useIndex();

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
            label={"Digite seu CEP"}
            fullWidth
            variant={"outlined"}
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />

          {error && <Typography color={"error"}>{error}</Typography>}

          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
            disabled={!cepValido || load}
            onClick={() => searchProfessional(cep)}
          >
            {load ? <CircularProgress size={20} /> : "Buscar"}
          </Button>
        </FormElementsContainer>

        {search &&
          (professional.length > 0 ? (
            <ProfissionaisPaper>
              <ProfissionaisContainer>
                {professional.map((item, index) => {
                  return (
                    <UserInformation
                      key={index}
                      name={item.full_name}
                      picture={item.picture_user}
                      rating={item.rating}
                      description={item.city}
                    />
                  );
                })}
              </ProfissionaisContainer>

              <Container sx={{ textAlign: "center" }}>
                {others > 0 && (
                  <Typography sx={{ mt: 5 }}>
                    ...e mais {others}{" "}
                    {others > 1
                      ? "profissionais atendem"
                      : "profissional atende"}{" "}
                    ao seu endereço.
                  </Typography>
                )}

                <Button
                  variant={"contained"}
                  color={"secondary"}
                  sx={{ mt: 5 }}
                >
                  Contratar um profissional
                </Button>
              </Container>
            </ProfissionaisPaper>
          ) : (
            <Typography align={"center"} color={"textPrimary"}>
              Ainda não temos nenhum profissional disponivel em sua região.
            </Typography>
          ))}
      </Container>
    </div>
  );
}
