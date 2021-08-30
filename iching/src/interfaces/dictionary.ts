interface HexDictEntry {
  hexagram: string
  hexname: string
  chinese: string
  pinyin: string
  english: string
  trigrams: number[]
}

export interface HexDictionary {
  [index: string]: HexDictEntry
}

export interface HexNumberDict {
  [index: string]: string
}

interface TriDictEntry {
  trigram: string
  chinese: string
  pinyin: string
  english: string
}

export interface TriDictionary {
  [index: string]: TriDictEntry
}