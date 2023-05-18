export type UserDataModel = {
  id: number,
  name: string,
  email: string,
  address: UserAddressModel,
  phone: string,
  website: string,
  company: UserCompanyModel
};

export type UserAddressModel = {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: UserGeoModel
};

export type UserGeoModel = {
  lat: string,
  lng: string
};

export type UserCompanyModel = {
  name: string,
  catchphrase: string,
  bs: string
};
