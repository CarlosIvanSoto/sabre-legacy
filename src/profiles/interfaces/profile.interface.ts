export interface Profile {
    TPA_Identity:           TPAIdentity
    Traveler:               Traveler
    _CreateDateTime:        Date
    _UpdateDateTime:        Date
    _PrimaryLanguageIDCode: string
}

export interface TPAIdentity {
    _ClientCode:                 string
    _ClientContextCode:          string
    _UniqueID:                   string
    _ProfileTypeCode:            string
    _ProfileName:                string
    _ProfileNameModifyIndicator: string
    _DomainID:                   string
    _ProfileStatusCode:          string
}

export interface Traveler {
    Customer:       Customer
    TPA_Extensions: TPAExtensions
}

export interface Customer {
    PersonName:             PersonName
    Email:                  Email[]
    Address:                CustomerAddress
    PaymentForm:            PaymentForm[]
    EmergencyContactPerson: EmergencyContactPerson
    Document:               Document
    CustLoyalty:            CustLoyalty
    _MaritalStatusCode:     string
    _GenderCode:            string
    _AgeRange:              string
}

export interface CustomerAddress {
    AddressLine: string[]
    CityName:    string
    PostalCd:    string
    StateCode:   string
    CountryCode: string
}

export interface CustLoyalty {
    GivenName:        string
    SurName:          string
    _VendorTypeCode:  string
    _VendorCode:      string
    _ProgramTypeCode: string
    _MembershipID:    string
    _OrderSequenceNo: string
}

export interface Document {
    DocHolderName:             string
    _DocID:                    string
    _DocTypeCode:              string
    _BirthDate:                Date
    _EffectiveDate:            Date
    _ExpireDate:               Date
    _DocIssueCountryCode:      string
    _BirthPlace:               string
    _BirthCountryCode:         string
    _DocHolderNationalityCode: string
    _OrderSequenceNo:          string
}

export interface Email {
    _EmailTypeCode?:  string
    _FormatTypeCode?: string
    _EmailAddress:    string
}

export interface EmergencyContactPerson {
    GivenName:        string
    SurName:          string
    Address:          EmergencyContactPersonAddress
    _OrderSequenceNo: string
}

export interface EmergencyContactPersonAddress {
    AddressLine: string
    CityName:    string
    PostalCd:    string
    StateCode:   string
    CountryCode: string
}

export interface PaymentForm {
    Cash?:            Cash
    _OrderSequenceNo: string
    _TripTypeCode?:   string
    PaymentCard?:     PaymentCard
}

export interface Cash {
    _Indicator: string
}

export interface PaymentCard {
    CardHolderName:      CardHolderName
    CardIssuerName:      CardIssuerName
    Address:             PaymentCardAddress
    _BankCardVendorCode: string
    _CardNumber:         string
    _MaskedCardNumber:   string
    _CCViewAccess:       string
}

export interface PaymentCardAddress {
    AddressLine:       string[]
    CityName:          string
    PostalCd:          string
    StateCode:         string
    CountryCode:       string
    _LocationTypeCode: string
    _Attention:        string
    _OrderSequenceNo:  string
}

export interface CardHolderName {
    CardHolderFullName: string
}

export interface CardIssuerName {
    _IssueNumberText: string
}

export interface PersonName {
    NamePrefix:      string
    GivenName:       string
    MiddleName:      string
    SurName:         string
    NameSuffix:      string
    _LanguageIDCode: string
}

export interface TPAExtensions {
    AssociatedProfiles:    AssociatedProfiles
    AssociatedFilters:     AssociatedFilters
    NumberOfAssocProfiles: NumberOfAssocProfiles
}

export interface AssociatedFilters {
    _FilterID:           string
    _FilterName:         string
    _ClientCode:         string
    _ClientContextCode:  string
    _DomainID:           string
    _CreateDateTime:     Date
    _UpdateDateTime:     Date
    _TemplateInheritInd: string
}

export interface AssociatedProfiles {
    _AssocUniqueID:           string
    _AssocProfileTypeCode:    string
    _DomainID:                string
    _ClientCode:              string
    _ClientContextCode:       string
    _TemplateInheritInd:      string
    _ProfileRelationTypeCode: string
    _CreditBankIndicator:     string
    _AssocFiltersInd:         string
}

export interface NumberOfAssocProfiles {
    _Corporation: string
}