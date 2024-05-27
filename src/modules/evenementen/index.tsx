import Banner from "../../components/banner";
import BannerImg from '/assets/images/landing-pic.jpg';
import { InnerDiv, OuterSec } from "../../components/standard";
import Title from "../../components/title";
import Events from "./events";
import { useContent } from "../../context/contentContext";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { EventFilter, EventType } from "../../context/models";
import styled from "styled-components";
import { mediaQuery } from "../../assets/styling";

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  align-items: flex-end;
`;

const FilterDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  width: 100%;
  align-items: flex-end;
  gap: 0.5rem;
  
  ${mediaQuery.medium`
    gap: 1rem;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
  `}
`;

const SearchDiv = styled.div`
  width: 100%;
  max-width: 30rem;
`;
const Search = styled.input`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  width: 100%;
  background-color: var(--gray);
  border: 1px solid #CCCCCC;

  &:focus-visible, &:focus, &:active {
    border: 1px solid #BBBBBB;
  }
`

const CheckDiv = styled.div`
  display: flex;
  align-items: center;
`
const Check = styled.input`
  height: 1.25rem;
  width: 1.25rem;
  background-color: var(--gray);
  border: 1px solid #CCCCCC;
  accent-color: var(--green);

  &:focus-visible, &:focus, &:active {
    border: 1px solid #BBBBBB;
  }
`;

const Evenementen = () => {
  const { futureEvents, pastEvents } = useContent();
  const [filteredEvents, setFilteredEvents] = React.useState<EventType[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = React.useState(true);
  const [filter, setFilter] = React.useState<EventFilter>({
    onlyPictures: searchParams.get('only-pictures') === '1',
    search: searchParams.get('search') || '',
  })

  const onChangeS = React.useCallback((newVal: string) => setFilter({ onlyPictures: filter.onlyPictures, search: newVal}), [filter.onlyPictures])
  const onChangeOP = React.useCallback((newVal: boolean) => setFilter({ onlyPictures: newVal, search: filter.search}), [filter.search]);

  // Filter events
  React.useEffect(() => {
    setSearchParams({
      ...(filter.search.length === 0 ? {} : {'search': filter.search.toLowerCase()}),
      ...(filter.onlyPictures ? {'only-pictures': '1'} : {}),
    });
    setFilteredEvents(pastEvents.filter(v => {
      if (filter.onlyPictures && !v.picturesUrl) return false;
      if (filter.search.length > 0) {
        return v.title.toLowerCase().includes(filter.search.toLowerCase()) || v.orderDate.startsWith(filter.search.toLowerCase())
      }
      return true;
    }));
  }, [pastEvents, filter, setSearchParams])

  // Preload images
  React.useEffect(() => {
    try {
      const imagesToPreload: (string | undefined)[] = [
        ...futureEvents.map((v) => v.imageUrl)
      ];
      
      Promise.all(imagesToPreload.map((url) => new Promise(function (resolve, reject) {
        if (!url) return;
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
      }))).then(() => setLoading(false));
      
    } catch (err) {
      console.error(err);
    }
  }, [futureEvents]);

  return (
    <div>
      <Banner imgUrl={BannerImg} />
      {loading ? (
        <p style={{ color: 'var(--white)', fontWeight: '300' }}>Evenementen laden...</p>
      ) : (
        <>
          <OuterSec>
            <InnerDiv>
              <Title color="--white" text="Komende evenementen" />
              <Events events={futureEvents} noEventsColor="--white" />
            </InnerDiv>
          </OuterSec>
          <OuterSec>
            <InnerDiv style={{paddingTop: '0'}}>
              <TitleDiv>
                <Title color="--green" text="Voorgaande evenementen" fullWidth />
                <FilterDiv>
                  <CheckDiv>
                    Alleen evenementen met foto-album
                    <Check type="checkbox" checked={filter.onlyPictures} onChange={(e) => onChangeOP(e.target.checked)} />
                  </CheckDiv>
                  <SearchDiv>
                    <Search type="search" value={filter.search} onChange={(e) => onChangeS(e.target.value)} placeholder="Zoek op naam of datum (DD-MM-YYYY)" />
                  </SearchDiv>
                </FilterDiv>
              </TitleDiv>
              <Events events={filteredEvents} noEventsColor="--black" />
            </InnerDiv>
          </OuterSec>
        </>
      )}
    </div>
  )
}

export default Evenementen