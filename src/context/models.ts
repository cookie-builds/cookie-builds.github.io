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
  mapsUrl: string,
  orderDate: string,
  url: string,
}

export type PraesidiumMember = {
  imageUrl: string,
  fName: string,
  lName: string,
  nName?: string,
  function: string,
  questions: {
    q: string,
    a: string,
  }[],
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
  events: EventType[];
  praesidium: PraesidiumMember[];
  proPraesidia: ProPraesidium[];
  nextEvent: EventType | undefined;
  pastEvents: EventType[];
  futureEvents: EventType[];
  loading: boolean;
}