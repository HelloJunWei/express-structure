interface DBProduct {
  readonly bundleId: string
  readonly nameZh: string
  readonly nameEn: string
  readonly price: number
  readonly usPrice: number
  readonly isEnabled: number
}

 /*
interface FirstContractPosition {
  // Chinese version
  readonly zhIdX: number
  readonly zhIdT: number
  readonly zhNameX: number
  readonly zhYearX: number
  readonly zhYearY: number
  readonly zhMonthX: number
  readonly zhDayX: number

  // English version
  readonly enIdX: number
  readonly enIdY: number
  readonly enNameX: number
  readonly enNameY: number
  readonly enYearX: number
  readonly enYearY: number
}

interface LastContractPosition {
  readonly drawTextX: number
  readonly drawTextY: number
  readonly signXY: string
}
*/
interface BilingualService {
  readonly bilingual: boolean
}

interface ReadCandidateProfile {
  readonly readCandidateProfile: boolean
}


