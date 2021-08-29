export interface TranslationObj {
  [trans: string]: {
    [section: string]: {
      [subsect: string] : string[]
    }
  }
}