/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  street?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type AddressAllOutput = {
  __typename?: 'AddressAllOutput';
  address?: Maybe<Array<Address>>;
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  users?: Maybe<Array<User>>;
};

export type AddressEditInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  street?: InputMaybe<Scalars['String']['input']>;
};

export type AddressEditOutput = {
  __typename?: 'AddressEditOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type AddressSeeInput = {
  id: Scalars['Int']['input'];
};

export type AddressSeeOutput = {
  __typename?: 'AddressSeeOutput';
  address?: Maybe<Address>;
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type Category = {
  __typename?: 'Category';
  coverImage?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  restaurantCount: Scalars['Int']['output'];
  restaurants?: Maybe<Array<Restaurant>>;
  shops?: Maybe<Array<Shop>>;
  slug: Scalars['String']['output'];
  totalPages: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CategoryAllSeeOutput = {
  __typename?: 'CategoryAllSeeOutput';
  categories?: Maybe<Array<Category>>;
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CategoryInputType = {
  coverImage?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  restaurants?: InputMaybe<Array<RestaurantInputType>>;
  shops?: InputMaybe<Array<ShopInputType>>;
  slug: Scalars['String']['input'];
};

export type CategoryOutput = {
  __typename?: 'CategoryOutput';
  category?: Maybe<Category>;
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type Comment = {
  __typename?: 'Comment';
  comment: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  isMineComment?: Maybe<Scalars['Boolean']['output']>;
  photo: Photo;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};


export type CommentIsMineCommentArgs = {
  userId: Scalars['Int']['input'];
};

export type CreateAddressInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAddressOutPut = {
  __typename?: 'CreateAddressOutPut';
  address: Address;
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateDishInput = {
  description: Scalars['String']['input'];
  dishOptions?: InputMaybe<Array<DishOptionInputType>>;
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
};

export type CreateDishOutput = {
  __typename?: 'CreateDishOutput';
  dish?: Maybe<Dish>;
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateGoodsInput = {
  description: Scalars['String']['input'];
  goodsItems: Array<GoodsItemInputType>;
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
};

export type CreateGoodsItemInput = {
  extra?: InputMaybe<Scalars['Int']['input']>;
  goodsItemChoice?: InputMaybe<Array<GoodsChoiceItemInputType>>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateGoodsItemOutput = {
  __typename?: 'CreateGoodsItemOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateGoodsOutput = {
  __typename?: 'CreateGoodsOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateOrderInput = {
  orderItems: Array<CreateOrderItemInputType>;
  restaurantId: Scalars['Int']['input'];
};

export type CreateOrderItemInputType = {
  dishId: Scalars['Int']['input'];
  dishOptions?: InputMaybe<Array<OrderItemOptionInputType>>;
};

export type CreateOrderOutput = {
  __typename?: 'CreateOrderOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  order?: Maybe<Order>;
};

export type CreateOrderUserInput = {
  orderUserItems: Array<CreateOrderUserItemInputType>;
  shopId: Scalars['Int']['input'];
};

export type CreateOrderUserItemInputType = {
  goodsId: Scalars['Int']['input'];
  goodsItems?: InputMaybe<Array<OrderUserItemOptionInputType>>;
};

export type CreateOrderUserOutput = {
  __typename?: 'CreateOrderUserOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreatePaddleInput = {
  restaurantId: Scalars['Int']['input'];
  transactionId: Scalars['String']['input'];
};

export type CreatePaddleOutPut = {
  __typename?: 'CreatePaddleOutPut';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateProfileInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
};

export type CreateProfileOutPut = {
  __typename?: 'CreateProfileOutPut';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  profile: Profile;
};

export type CreateRestaurantInput = {
  address: Scalars['String']['input'];
  categoryName: Scalars['String']['input'];
  coverImage: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateRestaurantOutput = {
  __typename?: 'CreateRestaurantOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateShopInput = {
  address: Scalars['String']['input'];
  categoryName: Scalars['String']['input'];
  coverImage: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateShopOutput = {
  __typename?: 'CreateShopOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  profile?: InputMaybe<ProfileInputType>;
  role: UserRole;
  userName: Scalars['String']['input'];
};

export type CreateUserOutput = {
  __typename?: 'CreateUserOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  user: User;
};

export type CreateUserTokenInput = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  role: UserRole;
  userName: Scalars['String']['input'];
  verification?: Scalars['Boolean']['input'];
};

export type CreateUserTokenOutput = {
  __typename?: 'CreateUserTokenOutput';
  accessToken: Scalars['String']['output'];
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  refreshToken: Scalars['String']['output'];
  user: User;
};

export type DeleteAddressInput = {
  id: Scalars['Int']['input'];
};

export type DeleteAddressOutput = {
  __typename?: 'DeleteAddressOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeleteDishInput = {
  id: Scalars['Int']['input'];
};

export type DeleteDishOutput = {
  __typename?: 'DeleteDishOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeleteGoodsInput = {
  id: Scalars['Int']['input'];
};

export type DeleteGoodsOutput = {
  __typename?: 'DeleteGoodsOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeleteProfileInput = {
  id: Scalars['Int']['input'];
};

export type DeleteProfileOutput = {
  __typename?: 'DeleteProfileOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeleteRestaurantInput = {
  id: Scalars['Int']['input'];
};

export type DeleteRestaurantOutput = {
  __typename?: 'DeleteRestaurantOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type Dish = {
  __typename?: 'Dish';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  dishOptions?: Maybe<Array<DishOption>>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  photo?: Maybe<Scalars['String']['output']>;
  price: Scalars['Int']['output'];
  restaurant?: Maybe<Restaurant>;
  updatedAt: Scalars['DateTime']['output'];
};

export type DishChoice = {
  __typename?: 'DishChoice';
  extra?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
};

export type DishChoiceInputType = {
  extra?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type DishInputType = {
  description: Scalars['String']['input'];
  dishOptions?: InputMaybe<Array<DishOptionInputType>>;
  name: Scalars['String']['input'];
  photo?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Int']['input'];
  restaurant?: InputMaybe<RestaurantInputType>;
};

export type DishOption = {
  __typename?: 'DishOption';
  choice?: Maybe<Array<DishChoice>>;
  extra?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
};

export type DishOptionInputType = {
  choice?: InputMaybe<Array<DishChoiceInputType>>;
  extra?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type EditDishInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  dishOptions?: InputMaybe<Array<DishOptionInputType>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
};

export type EditGoodsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
};

export type EditGoodsItemOutput = {
  __typename?: 'EditGoodsItemOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EditOrderInput = {
  id: Scalars['Int']['input'];
  status: OrderStatus;
};

export type EditOrderOutput = {
  __typename?: 'EditOrderOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EditProfileOutput = {
  __typename?: 'EditProfileOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type EditRestaurantInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  coverImage?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type EditRestaurantOutput = {
  __typename?: 'EditRestaurantOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EditShopInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  coverImage?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type GetOrderInput = {
  id: Scalars['Int']['input'];
};

export type GetOrderOutput = {
  __typename?: 'GetOrderOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  order?: Maybe<Order>;
};

export type GetOrderUserInput = {
  id: Scalars['Int']['input'];
};

export type GetOrderUserOutput = {
  __typename?: 'GetOrderUserOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  orderUsers?: Maybe<OrderUser>;
};

export type GetOrderUsersInput = {
  status?: InputMaybe<OrderStatus>;
};

export type GetOrderUsersOutput = {
  __typename?: 'GetOrderUsersOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  orders?: Maybe<Array<Order>>;
};

export type GetOrdersInput = {
  status?: InputMaybe<OrderStatus>;
};

export type GetOrdersOutput = {
  __typename?: 'GetOrdersOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  orders?: Maybe<Array<Order>>;
};

export type GetPaddleOutPut = {
  __typename?: 'GetPaddleOutPut';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  paddles?: Maybe<Array<Paddle>>;
};

export type Goods = {
  __typename?: 'Goods';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  goodsItems: Array<GoodsItem>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  orderusers?: Maybe<Array<OrderUser>>;
  photo?: Maybe<Scalars['String']['output']>;
  price: Scalars['Int']['output'];
  shop?: Maybe<Shop>;
  updatedAt: Scalars['DateTime']['output'];
};

export type GoodsChoiceItemInputType = {
  extra?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type GoodsInputType = {
  description: Scalars['String']['input'];
  goodsItems: Array<GoodsItemInputType>;
  name: Scalars['String']['input'];
  orderusers?: InputMaybe<Array<OrderUserInputType>>;
  photo?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Int']['input'];
  shop?: InputMaybe<ShopInputType>;
};

export type GoodsItem = {
  __typename?: 'GoodsItem';
  createdAt: Scalars['DateTime']['output'];
  extra?: Maybe<Scalars['Int']['output']>;
  goods?: Maybe<Goods>;
  goodsItemChoice?: Maybe<Array<GoodsItemChoice>>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type GoodsItemChoice = {
  __typename?: 'GoodsItemChoice';
  extra?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type GoodsItemInputType = {
  extra?: InputMaybe<Scalars['Int']['input']>;
  goods?: InputMaybe<GoodsInputType>;
  goodsItemChoice?: InputMaybe<Array<GoodsChoiceItemInputType>>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Hashtag = {
  __typename?: 'Hashtag';
  createdAt: Scalars['DateTime']['output'];
  hashtag: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  photos: Array<Photo>;
  totalPhotos: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type HashtagPhotosArgs = {
  page: Scalars['Int']['input'];
};

export type HashtagInputType = {
  hashtag: Scalars['String']['input'];
  photos: Array<PhotoInputType>;
  totalPhotos: Scalars['Int']['input'];
};

export type LikePhotoOutPut = {
  __typename?: 'LikePhotoOutPut';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type LogOutUserOutput = {
  __typename?: 'LogOutUserOutput';
  loggedOut: Scalars['Boolean']['output'];
};

export type LoginEmailInputPick = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginEmailOutput = {
  __typename?: 'LoginEmailOutput';
  accessToken: Scalars['String']['output'];
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  refreshToken: Scalars['String']['output'];
  user: User;
};

export type LoginUsernameInputPick = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginUsernameOutput = {
  __typename?: 'LoginUsernameOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type Message = {
  __typename?: 'Message';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  read: Scalars['Boolean']['output'];
  room: Room;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type MessageDeleteInput = {
  id: Scalars['Int']['input'];
};

export type MessageDeleteOuput = {
  __typename?: 'MessageDeleteOuput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type MessageReadInput = {
  id: Scalars['Int']['input'];
};

export type MessageSendInput = {
  message: Scalars['String']['input'];
  roomId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type MessageSendOutput = {
  __typename?: 'MessageSendOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Message>;
  ok: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAddress: CreateAddressOutPut;
  createComment: Comment;
  createDish: CreateDishOutput;
  createGoods: CreateGoodsOutput;
  createGoodsItem: CreateGoodsItemOutput;
  createOrder: CreateOrderOutput;
  createOrderUser: CreateOrderUserOutput;
  createPaddle: CreatePaddleOutPut;
  createProfile: CreateProfileOutPut;
  createRestaurant: CreateRestaurantOutput;
  createShop: CreateShopOutput;
  createUser: CreateUserOutput;
  createUserToken: CreateUserTokenOutput;
  deleteAddress: DeleteAddressOutput;
  deleteComment: Scalars['Boolean']['output'];
  deleteDish: DeleteDishOutput;
  deleteGoods: DeleteGoodsOutput;
  deleteMessage: MessageDeleteOuput;
  deletePhoto: Scalars['Boolean']['output'];
  deleteProfile: DeleteProfileOutput;
  deleteRestaurant: DeleteRestaurantOutput;
  editAddress: AddressEditOutput;
  editComment: Comment;
  editDish: CreateDishOutput;
  editGoods: EditGoodsItemOutput;
  editOrder: EditOrderOutput;
  editProfile: ProfileEditOutput;
  editRestaurant: EditRestaurantOutput;
  editShop: CreateShopOutput;
  followerUser: UserFollowerOutput;
  likePhoto: LikePhotoOutPut;
  login: LoginUsernameOutput;
  loginEmail: LoginEmailOutput;
  logoutEmail: LogOutUserOutput;
  photoEdit: PhotoEditOutput;
  readMessage: MessageSendOutput;
  sendMessage: MessageSendOutput;
  takeOrder: TakeOrderOutput;
  unfollowerUser: UserUnFollowerOutput;
  uploadFile: Scalars['Boolean']['output'];
  uploadPhoto: Photo;
  verificationEmail: VerificationEmailOutput;
};


export type MutationCreateAddressArgs = {
  createAddressInput: CreateAddressInput;
};


export type MutationCreateCommentArgs = {
  comment?: InputMaybe<Scalars['String']['input']>;
  photoId: Scalars['Int']['input'];
};


export type MutationCreateDishArgs = {
  createDishInput: CreateDishInput;
};


export type MutationCreateGoodsArgs = {
  createGoodInput: CreateGoodsInput;
};


export type MutationCreateGoodsItemArgs = {
  createGoodsItemInput: CreateGoodsItemInput;
};


export type MutationCreateOrderArgs = {
  createOrderInput: CreateOrderInput;
};


export type MutationCreateOrderUserArgs = {
  createOrderUserInput: CreateOrderUserInput;
};


export type MutationCreatePaddleArgs = {
  createPaddleInput: CreatePaddleInput;
};


export type MutationCreateProfileArgs = {
  createProfileInput: CreateProfileInput;
};


export type MutationCreateRestaurantArgs = {
  createRestaurantInput: CreateRestaurantInput;
};


export type MutationCreateShopArgs = {
  createShopInput: CreateShopInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationCreateUserTokenArgs = {
  createUserTokenInput: CreateUserTokenInput;
};


export type MutationDeleteAddressArgs = {
  deleteAddressInput: DeleteAddressInput;
};


export type MutationDeleteCommentArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteDishArgs = {
  deleteDishInput: DeleteDishInput;
};


export type MutationDeleteGoodsArgs = {
  deleteGoodsInput: DeleteGoodsInput;
};


export type MutationDeleteMessageArgs = {
  messageDeleteInput: MessageDeleteInput;
};


export type MutationDeletePhotoArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteProfileArgs = {
  deleteProfileInput: DeleteProfileInput;
};


export type MutationDeleteRestaurantArgs = {
  deleteRestaurantInput: DeleteRestaurantInput;
};


export type MutationEditAddressArgs = {
  addressEditInput: AddressEditInput;
};


export type MutationEditCommentArgs = {
  comment?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationEditDishArgs = {
  editDishInput: EditDishInput;
};


export type MutationEditGoodsArgs = {
  editGoodsInput: EditGoodsInput;
};


export type MutationEditOrderArgs = {
  editOrderInput: EditOrderInput;
};


export type MutationEditProfileArgs = {
  profileEditInput: ProfileEditInput;
};


export type MutationEditRestaurantArgs = {
  editRestaurantInput: EditRestaurantInput;
};


export type MutationEditShopArgs = {
  edithopInput: EditShopInput;
};


export type MutationFollowerUserArgs = {
  userName: Scalars['String']['input'];
};


export type MutationLikePhotoArgs = {
  id: Scalars['Int']['input'];
};


export type MutationLoginArgs = {
  loginInput: LoginUsernameInputPick;
};


export type MutationLoginEmailArgs = {
  input: LoginEmailInputPick;
};


export type MutationLogoutEmailArgs = {
  userId: Scalars['Int']['input'];
};


export type MutationPhotoEditArgs = {
  captionPhoto?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationReadMessageArgs = {
  messageReadInput: MessageReadInput;
};


export type MutationSendMessageArgs = {
  messageSendInput: MessageSendInput;
};


export type MutationTakeOrderArgs = {
  takeOrderInput: TakeOrderInput;
};


export type MutationUnfollowerUserArgs = {
  userName: Scalars['String']['input'];
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationUploadPhotoArgs = {
  captionPhoto?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Scalars['Upload']['input']>;
  filePhoto?: InputMaybe<Scalars['String']['input']>;
};


export type MutationVerificationEmailArgs = {
  verificationEmail: VerificationEmailInput;
};

export type Order = {
  __typename?: 'Order';
  createdAt: Scalars['DateTime']['output'];
  customerUser?: Maybe<User>;
  driverUser?: Maybe<User>;
  id: Scalars['Int']['output'];
  orderItmes: Array<OrderItem>;
  restaurant?: Maybe<Restaurant>;
  status: OrderStatus;
  total?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderInputType = {
  customerUser?: InputMaybe<UserInputType>;
  driverUser?: InputMaybe<UserInputType>;
  orderItmes: Array<OrderItemInputType>;
  restaurant?: InputMaybe<RestaurantInputType>;
  status: OrderStatus;
  total?: InputMaybe<Scalars['Float']['input']>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  createdAt: Scalars['DateTime']['output'];
  dish: Dish;
  dishOptions?: Maybe<Array<OrderItemOption>>;
  id: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderItemInputType = {
  dish: DishInputType;
  dishOptions?: InputMaybe<Array<OrderItemOptionInputType>>;
};

export type OrderItemOption = {
  __typename?: 'OrderItemOption';
  choice?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type OrderItemOptionInputType = {
  choice?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export enum OrderStatus {
  Cooked = 'COOKED',
  Cooking = 'COOKING',
  Delivered = 'DELIVERED',
  Pending = 'PENDING',
  Pickedup = 'PICKEDUP'
}

export type OrderUser = {
  __typename?: 'OrderUser';
  createdAt: Scalars['DateTime']['output'];
  customerOrderUser?: Maybe<User>;
  dirverOrderUser?: Maybe<User>;
  id: Scalars['Int']['output'];
  orderUserItems?: Maybe<Array<OrderUserItem>>;
  shop?: Maybe<Shop>;
  status: OrderStatus;
  total?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderUserInputType = {
  customerOrderUser?: InputMaybe<UserInputType>;
  dirverOrderUser?: InputMaybe<UserInputType>;
  orderUserItems?: InputMaybe<Array<OrderUserItemInputType>>;
  shop?: InputMaybe<ShopInputType>;
  status: OrderStatus;
  total?: InputMaybe<Scalars['Float']['input']>;
};

export type OrderUserItem = {
  __typename?: 'OrderUserItem';
  createdAt: Scalars['DateTime']['output'];
  goods: Goods;
  goodsItems?: Maybe<Array<OrderUserItemOption>>;
  id: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderUserItemInputType = {
  goods: GoodsInputType;
  goodsItems?: InputMaybe<Array<OrderUserItemOptionInputType>>;
};

export type OrderUserItemOption = {
  __typename?: 'OrderUserItemOption';
  choice?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type OrderUserItemOptionInputType = {
  choice?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type Paddle = {
  __typename?: 'Paddle';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  restaurant: Restaurant;
  transactionId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type PaddleInputType = {
  restaurant: RestaurantInputType;
  transactionId: Scalars['String']['input'];
  user: UserInputType;
};

export type Photo = {
  __typename?: 'Photo';
  captionPhoto?: Maybe<Scalars['String']['output']>;
  commentCount: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  file: Scalars['Upload']['output'];
  filePhoto?: Maybe<Scalars['String']['output']>;
  hashtags: Array<Hashtag>;
  id: Scalars['Int']['output'];
  isMineComment: Scalars['Boolean']['output'];
  likes?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};


export type PhotoIsMineCommentArgs = {
  userId: Scalars['Int']['input'];
};

export type PhotoEditOutput = {
  __typename?: 'PhotoEditOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  photo?: Maybe<Photo>;
};

export type PhotoInputType = {
  captionPhoto?: InputMaybe<Scalars['String']['input']>;
  commentCount: Scalars['Int']['input'];
  file: Scalars['Upload']['input'];
  filePhoto?: InputMaybe<Scalars['String']['input']>;
  hashtags: Array<HashtagInputType>;
  isMineComment: Scalars['Boolean']['input'];
  likes?: InputMaybe<Scalars['Int']['input']>;
  user: UserInputType;
};

export type PhotoSerachOutput = {
  __typename?: 'PhotoSerachOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  photos: Array<Photo>;
};

export type Profile = {
  __typename?: 'Profile';
  bio?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProfileEditInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
};

export type ProfileEditOutput = {
  __typename?: 'ProfileEditOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type ProfileInputType = {
  bio?: InputMaybe<Scalars['String']['input']>;
};

export type ProfileSeeInput = {
  id: Scalars['Int']['input'];
};

export type ProfilesAllOutput = {
  __typename?: 'ProfilesAllOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  profiles?: Maybe<Array<Profile>>;
  users?: Maybe<Array<User>>;
};

export type Query = {
  __typename?: 'Query';
  allAddresss: AddressAllOutput;
  allCategories: CategoryAllSeeOutput;
  allProfiles: ProfilesAllOutput;
  allRestaurants: RestaurantsAllOutput;
  findCategoryBySlung: CategoryOutput;
  getOrder: GetOrderOutput;
  getOrderUser: GetOrderUserOutput;
  getOrderUsers: GetOrderUsersOutput;
  getOrders: GetOrdersOutput;
  getPaddles: GetPaddleOutPut;
  me: User;
  searchPhotos: PhotoSerachOutput;
  searchRestaurant: RestaurantSearchOutput;
  searchUsers: UserSerachOutput;
  searchUsersTwo: Array<User>;
  seeAddress: AddressSeeOutput;
  seeFollowers: UserSeeFollowersOutput;
  seeFollowing: UserSeeFollowingOutput;
  seeHashtag: Hashtag;
  seePhoto: Photo;
  seePhotoComments: Array<Comment>;
  seePhotoFeed: Array<Photo>;
  seePhotoLikes: Array<User>;
  seeProfile: ProfilesAllOutput;
  seeRestaurant: RestaurantSeeOutput;
  seeRoom: RoomSeeOutput;
  seeRooms: RoomsSeeOutput;
  userProfile: UserProfileOutput;
};


export type QueryAllAddresssArgs = {
  page?: Scalars['Int']['input'];
};


export type QueryAllProfilesArgs = {
  page?: Scalars['Int']['input'];
};


export type QueryAllRestaurantsArgs = {
  page?: Scalars['Int']['input'];
};


export type QueryFindCategoryBySlungArgs = {
  page?: Scalars['Int']['input'];
  slug: Scalars['String']['input'];
};


export type QueryGetOrderArgs = {
  getOrderInput: GetOrderInput;
};


export type QueryGetOrderUserArgs = {
  getOrderUserInput: GetOrderUserInput;
};


export type QueryGetOrderUsersArgs = {
  getOrderUsersInput: GetOrderUsersInput;
};


export type QueryGetOrdersArgs = {
  getOrdersInput: GetOrdersInput;
};


export type QuerySearchPhotosArgs = {
  cursor?: InputMaybe<Scalars['Int']['input']>;
  keyword: Scalars['String']['input'];
};


export type QuerySearchRestaurantArgs = {
  page?: Scalars['Int']['input'];
  query: Scalars['String']['input'];
};


export type QuerySearchUsersArgs = {
  cursor?: InputMaybe<Scalars['Int']['input']>;
  keyword: Scalars['String']['input'];
};


export type QuerySearchUsersTwoArgs = {
  cursor?: InputMaybe<Scalars['Int']['input']>;
  keyword: Scalars['String']['input'];
};


export type QuerySeeAddressArgs = {
  addressSeeInput: AddressSeeInput;
};


export type QuerySeeFollowersArgs = {
  page: Scalars['Int']['input'];
  userName: Scalars['String']['input'];
};


export type QuerySeeFollowingArgs = {
  cursor?: InputMaybe<Scalars['Int']['input']>;
  userName: Scalars['String']['input'];
};


export type QuerySeeHashtagArgs = {
  hashtag: Scalars['String']['input'];
};


export type QuerySeePhotoArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySeePhotoCommentsArgs = {
  cursor?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};


export type QuerySeePhotoLikesArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySeeProfileArgs = {
  profileSeeInput: ProfileSeeInput;
};


export type QuerySeeRestaurantArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySeeRoomArgs = {
  roomSeeInput: RoomSeeInput;
};


export type QuerySeeRoomsArgs = {
  roomsSeeInput: RoomsSeeInput;
};


export type QueryUserProfileArgs = {
  userId: Scalars['Int']['input'];
};

export type Restaurant = {
  __typename?: 'Restaurant';
  address: Scalars['String']['output'];
  category?: Maybe<Category>;
  coverImage: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  isPromoted: Scalars['Boolean']['output'];
  menu: Array<Dish>;
  name: Scalars['String']['output'];
  paddles: Array<Paddle>;
  promotedUtil: Scalars['DateTime']['output'];
  shops?: Maybe<Array<Shop>>;
  totalItem: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type RestaurantInputType = {
  address: Scalars['String']['input'];
  category?: InputMaybe<CategoryInputType>;
  coverImage: Scalars['String']['input'];
  isPromoted: Scalars['Boolean']['input'];
  menu: Array<DishInputType>;
  name: Scalars['String']['input'];
  paddles: Array<PaddleInputType>;
  promotedUtil: Scalars['DateTime']['input'];
  shops?: InputMaybe<Array<ShopInputType>>;
  user: UserInputType;
};

export type RestaurantSearchOutput = {
  __typename?: 'RestaurantSearchOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  restaurant?: Maybe<Array<Restaurant>>;
};

export type RestaurantSeeOutput = {
  __typename?: 'RestaurantSeeOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  restaurant?: Maybe<Restaurant>;
};

export type RestaurantsAllOutput = {
  __typename?: 'RestaurantsAllOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  restaurants?: Maybe<Array<Restaurant>>;
};

export type Room = {
  __typename?: 'Room';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  messages: Array<Message>;
  unreadTotalNumber: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  users: Array<User>;
};

export type RoomSeeInput = {
  cursor?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type RoomSeeOutput = {
  __typename?: 'RoomSeeOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  room?: Maybe<Room>;
};

export type RoomsSeeInput = {
  cursor?: InputMaybe<Scalars['Int']['input']>;
};

export type RoomsSeeOutput = {
  __typename?: 'RoomsSeeOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  rooms: Array<Room>;
};

export type Shop = {
  __typename?: 'Shop';
  address: Scalars['String']['output'];
  category?: Maybe<Category>;
  coverImage: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type ShopInputType = {
  address: Scalars['String']['input'];
  category?: InputMaybe<CategoryInputType>;
  coverImage: Scalars['String']['input'];
  name: Scalars['String']['input'];
  user: UserInputType;
};

export type SubcriptionMessageInput = {
  id: Scalars['Int']['input'];
};

export type SubcriptionOrderUpdatesInput = {
  id: Scalars['Int']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  cookedOrders: Order;
  orderUpdates: Order;
  pendingOrders: Order;
  roomUPdates: MessageSendOutput;
};


export type SubscriptionOrderUpdatesArgs = {
  subcriptionOrderUpdatesInput: SubcriptionOrderUpdatesInput;
};


export type SubscriptionRoomUPdatesArgs = {
  subcriptionMessageInput: SubcriptionMessageInput;
};

export type TakeOrderInput = {
  id: Scalars['Int']['input'];
};

export type TakeOrderOutput = {
  __typename?: 'TakeOrderOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customerOrders?: Maybe<Array<Order>>;
  email: Scalars['String']['output'];
  file: Scalars['Upload']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  followers?: Maybe<Array<User>>;
  following?: Maybe<Array<User>>;
  fullName?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isFollowing: Scalars['Boolean']['output'];
  isMe: Scalars['Boolean']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  paddles: Array<Paddle>;
  password: Scalars['String']['output'];
  photos: Array<Photo>;
  restaurants: Array<Restaurant>;
  ridesOrders?: Maybe<Array<Order>>;
  role: UserRole;
  totalFollowers: Scalars['Int']['output'];
  totalFollowing: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userName: Scalars['String']['output'];
  verification: Scalars['Boolean']['output'];
  verificationActive: Scalars['Boolean']['output'];
  verifications?: Maybe<Array<Verification>>;
};

export type UserFollowerOutput = {
  __typename?: 'UserFollowerOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type UserInputType = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  customerOrders?: InputMaybe<Array<OrderInputType>>;
  email: Scalars['String']['input'];
  file: Scalars['Upload']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  followers?: InputMaybe<Array<UserInputType>>;
  following?: InputMaybe<Array<UserInputType>>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  paddles: Array<PaddleInputType>;
  password: Scalars['String']['input'];
  photos: Array<PhotoInputType>;
  restaurants: Array<RestaurantInputType>;
  ridesOrders?: InputMaybe<Array<OrderInputType>>;
  role: UserRole;
  userName: Scalars['String']['input'];
  verification?: Scalars['Boolean']['input'];
  verificationActive?: Scalars['Boolean']['input'];
  verifications?: InputMaybe<Array<VerificationInputType>>;
};

export type UserProfileOutput = {
  __typename?: 'UserProfileOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export enum UserRole {
  Client = 'CLIENT',
  Delivery = 'DELIVERY',
  Owner = 'OWNER'
}

export type UserSeeFollowersOutput = {
  __typename?: 'UserSeeFollowersOutput';
  error?: Maybe<Scalars['String']['output']>;
  followers?: Maybe<Array<User>>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UserSeeFollowingOutput = {
  __typename?: 'UserSeeFollowingOutput';
  error?: Maybe<Scalars['String']['output']>;
  following?: Maybe<Array<User>>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UserSeeProfileOutput = {
  __typename?: 'UserSeeProfileOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  user: User;
};

export type UserSerachOutput = {
  __typename?: 'UserSerachOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  users: Array<User>;
};

export type UserUnFollowerOutput = {
  __typename?: 'UserUnFollowerOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type Verification = {
  __typename?: 'Verification';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  verificationAt?: Maybe<Scalars['DateTime']['output']>;
};

export type VerificationEmailInput = {
  code: Scalars['String']['input'];
};

export type VerificationEmailOutput = {
  __typename?: 'VerificationEmailOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type VerificationInputType = {
  code: Scalars['String']['input'];
  user?: InputMaybe<UserInputType>;
  verificationAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LoginMutationMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutationMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginUsernameOutput', ok: boolean, id?: number | null, token?: string | null, error?: string | null } };


export const LoginMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<LoginMutationMutation, LoginMutationMutationVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  street?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type AddressAllOutput = {
  __typename?: 'AddressAllOutput';
  address?: Maybe<Array<Address>>;
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  users?: Maybe<Array<User>>;
};

export type AddressEditInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  street?: InputMaybe<Scalars['String']['input']>;
};

export type AddressEditOutput = {
  __typename?: 'AddressEditOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type AddressSeeInput = {
  id: Scalars['Int']['input'];
};

export type AddressSeeOutput = {
  __typename?: 'AddressSeeOutput';
  address?: Maybe<Address>;
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type Category = {
  __typename?: 'Category';
  coverImage?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  restaurantCount: Scalars['Int']['output'];
  restaurants?: Maybe<Array<Restaurant>>;
  shops?: Maybe<Array<Shop>>;
  slug: Scalars['String']['output'];
  totalPages: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CategoryAllSeeOutput = {
  __typename?: 'CategoryAllSeeOutput';
  categories?: Maybe<Array<Category>>;
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CategoryInputType = {
  coverImage?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  restaurants?: InputMaybe<Array<RestaurantInputType>>;
  shops?: InputMaybe<Array<ShopInputType>>;
  slug: Scalars['String']['input'];
};

export type CategoryOutput = {
  __typename?: 'CategoryOutput';
  category?: Maybe<Category>;
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type Comment = {
  __typename?: 'Comment';
  comment: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  isMineComment?: Maybe<Scalars['Boolean']['output']>;
  photo: Photo;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};


export type CommentIsMineCommentArgs = {
  userId: Scalars['Int']['input'];
};

export type CreateAddressInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAddressOutPut = {
  __typename?: 'CreateAddressOutPut';
  address: Address;
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateDishInput = {
  description: Scalars['String']['input'];
  dishOptions?: InputMaybe<Array<DishOptionInputType>>;
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
};

export type CreateDishOutput = {
  __typename?: 'CreateDishOutput';
  dish?: Maybe<Dish>;
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateGoodsInput = {
  description: Scalars['String']['input'];
  goodsItems: Array<GoodsItemInputType>;
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
};

export type CreateGoodsItemInput = {
  extra?: InputMaybe<Scalars['Int']['input']>;
  goodsItemChoice?: InputMaybe<Array<GoodsChoiceItemInputType>>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateGoodsItemOutput = {
  __typename?: 'CreateGoodsItemOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateGoodsOutput = {
  __typename?: 'CreateGoodsOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateOrderInput = {
  orderItems: Array<CreateOrderItemInputType>;
  restaurantId: Scalars['Int']['input'];
};

export type CreateOrderItemInputType = {
  dishId: Scalars['Int']['input'];
  dishOptions?: InputMaybe<Array<OrderItemOptionInputType>>;
};

export type CreateOrderOutput = {
  __typename?: 'CreateOrderOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  order?: Maybe<Order>;
};

export type CreateOrderUserInput = {
  orderUserItems: Array<CreateOrderUserItemInputType>;
  shopId: Scalars['Int']['input'];
};

export type CreateOrderUserItemInputType = {
  goodsId: Scalars['Int']['input'];
  goodsItems?: InputMaybe<Array<OrderUserItemOptionInputType>>;
};

export type CreateOrderUserOutput = {
  __typename?: 'CreateOrderUserOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreatePaddleInput = {
  restaurantId: Scalars['Int']['input'];
  transactionId: Scalars['String']['input'];
};

export type CreatePaddleOutPut = {
  __typename?: 'CreatePaddleOutPut';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateProfileInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
};

export type CreateProfileOutPut = {
  __typename?: 'CreateProfileOutPut';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  profile: Profile;
};

export type CreateRestaurantInput = {
  address: Scalars['String']['input'];
  categoryName: Scalars['String']['input'];
  coverImage: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateRestaurantOutput = {
  __typename?: 'CreateRestaurantOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateShopInput = {
  address: Scalars['String']['input'];
  categoryName: Scalars['String']['input'];
  coverImage: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateShopOutput = {
  __typename?: 'CreateShopOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  profile?: InputMaybe<ProfileInputType>;
  role: UserRole;
  userName: Scalars['String']['input'];
};

export type CreateUserOutput = {
  __typename?: 'CreateUserOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  user: User;
};

export type CreateUserTokenInput = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  role: UserRole;
  userName: Scalars['String']['input'];
  verification?: Scalars['Boolean']['input'];
};

export type CreateUserTokenOutput = {
  __typename?: 'CreateUserTokenOutput';
  accessToken: Scalars['String']['output'];
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  refreshToken: Scalars['String']['output'];
  user: User;
};

export type DeleteAddressInput = {
  id: Scalars['Int']['input'];
};

export type DeleteAddressOutput = {
  __typename?: 'DeleteAddressOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeleteDishInput = {
  id: Scalars['Int']['input'];
};

export type DeleteDishOutput = {
  __typename?: 'DeleteDishOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeleteGoodsInput = {
  id: Scalars['Int']['input'];
};

export type DeleteGoodsOutput = {
  __typename?: 'DeleteGoodsOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeleteProfileInput = {
  id: Scalars['Int']['input'];
};

export type DeleteProfileOutput = {
  __typename?: 'DeleteProfileOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeleteRestaurantInput = {
  id: Scalars['Int']['input'];
};

export type DeleteRestaurantOutput = {
  __typename?: 'DeleteRestaurantOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type Dish = {
  __typename?: 'Dish';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  dishOptions?: Maybe<Array<DishOption>>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  photo?: Maybe<Scalars['String']['output']>;
  price: Scalars['Int']['output'];
  restaurant?: Maybe<Restaurant>;
  updatedAt: Scalars['DateTime']['output'];
};

export type DishChoice = {
  __typename?: 'DishChoice';
  extra?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
};

export type DishChoiceInputType = {
  extra?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type DishInputType = {
  description: Scalars['String']['input'];
  dishOptions?: InputMaybe<Array<DishOptionInputType>>;
  name: Scalars['String']['input'];
  photo?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Int']['input'];
  restaurant?: InputMaybe<RestaurantInputType>;
};

export type DishOption = {
  __typename?: 'DishOption';
  choice?: Maybe<Array<DishChoice>>;
  extra?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
};

export type DishOptionInputType = {
  choice?: InputMaybe<Array<DishChoiceInputType>>;
  extra?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type EditDishInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  dishOptions?: InputMaybe<Array<DishOptionInputType>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
};

export type EditGoodsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
};

export type EditGoodsItemOutput = {
  __typename?: 'EditGoodsItemOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EditOrderInput = {
  id: Scalars['Int']['input'];
  status: OrderStatus;
};

export type EditOrderOutput = {
  __typename?: 'EditOrderOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EditProfileOutput = {
  __typename?: 'EditProfileOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type EditRestaurantInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  coverImage?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type EditRestaurantOutput = {
  __typename?: 'EditRestaurantOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EditShopInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  coverImage?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type GetOrderInput = {
  id: Scalars['Int']['input'];
};

export type GetOrderOutput = {
  __typename?: 'GetOrderOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  order?: Maybe<Order>;
};

export type GetOrderUserInput = {
  id: Scalars['Int']['input'];
};

export type GetOrderUserOutput = {
  __typename?: 'GetOrderUserOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  orderUsers?: Maybe<OrderUser>;
};

export type GetOrderUsersInput = {
  status?: InputMaybe<OrderStatus>;
};

export type GetOrderUsersOutput = {
  __typename?: 'GetOrderUsersOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  orders?: Maybe<Array<Order>>;
};

export type GetOrdersInput = {
  status?: InputMaybe<OrderStatus>;
};

export type GetOrdersOutput = {
  __typename?: 'GetOrdersOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  orders?: Maybe<Array<Order>>;
};

export type GetPaddleOutPut = {
  __typename?: 'GetPaddleOutPut';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  paddles?: Maybe<Array<Paddle>>;
};

export type Goods = {
  __typename?: 'Goods';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  goodsItems: Array<GoodsItem>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  orderusers?: Maybe<Array<OrderUser>>;
  photo?: Maybe<Scalars['String']['output']>;
  price: Scalars['Int']['output'];
  shop?: Maybe<Shop>;
  updatedAt: Scalars['DateTime']['output'];
};

export type GoodsChoiceItemInputType = {
  extra?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type GoodsInputType = {
  description: Scalars['String']['input'];
  goodsItems: Array<GoodsItemInputType>;
  name: Scalars['String']['input'];
  orderusers?: InputMaybe<Array<OrderUserInputType>>;
  photo?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Int']['input'];
  shop?: InputMaybe<ShopInputType>;
};

export type GoodsItem = {
  __typename?: 'GoodsItem';
  createdAt: Scalars['DateTime']['output'];
  extra?: Maybe<Scalars['Int']['output']>;
  goods?: Maybe<Goods>;
  goodsItemChoice?: Maybe<Array<GoodsItemChoice>>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type GoodsItemChoice = {
  __typename?: 'GoodsItemChoice';
  extra?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type GoodsItemInputType = {
  extra?: InputMaybe<Scalars['Int']['input']>;
  goods?: InputMaybe<GoodsInputType>;
  goodsItemChoice?: InputMaybe<Array<GoodsChoiceItemInputType>>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Hashtag = {
  __typename?: 'Hashtag';
  createdAt: Scalars['DateTime']['output'];
  hashtag: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  photos: Array<Photo>;
  totalPhotos: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type HashtagPhotosArgs = {
  page: Scalars['Int']['input'];
};

export type HashtagInputType = {
  hashtag: Scalars['String']['input'];
  photos: Array<PhotoInputType>;
  totalPhotos: Scalars['Int']['input'];
};

export type LikePhotoOutPut = {
  __typename?: 'LikePhotoOutPut';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type LogOutUserOutput = {
  __typename?: 'LogOutUserOutput';
  loggedOut: Scalars['Boolean']['output'];
};

export type LoginEmailInputPick = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginEmailOutput = {
  __typename?: 'LoginEmailOutput';
  accessToken: Scalars['String']['output'];
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  refreshToken: Scalars['String']['output'];
  user: User;
};

export type LoginUsernameInputPick = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginUsernameOutput = {
  __typename?: 'LoginUsernameOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type Message = {
  __typename?: 'Message';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  read: Scalars['Boolean']['output'];
  room: Room;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type MessageDeleteInput = {
  id: Scalars['Int']['input'];
};

export type MessageDeleteOuput = {
  __typename?: 'MessageDeleteOuput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type MessageReadInput = {
  id: Scalars['Int']['input'];
};

export type MessageSendInput = {
  message: Scalars['String']['input'];
  roomId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type MessageSendOutput = {
  __typename?: 'MessageSendOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Message>;
  ok: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAddress: CreateAddressOutPut;
  createComment: Comment;
  createDish: CreateDishOutput;
  createGoods: CreateGoodsOutput;
  createGoodsItem: CreateGoodsItemOutput;
  createOrder: CreateOrderOutput;
  createOrderUser: CreateOrderUserOutput;
  createPaddle: CreatePaddleOutPut;
  createProfile: CreateProfileOutPut;
  createRestaurant: CreateRestaurantOutput;
  createShop: CreateShopOutput;
  createUser: CreateUserOutput;
  createUserToken: CreateUserTokenOutput;
  deleteAddress: DeleteAddressOutput;
  deleteComment: Scalars['Boolean']['output'];
  deleteDish: DeleteDishOutput;
  deleteGoods: DeleteGoodsOutput;
  deleteMessage: MessageDeleteOuput;
  deletePhoto: Scalars['Boolean']['output'];
  deleteProfile: DeleteProfileOutput;
  deleteRestaurant: DeleteRestaurantOutput;
  editAddress: AddressEditOutput;
  editComment: Comment;
  editDish: CreateDishOutput;
  editGoods: EditGoodsItemOutput;
  editOrder: EditOrderOutput;
  editProfile: ProfileEditOutput;
  editRestaurant: EditRestaurantOutput;
  editShop: CreateShopOutput;
  followerUser: UserFollowerOutput;
  likePhoto: LikePhotoOutPut;
  login: LoginUsernameOutput;
  loginEmail: LoginEmailOutput;
  logoutEmail: LogOutUserOutput;
  photoEdit: PhotoEditOutput;
  readMessage: MessageSendOutput;
  sendMessage: MessageSendOutput;
  takeOrder: TakeOrderOutput;
  unfollowerUser: UserUnFollowerOutput;
  uploadFile: Scalars['Boolean']['output'];
  uploadPhoto: Photo;
  verificationEmail: VerificationEmailOutput;
};


export type MutationCreateAddressArgs = {
  createAddressInput: CreateAddressInput;
};


export type MutationCreateCommentArgs = {
  comment?: InputMaybe<Scalars['String']['input']>;
  photoId: Scalars['Int']['input'];
};


export type MutationCreateDishArgs = {
  createDishInput: CreateDishInput;
};


export type MutationCreateGoodsArgs = {
  createGoodInput: CreateGoodsInput;
};


export type MutationCreateGoodsItemArgs = {
  createGoodsItemInput: CreateGoodsItemInput;
};


export type MutationCreateOrderArgs = {
  createOrderInput: CreateOrderInput;
};


export type MutationCreateOrderUserArgs = {
  createOrderUserInput: CreateOrderUserInput;
};


export type MutationCreatePaddleArgs = {
  createPaddleInput: CreatePaddleInput;
};


export type MutationCreateProfileArgs = {
  createProfileInput: CreateProfileInput;
};


export type MutationCreateRestaurantArgs = {
  createRestaurantInput: CreateRestaurantInput;
};


export type MutationCreateShopArgs = {
  createShopInput: CreateShopInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationCreateUserTokenArgs = {
  createUserTokenInput: CreateUserTokenInput;
};


export type MutationDeleteAddressArgs = {
  deleteAddressInput: DeleteAddressInput;
};


export type MutationDeleteCommentArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteDishArgs = {
  deleteDishInput: DeleteDishInput;
};


export type MutationDeleteGoodsArgs = {
  deleteGoodsInput: DeleteGoodsInput;
};


export type MutationDeleteMessageArgs = {
  messageDeleteInput: MessageDeleteInput;
};


export type MutationDeletePhotoArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteProfileArgs = {
  deleteProfileInput: DeleteProfileInput;
};


export type MutationDeleteRestaurantArgs = {
  deleteRestaurantInput: DeleteRestaurantInput;
};


export type MutationEditAddressArgs = {
  addressEditInput: AddressEditInput;
};


export type MutationEditCommentArgs = {
  comment?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationEditDishArgs = {
  editDishInput: EditDishInput;
};


export type MutationEditGoodsArgs = {
  editGoodsInput: EditGoodsInput;
};


export type MutationEditOrderArgs = {
  editOrderInput: EditOrderInput;
};


export type MutationEditProfileArgs = {
  profileEditInput: ProfileEditInput;
};


export type MutationEditRestaurantArgs = {
  editRestaurantInput: EditRestaurantInput;
};


export type MutationEditShopArgs = {
  edithopInput: EditShopInput;
};


export type MutationFollowerUserArgs = {
  userName: Scalars['String']['input'];
};


export type MutationLikePhotoArgs = {
  id: Scalars['Int']['input'];
};


export type MutationLoginArgs = {
  loginInput: LoginUsernameInputPick;
};


export type MutationLoginEmailArgs = {
  input: LoginEmailInputPick;
};


export type MutationLogoutEmailArgs = {
  userId: Scalars['Int']['input'];
};


export type MutationPhotoEditArgs = {
  captionPhoto?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationReadMessageArgs = {
  messageReadInput: MessageReadInput;
};


export type MutationSendMessageArgs = {
  messageSendInput: MessageSendInput;
};


export type MutationTakeOrderArgs = {
  takeOrderInput: TakeOrderInput;
};


export type MutationUnfollowerUserArgs = {
  userName: Scalars['String']['input'];
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationUploadPhotoArgs = {
  captionPhoto?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Scalars['Upload']['input']>;
  filePhoto?: InputMaybe<Scalars['String']['input']>;
};


export type MutationVerificationEmailArgs = {
  verificationEmail: VerificationEmailInput;
};

export type Order = {
  __typename?: 'Order';
  createdAt: Scalars['DateTime']['output'];
  customerUser?: Maybe<User>;
  driverUser?: Maybe<User>;
  id: Scalars['Int']['output'];
  orderItmes: Array<OrderItem>;
  restaurant?: Maybe<Restaurant>;
  status: OrderStatus;
  total?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderInputType = {
  customerUser?: InputMaybe<UserInputType>;
  driverUser?: InputMaybe<UserInputType>;
  orderItmes: Array<OrderItemInputType>;
  restaurant?: InputMaybe<RestaurantInputType>;
  status: OrderStatus;
  total?: InputMaybe<Scalars['Float']['input']>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  createdAt: Scalars['DateTime']['output'];
  dish: Dish;
  dishOptions?: Maybe<Array<OrderItemOption>>;
  id: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderItemInputType = {
  dish: DishInputType;
  dishOptions?: InputMaybe<Array<OrderItemOptionInputType>>;
};

export type OrderItemOption = {
  __typename?: 'OrderItemOption';
  choice?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type OrderItemOptionInputType = {
  choice?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export enum OrderStatus {
  Cooked = 'COOKED',
  Cooking = 'COOKING',
  Delivered = 'DELIVERED',
  Pending = 'PENDING',
  Pickedup = 'PICKEDUP'
}

export type OrderUser = {
  __typename?: 'OrderUser';
  createdAt: Scalars['DateTime']['output'];
  customerOrderUser?: Maybe<User>;
  dirverOrderUser?: Maybe<User>;
  id: Scalars['Int']['output'];
  orderUserItems?: Maybe<Array<OrderUserItem>>;
  shop?: Maybe<Shop>;
  status: OrderStatus;
  total?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderUserInputType = {
  customerOrderUser?: InputMaybe<UserInputType>;
  dirverOrderUser?: InputMaybe<UserInputType>;
  orderUserItems?: InputMaybe<Array<OrderUserItemInputType>>;
  shop?: InputMaybe<ShopInputType>;
  status: OrderStatus;
  total?: InputMaybe<Scalars['Float']['input']>;
};

export type OrderUserItem = {
  __typename?: 'OrderUserItem';
  createdAt: Scalars['DateTime']['output'];
  goods: Goods;
  goodsItems?: Maybe<Array<OrderUserItemOption>>;
  id: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderUserItemInputType = {
  goods: GoodsInputType;
  goodsItems?: InputMaybe<Array<OrderUserItemOptionInputType>>;
};

export type OrderUserItemOption = {
  __typename?: 'OrderUserItemOption';
  choice?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type OrderUserItemOptionInputType = {
  choice?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type Paddle = {
  __typename?: 'Paddle';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  restaurant: Restaurant;
  transactionId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type PaddleInputType = {
  restaurant: RestaurantInputType;
  transactionId: Scalars['String']['input'];
  user: UserInputType;
};

export type Photo = {
  __typename?: 'Photo';
  captionPhoto?: Maybe<Scalars['String']['output']>;
  commentCount: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  file: Scalars['Upload']['output'];
  filePhoto?: Maybe<Scalars['String']['output']>;
  hashtags: Array<Hashtag>;
  id: Scalars['Int']['output'];
  isMineComment: Scalars['Boolean']['output'];
  likes?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};


export type PhotoIsMineCommentArgs = {
  userId: Scalars['Int']['input'];
};

export type PhotoEditOutput = {
  __typename?: 'PhotoEditOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  photo?: Maybe<Photo>;
};

export type PhotoInputType = {
  captionPhoto?: InputMaybe<Scalars['String']['input']>;
  commentCount: Scalars['Int']['input'];
  file: Scalars['Upload']['input'];
  filePhoto?: InputMaybe<Scalars['String']['input']>;
  hashtags: Array<HashtagInputType>;
  isMineComment: Scalars['Boolean']['input'];
  likes?: InputMaybe<Scalars['Int']['input']>;
  user: UserInputType;
};

export type PhotoSerachOutput = {
  __typename?: 'PhotoSerachOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  photos: Array<Photo>;
};

export type Profile = {
  __typename?: 'Profile';
  bio?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProfileEditInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
};

export type ProfileEditOutput = {
  __typename?: 'ProfileEditOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type ProfileInputType = {
  bio?: InputMaybe<Scalars['String']['input']>;
};

export type ProfileSeeInput = {
  id: Scalars['Int']['input'];
};

export type ProfilesAllOutput = {
  __typename?: 'ProfilesAllOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  profiles?: Maybe<Array<Profile>>;
  users?: Maybe<Array<User>>;
};

export type Query = {
  __typename?: 'Query';
  allAddresss: AddressAllOutput;
  allCategories: CategoryAllSeeOutput;
  allProfiles: ProfilesAllOutput;
  allRestaurants: RestaurantsAllOutput;
  findCategoryBySlung: CategoryOutput;
  getOrder: GetOrderOutput;
  getOrderUser: GetOrderUserOutput;
  getOrderUsers: GetOrderUsersOutput;
  getOrders: GetOrdersOutput;
  getPaddles: GetPaddleOutPut;
  me: User;
  searchPhotos: PhotoSerachOutput;
  searchRestaurant: RestaurantSearchOutput;
  searchUsers: UserSerachOutput;
  searchUsersTwo: Array<User>;
  seeAddress: AddressSeeOutput;
  seeFollowers: UserSeeFollowersOutput;
  seeFollowing: UserSeeFollowingOutput;
  seeHashtag: Hashtag;
  seePhoto: Photo;
  seePhotoComments: Array<Comment>;
  seePhotoFeed: Array<Photo>;
  seePhotoLikes: Array<User>;
  seeProfile: ProfilesAllOutput;
  seeRestaurant: RestaurantSeeOutput;
  seeRoom: RoomSeeOutput;
  seeRooms: RoomsSeeOutput;
  userProfile: UserProfileOutput;
};


export type QueryAllAddresssArgs = {
  page?: Scalars['Int']['input'];
};


export type QueryAllProfilesArgs = {
  page?: Scalars['Int']['input'];
};


export type QueryAllRestaurantsArgs = {
  page?: Scalars['Int']['input'];
};


export type QueryFindCategoryBySlungArgs = {
  page?: Scalars['Int']['input'];
  slug: Scalars['String']['input'];
};


export type QueryGetOrderArgs = {
  getOrderInput: GetOrderInput;
};


export type QueryGetOrderUserArgs = {
  getOrderUserInput: GetOrderUserInput;
};


export type QueryGetOrderUsersArgs = {
  getOrderUsersInput: GetOrderUsersInput;
};


export type QueryGetOrdersArgs = {
  getOrdersInput: GetOrdersInput;
};


export type QuerySearchPhotosArgs = {
  cursor?: InputMaybe<Scalars['Int']['input']>;
  keyword: Scalars['String']['input'];
};


export type QuerySearchRestaurantArgs = {
  page?: Scalars['Int']['input'];
  query: Scalars['String']['input'];
};


export type QuerySearchUsersArgs = {
  cursor?: InputMaybe<Scalars['Int']['input']>;
  keyword: Scalars['String']['input'];
};


export type QuerySearchUsersTwoArgs = {
  cursor?: InputMaybe<Scalars['Int']['input']>;
  keyword: Scalars['String']['input'];
};


export type QuerySeeAddressArgs = {
  addressSeeInput: AddressSeeInput;
};


export type QuerySeeFollowersArgs = {
  page: Scalars['Int']['input'];
  userName: Scalars['String']['input'];
};


export type QuerySeeFollowingArgs = {
  cursor?: InputMaybe<Scalars['Int']['input']>;
  userName: Scalars['String']['input'];
};


export type QuerySeeHashtagArgs = {
  hashtag: Scalars['String']['input'];
};


export type QuerySeePhotoArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySeePhotoCommentsArgs = {
  cursor?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};


export type QuerySeePhotoLikesArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySeeProfileArgs = {
  profileSeeInput: ProfileSeeInput;
};


export type QuerySeeRestaurantArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySeeRoomArgs = {
  roomSeeInput: RoomSeeInput;
};


export type QuerySeeRoomsArgs = {
  roomsSeeInput: RoomsSeeInput;
};


export type QueryUserProfileArgs = {
  userId: Scalars['Int']['input'];
};

export type Restaurant = {
  __typename?: 'Restaurant';
  address: Scalars['String']['output'];
  category?: Maybe<Category>;
  coverImage: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  isPromoted: Scalars['Boolean']['output'];
  menu: Array<Dish>;
  name: Scalars['String']['output'];
  paddles: Array<Paddle>;
  promotedUtil: Scalars['DateTime']['output'];
  shops?: Maybe<Array<Shop>>;
  totalItem: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type RestaurantInputType = {
  address: Scalars['String']['input'];
  category?: InputMaybe<CategoryInputType>;
  coverImage: Scalars['String']['input'];
  isPromoted: Scalars['Boolean']['input'];
  menu: Array<DishInputType>;
  name: Scalars['String']['input'];
  paddles: Array<PaddleInputType>;
  promotedUtil: Scalars['DateTime']['input'];
  shops?: InputMaybe<Array<ShopInputType>>;
  user: UserInputType;
};

export type RestaurantSearchOutput = {
  __typename?: 'RestaurantSearchOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  restaurant?: Maybe<Array<Restaurant>>;
};

export type RestaurantSeeOutput = {
  __typename?: 'RestaurantSeeOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  restaurant?: Maybe<Restaurant>;
};

export type RestaurantsAllOutput = {
  __typename?: 'RestaurantsAllOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  restaurants?: Maybe<Array<Restaurant>>;
};

export type Room = {
  __typename?: 'Room';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  messages: Array<Message>;
  unreadTotalNumber: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  users: Array<User>;
};

export type RoomSeeInput = {
  cursor?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type RoomSeeOutput = {
  __typename?: 'RoomSeeOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  room?: Maybe<Room>;
};

export type RoomsSeeInput = {
  cursor?: InputMaybe<Scalars['Int']['input']>;
};

export type RoomsSeeOutput = {
  __typename?: 'RoomsSeeOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  rooms: Array<Room>;
};

export type Shop = {
  __typename?: 'Shop';
  address: Scalars['String']['output'];
  category?: Maybe<Category>;
  coverImage: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type ShopInputType = {
  address: Scalars['String']['input'];
  category?: InputMaybe<CategoryInputType>;
  coverImage: Scalars['String']['input'];
  name: Scalars['String']['input'];
  user: UserInputType;
};

export type SubcriptionMessageInput = {
  id: Scalars['Int']['input'];
};

export type SubcriptionOrderUpdatesInput = {
  id: Scalars['Int']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  cookedOrders: Order;
  orderUpdates: Order;
  pendingOrders: Order;
  roomUPdates: MessageSendOutput;
};


export type SubscriptionOrderUpdatesArgs = {
  subcriptionOrderUpdatesInput: SubcriptionOrderUpdatesInput;
};


export type SubscriptionRoomUPdatesArgs = {
  subcriptionMessageInput: SubcriptionMessageInput;
};

export type TakeOrderInput = {
  id: Scalars['Int']['input'];
};

export type TakeOrderOutput = {
  __typename?: 'TakeOrderOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customerOrders?: Maybe<Array<Order>>;
  email: Scalars['String']['output'];
  file: Scalars['Upload']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  followers?: Maybe<Array<User>>;
  following?: Maybe<Array<User>>;
  fullName?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isFollowing: Scalars['Boolean']['output'];
  isMe: Scalars['Boolean']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  paddles: Array<Paddle>;
  password: Scalars['String']['output'];
  photos: Array<Photo>;
  restaurants: Array<Restaurant>;
  ridesOrders?: Maybe<Array<Order>>;
  role: UserRole;
  totalFollowers: Scalars['Int']['output'];
  totalFollowing: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userName: Scalars['String']['output'];
  verification: Scalars['Boolean']['output'];
  verificationActive: Scalars['Boolean']['output'];
  verifications?: Maybe<Array<Verification>>;
};

export type UserFollowerOutput = {
  __typename?: 'UserFollowerOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type UserInputType = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  customerOrders?: InputMaybe<Array<OrderInputType>>;
  email: Scalars['String']['input'];
  file: Scalars['Upload']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  followers?: InputMaybe<Array<UserInputType>>;
  following?: InputMaybe<Array<UserInputType>>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  paddles: Array<PaddleInputType>;
  password: Scalars['String']['input'];
  photos: Array<PhotoInputType>;
  restaurants: Array<RestaurantInputType>;
  ridesOrders?: InputMaybe<Array<OrderInputType>>;
  role: UserRole;
  userName: Scalars['String']['input'];
  verification?: Scalars['Boolean']['input'];
  verificationActive?: Scalars['Boolean']['input'];
  verifications?: InputMaybe<Array<VerificationInputType>>;
};

export type UserProfileOutput = {
  __typename?: 'UserProfileOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export enum UserRole {
  Client = 'CLIENT',
  Delivery = 'DELIVERY',
  Owner = 'OWNER'
}

export type UserSeeFollowersOutput = {
  __typename?: 'UserSeeFollowersOutput';
  error?: Maybe<Scalars['String']['output']>;
  followers?: Maybe<Array<User>>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UserSeeFollowingOutput = {
  __typename?: 'UserSeeFollowingOutput';
  error?: Maybe<Scalars['String']['output']>;
  following?: Maybe<Array<User>>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UserSeeProfileOutput = {
  __typename?: 'UserSeeProfileOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  user: User;
};

export type UserSerachOutput = {
  __typename?: 'UserSerachOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
  users: Array<User>;
};

export type UserUnFollowerOutput = {
  __typename?: 'UserUnFollowerOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type Verification = {
  __typename?: 'Verification';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  verificationAt?: Maybe<Scalars['DateTime']['output']>;
};

export type VerificationEmailInput = {
  code: Scalars['String']['input'];
};

export type VerificationEmailOutput = {
  __typename?: 'VerificationEmailOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type VerificationInputType = {
  code: Scalars['String']['input'];
  user?: InputMaybe<UserInputType>;
  verificationAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LoginMutationMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutationMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginUsernameOutput', ok: boolean, id?: number | null, token?: string | null, error?: string | null } };
