import { useContent } from "../../context/contentContext";
import React from "react";
import { ProPraesidium } from "../../context/models";
import { ProPraesidiaDiv, SYYear, SelectedYear, THead, Table, Td, Th, Tr, TrHead } from "./styles";

const ProPraesidia = () => {
  const { proPraesidia } = useContent();
  const [selectedYear, setSelectedYear] = React.useState<ProPraesidium | undefined>(undefined);

  const select = React.useCallback(async (v: ProPraesidium) => {
    setSelectedYear(v === selectedYear ? undefined : v);
    setTimeout(() => document.getElementById('selected-year')?.scrollIntoView(), 200)
  }, [selectedYear])

  return (
    <ProPraesidiaDiv>
      <Table>
        <THead>
          <TrHead>
            <Th style={{ minWidth: '6.5rem'}}>Jaar</Th>
            <Th style={{ width: '100%'}}>Praeses</Th>
          </TrHead>
        </THead>
        <tbody>
          {proPraesidia.map((v) => (
            <Tr key={v.year} $selected={+(v === selectedYear)} onClick={() => select(v)}>
              <Td>{v.year}</Td>
              <Td>{v.praeses}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
      <SelectedYear id="selected-year" $open={+(selectedYear ? 1 : 0)}>
        <SYYear>
          <span style={{ fontWeight: 600 }}>
            Praeses:
          </span>
          &nbsp;{selectedYear?.praeses}
        </SYYear>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {selectedYear?.members.map((m) => (
            <div key={m.name}>
              <span style={{ fontWeight: 600 }}>
                {m.function}:
                </span>
                &nbsp;{m.name}
            </div>
          ))}
        </div>
      </SelectedYear>
    </ProPraesidiaDiv>
  )
}

export default ProPraesidia