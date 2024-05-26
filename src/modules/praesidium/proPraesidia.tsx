import { useContent } from "../../context/contentContext";
import React from "react";
import { ProPraesidium } from "../../context/models";
import { ProPraesidiaDiv, SYYear, SelectedYear, THead, Table, Td, Th, Tr, TrHead } from "./styles";

const ProPraesidia = () => {
  const { proPraesidia } = useContent();
  const [selectedYear, setSelectedYear] = React.useState<ProPraesidium | undefined>(undefined);

  const select = React.useCallback(async (v: ProPraesidium) => {
    setSelectedYear(v);
    document.getElementById('selected-year')?.scrollIntoView();
  }, [])

  return (
    <ProPraesidiaDiv>
      <Table>
        <THead>
          <TrHead>
            <Th>Jaar</Th>
            <Th style={{ width: '100%' }}>Praeses</Th>
          </TrHead>
        </THead>
        <tbody>
          {proPraesidia.map((v) => (
            <Tr key={v.year} onClick={() => select(v)}>
              <Td>{v.year}</Td>
              <Td>{v.praeses}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
      <SelectedYear id="selected-year" $open={+(selectedYear ? 1 : 0)}>
        <SYYear>{selectedYear?.year}</SYYear>
        {selectedYear?.members.map((m) => (
          <div key={m.name}><b>{m.function}:</b>&nbsp;{m.name}</div>
        ))}
      </SelectedYear>
    </ProPraesidiaDiv>
  )
}

export default ProPraesidia