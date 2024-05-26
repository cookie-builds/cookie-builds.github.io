/* eslint-disable react-refresh/only-export-components */

import dayjs from "dayjs";
import React from "react";
import { Content, EventType, PraesidiumMember, ProPraesidium } from "./models";

export const ContentContext = React.createContext<Content>({} as Content);

export const useContent = () => React.useContext(ContentContext);

export const ContentProvider = ({children}: { children: React.ReactNode}) => {
  const [events, setEvents] = React.useState<EventType[]>([]);
  const [praesidium, setPraesidium] = React.useState<PraesidiumMember[]>([]);
  const [proPraesidia, setProPraesidia] = React.useState<ProPraesidium[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const initPraesidium = React.useCallback(async () => {
    const response = await fetch(`/assets/data/praesidium.json`);
    const data: PraesidiumMember[] = await response.json();
    setPraesidium(data);
  }, []);

  const initProPraesidia = React.useCallback(async () => {
    const response = await fetch(`/assets/data/propraesidia.json`);
    const data: ProPraesidium[] = await response.json();
    setProPraesidia(data);
  }, []);

  const initEvents = React.useCallback(async () => {
    const response = await fetch(`/assets/data/events.json`);
    const data: EventType[] = await response.json();
    setEvents(data.sort((v1, v2) => v1.orderDate.localeCompare(v2.orderDate)));
  }, [])

  const init = React.useCallback(async () => {
    await Promise.all([
      initEvents(),
      initPraesidium(),
      initProPraesidia(),
    ]);
    setLoading(false);
  }, [initEvents, initPraesidium, initProPraesidia])

  React.useEffect(() => {
    try {
      init();
    } catch (error) {
      window.alert(`There is an error loading content: ${error}`)
    }
  }, [init]);

  const value = React.useMemo(() => {
    const now = dayjs().format('YYYY-MM-DD HH:mm');
    const futureEvents = events.filter((v) => v.orderDate > now);
    return {
      events,
      nextEvent: futureEvents[0],
      pastEvents: events.filter((v) => v.orderDate < now),
      futureEvents,
      praesidium,
      proPraesidia,
      loading,
    };
  }, [events, loading, praesidium, proPraesidia])

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  )
};