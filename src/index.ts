// prettier-ignore
const CODE_LENGTHS: Record<string, number> = {
  AD: 24, AE: 23, AT: 20, AZ: 28, BA: 20, BE: 16, BG: 22, BH: 22, BR: 29,
  CH: 21, CR: 21, CY: 28, CZ: 24, DE: 22, DK: 18, DO: 28, EE: 20, ES: 24,
  FI: 18, FO: 18, FR: 27, GB: 22, GI: 23, GL: 18, GR: 27, GT: 28, HR: 21,
  HU: 28, IE: 22, IL: 23, IS: 26, IT: 27, JO: 30, KW: 30, KZ: 20, LB: 28,
  LI: 21, LT: 20, LU: 20, LV: 21, MC: 27, MD: 24, ME: 22, MK: 19, MR: 27,
  MT: 31, MU: 30, NL: 18, NO: 15, PK: 24, PL: 28, PS: 29, PT: 25, QA: 29,
  RO: 24, RS: 22, SA: 24, SE: 24, SI: 19, SK: 24, SM: 27, TN: 24, TR: 26,
};

export function isValidIBAN(input: any) {
  const iban = (input + "").toUpperCase();

  const country = iban.slice(0, 2);
  if (CODE_LENGTHS[country] !== iban.length) {
    return false;
  }

  const digits = (iban.substring(4) + country + iban.substring(2, 4)).replace(
    /[A-Z]/g,
    char => (char.charCodeAt(0) - 55) as any,
  );

  return mod97(digits) === 1;
}

function mod97(x: string): number {
  let checksum: any = x.slice(0, 2);
  let fragment: string;
  for (let i = 2; i < x.length; i += 7) {
    fragment = checksum + x.substring(i, i + 7);
    checksum = ~~fragment % 97;
  }
  return checksum;
}
