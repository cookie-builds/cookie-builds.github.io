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
  futureEvents: EventType[];
  pastEvents: EventType[];
  nextEvent: EventType | undefined;
  // Praesidium
  praesidium: PraesidiumMember[];
  proPraesidia: ProPraesidium[];
  // Timeline
  timeline: TimelinePart[];
  // Status
  loading: boolean;
  // Inits
  initialized: {
    praesidium: boolean,
    events: boolean,
    timeline: boolean,
  };
  initPraesidium: () => Promise<void>;
  initEvents: () => Promise<void>;
  initTimeline: () => Promise<void>;
}

export type EventFilter = {
  onlyPictures: boolean;
  search: string;
};

export type TimelinePart = {
  date: string,
  text: string,
  link?: string,
}