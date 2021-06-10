import PageTitle from "UI/components/data-display/PageTitle/PageTitle";
import SafeEnvironment from "UI/components/feedback/SafeEnvironment/SafeEnvironment";
import UserInformation from "UI/components/data-display/UserInformation/UserInformation";
export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça nossos profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      <UserInformation
        picture={"Https://github.com/finotellicarlos.png"}
        name={"Carlos"}
        rating={3}
        description={"São Paulo"}
      />
    </div>
  );
}
