/**
 * Card type
 */
export declare enum CardType {
    Amex = "amex",
    Dankort = "dankort",
    DinersClub = "dinersclub",
    Discover = "discover",
    Elo = "elo",
    Hipercard = "hipercard",
    JCB = "jcb",
    Laser = "laser",
    Maestro = "maestro",
    MasterCard = "mastercard",
    Mir = "mir",
    Troy = "troy",
    UnionPay = "unionpay",
    VisaElectron = "visaelectron",
    Visa = "visa"
}
/**
 * Card object
 */
export interface Card {
    type: CardType;
    pattern: RegExp;
    format: RegExp;
    minLength: number;
    maxLength: number;
    cvcLength: number;
    luhn: boolean;
}
