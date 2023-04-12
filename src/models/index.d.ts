import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly count?: number | null;
  readonly about?: string | null;
  readonly images: string[];
  readonly rating?: number | null;
  readonly colors?: string[] | null;
  readonly categoryID?: string | null;
  readonly category?: Category | null;
  readonly brandID?: string | null;
  readonly brand?: Brand | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly count?: number | null;
  readonly about?: string | null;
  readonly images: string[];
  readonly rating?: number | null;
  readonly colors?: string[] | null;
  readonly categoryID?: string | null;
  readonly category: AsyncItem<Category | undefined>;
  readonly brandID?: string | null;
  readonly brand: AsyncItem<Brand | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}

type EagerCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly products?: (Product | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly products: AsyncCollection<Product>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Category = LazyLoading extends LazyLoadingDisabled ? EagerCategory : LazyCategory

export declare const Category: (new (init: ModelInit<Category>) => Category) & {
  copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

type EagerBrand = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Brand, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly logo?: string | null;
  readonly products?: (Product | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBrand = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Brand, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly logo?: string | null;
  readonly products: AsyncCollection<Product>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Brand = LazyLoading extends LazyLoadingDisabled ? EagerBrand : LazyBrand

export declare const Brand: (new (init: ModelInit<Brand>) => Brand) & {
  copyOf(source: Brand, mutator: (draft: MutableModel<Brand>) => MutableModel<Brand> | void): Brand;
}

type EagerCartProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CartProduct, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly user: User;
  readonly quantity: number;
  readonly option?: string | null;
  readonly productID: string;
  readonly product?: Product | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCartProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CartProduct, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly user: AsyncItem<User>;
  readonly quantity: number;
  readonly option?: string | null;
  readonly productID: string;
  readonly product: AsyncItem<Product | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CartProduct = LazyLoading extends LazyLoadingDisabled ? EagerCartProduct : LazyCartProduct

export declare const CartProduct: (new (init: ModelInit<CartProduct>) => CartProduct) & {
  copyOf(source: CartProduct, mutator: (draft: MutableModel<CartProduct>) => MutableModel<CartProduct> | void): CartProduct;
}

type EagerOrderProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderProduct, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity: number;
  readonly option?: string | null;
  readonly productID: string;
  readonly product?: Product | null;
  readonly orderID: string;
  readonly order?: Order | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrderProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderProduct, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity: number;
  readonly option?: string | null;
  readonly productID: string;
  readonly product: AsyncItem<Product | undefined>;
  readonly orderID: string;
  readonly order: AsyncItem<Order | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OrderProduct = LazyLoading extends LazyLoadingDisabled ? EagerOrderProduct : LazyOrderProduct

export declare const OrderProduct: (new (init: ModelInit<OrderProduct>) => OrderProduct) & {
  copyOf(source: OrderProduct, mutator: (draft: MutableModel<OrderProduct>) => MutableModel<OrderProduct> | void): OrderProduct;
}

type EagerOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly user?: User | null;
  readonly orderProducts?: (OrderProduct | null)[] | null;
  readonly address?: Address | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderAddressId?: string | null;
}

type LazyOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly user: AsyncItem<User | undefined>;
  readonly orderProducts: AsyncCollection<OrderProduct>;
  readonly address: AsyncItem<Address | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderAddressId?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly carts?: (CartProduct | null)[] | null;
  readonly orders?: (Order | null)[] | null;
  readonly addresses?: (Address | null)[] | null;
  readonly sub?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly carts: AsyncCollection<CartProduct>;
  readonly orders: AsyncCollection<Order>;
  readonly addresses: AsyncCollection<Address>;
  readonly sub?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Address, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly address: string;
  readonly subaddress?: string | null;
  readonly city: string;
  readonly country: string;
  readonly fullAddress: string;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly location?: string | null;
  readonly postcode?: string | null;
  readonly state?: string | null;
  readonly user?: User | null;
  readonly userID?: string | null;
  readonly isSelected?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Address, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly address: string;
  readonly subaddress?: string | null;
  readonly city: string;
  readonly country: string;
  readonly fullAddress: string;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly location?: string | null;
  readonly postcode?: string | null;
  readonly state?: string | null;
  readonly user: AsyncItem<User | undefined>;
  readonly userID?: string | null;
  readonly isSelected?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Address = LazyLoading extends LazyLoadingDisabled ? EagerAddress : LazyAddress

export declare const Address: (new (init: ModelInit<Address>) => Address) & {
  copyOf(source: Address, mutator: (draft: MutableModel<Address>) => MutableModel<Address> | void): Address;
}