import {Entry} from "./entry.type";

export type GetEntriesDTO = {
  journal: string,
  bodyRegex?: string,
  startDate?: string,
  endDate?: string,
  sort?: 'body' | 'dateCreated' | 'lastUpdated',
  order?: 1 | -1,
  page?: number,
  limit?: number,
};

export type GetEntriesResponseDTO = {
  count: number,
  items: Entry[],
  page?: number,
  limit?: number,
};

export type CreateEntryDTO = {
  journal: string,
  body: string,
};

export type UpdateEntryDTO = {
  id: string,
  body?: string,
  journal?: string,
};