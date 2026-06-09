export interface Rodzic {
  id: string;
  wilczek_id: string;
  imie: string;
  nazwisko: string;
  telefon: string | null;
  email: string | null;
  relacja: string | null;
}

export interface RodzicFormData {
  imie: string;
  nazwisko: string;
  telefon: string;
  email: string;
  relacja: string;
}

export interface Skladka {
  id: string;
  wilczek_id: string;
  rok: number;
  zaplacono: boolean;
  data_wplaty: string | null;
  kwota: number | null;
}

export interface SkladkaFormData {
  rok: string;
  kwota: string;
  zaplacono: boolean;
  data_wplaty: string;
}

export interface Zbiorka {
  id: string;
  data: string;
  temat: string | null;
  miejsce: string | null;
  created_at: string;
}

export interface ZbiorkaFormData {
  data: string;
  temat: string;
  miejsce: string;
}

export interface Obecnosc {
  id: string;
  zbiorka_id: string;
  wilczek_id: string;
  obecny: boolean;
}

export interface Wilczek {
  id: string;
  imie: string;
  nazwisko: string;
  data_urodzenia: string | null;
  pesel: string | null;
  ulica: string | null;
  miasto: string | null;
  kod_pocztowy: string | null;
  created_at: string;
}

export interface WilczekFormData {
  imie: string;
  nazwisko: string;
  data_urodzenia: string;
  pesel: string;
  ulica: string;
  miasto: string;
  kod_pocztowy: string;
}
