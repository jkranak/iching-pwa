export interface ResultI {
  divination: string[]
  numbers: string[]
  lines: string[]
  question?: string
}

export const emptyResult: ResultI = {
  divination: [''],
  numbers: [''],
  lines: [''],
  question: ''
}