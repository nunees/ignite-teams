import { Header } from "@components/Header";
import { Highlight } from "@components/highlight";
import * as S from "./styles";

export function Groups() {
  return (
    <S.Container>
      <Header showBackButton />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma"></Highlight>
    </S.Container>
  );
}
