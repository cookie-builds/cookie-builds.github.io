/* eslint-disable react-refresh/only-export-components */

import dayjs from "dayjs";
import React from "react"

type EventType = {
  imageUrl: string,
  title: string,
  tldr?: string,
  what: string,
  when: string,
  where: string,
  who: string,
  price: string,
  facebookUrl?: string,
  registerUrl?: string,
  picturesUrl?: string,
  mapsUrl: string,
  orderDate: string,
  url: string,
}

type Content = {
  events: EventType[];
  nextEvent: EventType | undefined;
  pastEvents: EventType[];
  futureEvents: EventType[];
  loading: boolean;
}

export const ContentContext = React.createContext<Content>({} as Content);

export const useContent = () => React.useContext(ContentContext);

export const ContentProvider = ({children}: { children: React.ReactNode}) => {
  const [events, setEvents] = React.useState<EventType[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const initEvents = React.useCallback(async () => {
    const response = await fetch(`/assets/data/events.json`);
    const data: EventType[] = await response.json();

    for (const e of data) {
      if (
        !e.title ||
        !e.what ||
        !e.when ||
        !e.where ||
        !e.who ||
        !e.price ||
        !e.mapsUrl ||
        !e.orderDate ||
        !e.url ||
        !/\d{4}-\d{2}-\d{2} \d{2}:\d{2}/.test(e.orderDate) ||
        !/[^\s]*-\d{4}/.test(e.url)
      ) {
        console.error(`Error in event with title '${e.title}'`);
        throw new Error();
      }
    }
    setEvents(data.sort((v1, v2) => v1.orderDate.localeCompare(v2.orderDate)));
    setLoading(false);
  }, [])

  React.useEffect(() => {
    try {
      initEvents();
    } catch (error) {
      window.alert(`There is an error loading content: ${error}`)
    }
  }, [initEvents, loading]);

  const value = React.useMemo(() => {
    const now = dayjs().format('YYYY-MM-DD HH:mm');
    const futureEvents = events.filter((v) => v.orderDate > now);
    return {
      events,
      nextEvent: futureEvents[0],
      pastEvents: events.filter((v) => v.orderDate < now),
      futureEvents,
      loading,
    };
  }, [events, loading])

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  )
};