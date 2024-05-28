/* eslint-disable react-refresh/only-export-components */
import dayjs from 'dayjs';
import React from 'react';
import { Content, EventFilter, EventType, PraesidiumMember, ProPraesidium, TimelinePart } from './models';

const BASE_IMAGE = 'https://imgur.com/NhrMwiG.png'

export const ContentContext = React.createContext<Content>({} as Content);

export const useContent = () => React.useContext(ContentContext);

export const ContentProvider = ({children}: { children: React.ReactNode}) => {
  const [futureEvents, setFutureEvents] = React.useState<EventType[]>([]);
  const [pastEvents, setPastEvents] = React.useState<EventType[]>([]);
  const [filteredEvents, setFilteredEvents] = React.useState<EventType[]>([]);
  const [praesidium, setPraesidium] = React.useState<PraesidiumMember[]>([]);
  const [proPraesidia, setProPraesidia] = React.useState<ProPraesidium[]>([]);
  const [timeline, setTimeline] = React.useState<TimelinePart[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const initPraesidium = React.useCallback(async () => {
    await Promise.all([
      async () => {
        const response = await fetch(`/assets/data/praesidium.json`);
        const data: PraesidiumMember[] = await response.json();
        setPraesidium(data);
      },
      async () => {
        const response = await fetch(`/assets/data/propraesidia.json`);
        const data: ProPraesidium[] = await response.json();
        setProPraesidia(data);
      }
    ])
  }, []);

  const initEvents = React.useCallback(async () => {
    const [dataEvents, dataArchive] = await Promise.all(['/assets/data/events.json', '/assets/data/archiveEvents.json'].map(async (v): Promise<EventType[]> => {
      const resp = await fetch(v);
      return resp.json();
    }))
    const now = dayjs().format('YYYY-MM-DD HH:mm');
    const events = [...dataEvents, ...dataArchive]
      .map(v => ({ ...v, imageUrl: v.imageUrl || BASE_IMAGE }))
      .sort((v1, v2) => v1.orderDate.localeCompare(v2.orderDate));
    const fe = events.filter((v) => v.orderDate >= now)
    const pe = events.filter((v) => v.orderDate < now)
    setFutureEvents(fe);
    setPastEvents(pe);
  }, []);

  const initTimeline = React.useCallback(async () => {
    const response = await fetch(`/assets/data/timeline.json`);
    const data: TimelinePart[] = await response.json();
    setTimeline(data);
  }, []);

  const filterEvents = React.useCallback(async (filter: EventFilter) => {
    setFilteredEvents(pastEvents.filter(v => {
      if (filter.onlyPictures && !v.picturesUrl)
        return false;
      if (filter.search !== '')
        return v.title.toLowerCase().includes(filter.search);
      return true;
    }))
  }, [pastEvents]);

  const init = React.useCallback(async () => {
    await Promise.all([
      initEvents(),
      initPraesidium(),
      initTimeline(),
    ]);
    setLoading(false);
  }, [initEvents, initPraesidium, initTimeline])

  React.useEffect(() => {
    try {
      init();
    } catch (error) {
      window.alert(`There is an error loading content: ${error}`)
    }
  }, [init]);

  const value = React.useMemo(() => ({
    futureEvents,
    pastEvents,
    nextEvent: futureEvents[0],
    filteredEvents,
    praesidium,
    proPraesidia,
    timeline,
    loading,
    filterEvents,
  }), [futureEvents, pastEvents, filteredEvents, filterEvents, loading, praesidium, proPraesidia, timeline])

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  )
};