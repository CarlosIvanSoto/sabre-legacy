export interface SabreOTAProfileReadRS {
    ResponseMessage: ResponseMessage;
    Filter:          Filter;
    _xmlns:          string;
    _Version:        string;
}

export interface Filter {
    Profile:            Profile;
    _ClientCode:        string;
    _ClientContextCode: string;
    _CreateDateTime:    Date;
    _DomainID:          string;
    _FilterDescription: string;
    _FilterID:          string;
    _FilterName:        string;
    _FilterStatusCode:  string;
    _FilterTypeCode:    string;
    _UpdateDateTime:    Date;
}

export interface Profile {
    TPA_Identity: TPAIdentity;
    Traveler:     Traveler;
}

export interface TPAIdentity {
    _ClientCode:        string;
    _ClientContextCode: string;
    _DomainID:          string;
    _ProfileName:       string;
    _ProfileTypeCode:   string;
    _UniqueID:          string;
}

export interface Traveler {
    Customer: Customer;
}

export interface Customer {
    PersonName:  PersonName;
    Email:       Email;
    Address:     Address;
    PaymentForm: PaymentForm;
}

export interface Address {
    AddressLine: string[];
    CityName:    string;
    PostalCd:    string;
    StateCode:   string;
    CountryCode: string;
}

export interface Email {
    _EmailAddress:  string;
    _EmailTypeCode: string;
}

export interface PaymentForm {
    Cash: Cash;
}

export interface Cash {
    _Indicator: string;
}

export interface PersonName {
    NamePrefix: string;
    GivenName:  string;
    MiddleName: string;
    SurName:    string;
}

export interface ResponseMessage {
    Success: string;
}
