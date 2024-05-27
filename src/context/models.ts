export type EventType = {
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
  mapsUrl?: string,
  orderDate: string,
  url: string,
}

export type PraesidiumMember = {
  fName: string,
  lName: string,
  nName?: string,
  function: string,
  imageUrl: string,
  url: string,
  questions: {
    q: string,
    a: string,
  }[],
  funFacts?: string[],
}

export type ProPraesidium = {
  year: string,
  praeses: string,
  members: {
    function: string,
    name: string,
  }[],
}

export type Content = {
  // Events
  nextEvent: EventType | undefined;
  pastEvents: EventType[];
  futureEvents: EventType[];
  filteredEvents: EventType[];
  filterEvents: (filter: EventFilter) => void;
  // Praesidium
  praesidium: PraesidiumMember[];
  // Propraesidium
  proPraesidia: ProPraesidium[];
  // Status
  loading: boolean;
}

export type EventFilter = {
  onlyPictures: boolean;
  search: string;
};