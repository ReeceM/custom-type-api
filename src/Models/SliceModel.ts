export interface SliceModel {
  id: string,
  type: string,
  name: string,
  description?: string,
  variations: Array<SliceVariation>
}

export interface SliceVariation {
  id: string,
  name: string,
  docURL?: string | null,
  imageUrl?: string,
  version: string,
  description?: string|null,
  primary?: Object,
  items?: Object
}
