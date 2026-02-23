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
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type AdvanceContract = {
  actualRepaid: Scalars['BigInt']['output'];
  advanceAmount: Scalars['BigInt']['output'];
  advanceContract: Scalars['Bytes']['output'];
  advanceRepaid?: Maybe<AdvanceRepaid>;
  collateralReceiver: Scalars['Bytes']['output'];
  collaterals: Array<AdvanceContractCollateral>;
  creator: Scalars['Bytes']['output'];
  expenses: Array<Expense>;
  expirationDate: Scalars['BigInt']['output'];
  feePpm: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  isPackAdvance: Scalars['Boolean']['output'];
  offerDuration: Scalars['BigInt']['output'];
  paymentTokenAddress: Scalars['Bytes']['output'];
  recipient: Scalars['Bytes']['output'];
  recoupmentAmount: Scalars['BigInt']['output'];
  repaidAmount: Scalars['BigInt']['output'];
  status: AdvanceStatus;
  templateAddress: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};


export type AdvanceContractCollateralsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdvanceContractCollateral_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AdvanceContractCollateral_Filter>;
};


export type AdvanceContractExpensesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Expense_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Expense_Filter>;
};

export type AdvanceContractCollateral = {
  advanceContract: AdvanceContract;
  id: Scalars['Bytes']['output'];
  tokenAddress: Scalars['Bytes']['output'];
  tokenAmount: Scalars['BigInt']['output'];
  tokenId: Scalars['BigInt']['output'];
};

export type AdvanceContractCollateral_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  advanceContract?: InputMaybe<Scalars['String']['input']>;
  advanceContract_?: InputMaybe<AdvanceContract_Filter>;
  advanceContract_contains?: InputMaybe<Scalars['String']['input']>;
  advanceContract_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  advanceContract_ends_with?: InputMaybe<Scalars['String']['input']>;
  advanceContract_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  advanceContract_gt?: InputMaybe<Scalars['String']['input']>;
  advanceContract_gte?: InputMaybe<Scalars['String']['input']>;
  advanceContract_in?: InputMaybe<Array<Scalars['String']['input']>>;
  advanceContract_lt?: InputMaybe<Scalars['String']['input']>;
  advanceContract_lte?: InputMaybe<Scalars['String']['input']>;
  advanceContract_not?: InputMaybe<Scalars['String']['input']>;
  advanceContract_not_contains?: InputMaybe<Scalars['String']['input']>;
  advanceContract_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  advanceContract_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  advanceContract_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  advanceContract_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  advanceContract_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  advanceContract_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  advanceContract_starts_with?: InputMaybe<Scalars['String']['input']>;
  advanceContract_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<AdvanceContractCollateral_Filter>>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AdvanceContractCollateral_Filter>>>;
  tokenAddress?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokenAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokenAmount?: InputMaybe<Scalars['BigInt']['input']>;
  tokenAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type AdvanceContractCollateral_OrderBy =
  | 'advanceContract'
  | 'advanceContract__actualRepaid'
  | 'advanceContract__advanceAmount'
  | 'advanceContract__advanceContract'
  | 'advanceContract__collateralReceiver'
  | 'advanceContract__creator'
  | 'advanceContract__expirationDate'
  | 'advanceContract__feePpm'
  | 'advanceContract__id'
  | 'advanceContract__isPackAdvance'
  | 'advanceContract__offerDuration'
  | 'advanceContract__paymentTokenAddress'
  | 'advanceContract__recipient'
  | 'advanceContract__recoupmentAmount'
  | 'advanceContract__repaidAmount'
  | 'advanceContract__status'
  | 'advanceContract__templateAddress'
  | 'advanceContract__timestamp'
  | 'advanceContract__transactionHash'
  | 'id'
  | 'tokenAddress'
  | 'tokenAmount'
  | 'tokenId';

export type AdvanceContract_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  actualRepaid?: InputMaybe<Scalars['BigInt']['input']>;
  actualRepaid_gt?: InputMaybe<Scalars['BigInt']['input']>;
  actualRepaid_gte?: InputMaybe<Scalars['BigInt']['input']>;
  actualRepaid_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  actualRepaid_lt?: InputMaybe<Scalars['BigInt']['input']>;
  actualRepaid_lte?: InputMaybe<Scalars['BigInt']['input']>;
  actualRepaid_not?: InputMaybe<Scalars['BigInt']['input']>;
  actualRepaid_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  advanceAmount?: InputMaybe<Scalars['BigInt']['input']>;
  advanceAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  advanceAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  advanceAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  advanceAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  advanceAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  advanceAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  advanceAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  advanceContract?: InputMaybe<Scalars['Bytes']['input']>;
  advanceContract_contains?: InputMaybe<Scalars['Bytes']['input']>;
  advanceContract_gt?: InputMaybe<Scalars['Bytes']['input']>;
  advanceContract_gte?: InputMaybe<Scalars['Bytes']['input']>;
  advanceContract_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  advanceContract_lt?: InputMaybe<Scalars['Bytes']['input']>;
  advanceContract_lte?: InputMaybe<Scalars['Bytes']['input']>;
  advanceContract_not?: InputMaybe<Scalars['Bytes']['input']>;
  advanceContract_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  advanceContract_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  advanceRepaid?: InputMaybe<Scalars['String']['input']>;
  advanceRepaid_?: InputMaybe<AdvanceRepaid_Filter>;
  advanceRepaid_contains?: InputMaybe<Scalars['String']['input']>;
  advanceRepaid_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  advanceRepaid_ends_with?: InputMaybe<Scalars['String']['input']>;
  advanceRepaid_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  advanceRepaid_gt?: InputMaybe<Scalars['String']['input']>;
  advanceRepaid_gte?: InputMaybe<Scalars['String']['input']>;
  advanceRepaid_in?: InputMaybe<Array<Scalars['String']['input']>>;
  advanceRepaid_lt?: InputMaybe<Scalars['String']['input']>;
  advanceRepaid_lte?: InputMaybe<Scalars['String']['input']>;
  advanceRepaid_not?: InputMaybe<Scalars['String']['input']>;
  advanceRepaid_not_contains?: InputMaybe<Scalars['String']['input']>;
  advanceRepaid_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  advanceRepaid_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  advanceRepaid_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  advanceRepaid_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  advanceRepaid_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  advanceRepaid_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  advanceRepaid_starts_with?: InputMaybe<Scalars['String']['input']>;
  advanceRepaid_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<AdvanceContract_Filter>>>;
  collateralReceiver?: InputMaybe<Scalars['Bytes']['input']>;
  collateralReceiver_contains?: InputMaybe<Scalars['Bytes']['input']>;
  collateralReceiver_gt?: InputMaybe<Scalars['Bytes']['input']>;
  collateralReceiver_gte?: InputMaybe<Scalars['Bytes']['input']>;
  collateralReceiver_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  collateralReceiver_lt?: InputMaybe<Scalars['Bytes']['input']>;
  collateralReceiver_lte?: InputMaybe<Scalars['Bytes']['input']>;
  collateralReceiver_not?: InputMaybe<Scalars['Bytes']['input']>;
  collateralReceiver_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  collateralReceiver_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  collaterals_?: InputMaybe<AdvanceContractCollateral_Filter>;
  creator?: InputMaybe<Scalars['Bytes']['input']>;
  creator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  creator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  creator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  creator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  creator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  creator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  expenses_?: InputMaybe<Expense_Filter>;
  expirationDate?: InputMaybe<Scalars['BigInt']['input']>;
  expirationDate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  expirationDate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  expirationDate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  expirationDate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  expirationDate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  expirationDate_not?: InputMaybe<Scalars['BigInt']['input']>;
  expirationDate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feePpm?: InputMaybe<Scalars['BigInt']['input']>;
  feePpm_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feePpm_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feePpm_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feePpm_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feePpm_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feePpm_not?: InputMaybe<Scalars['BigInt']['input']>;
  feePpm_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  isPackAdvance?: InputMaybe<Scalars['Boolean']['input']>;
  isPackAdvance_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isPackAdvance_not?: InputMaybe<Scalars['Boolean']['input']>;
  isPackAdvance_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  offerDuration?: InputMaybe<Scalars['BigInt']['input']>;
  offerDuration_gt?: InputMaybe<Scalars['BigInt']['input']>;
  offerDuration_gte?: InputMaybe<Scalars['BigInt']['input']>;
  offerDuration_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  offerDuration_lt?: InputMaybe<Scalars['BigInt']['input']>;
  offerDuration_lte?: InputMaybe<Scalars['BigInt']['input']>;
  offerDuration_not?: InputMaybe<Scalars['BigInt']['input']>;
  offerDuration_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AdvanceContract_Filter>>>;
  paymentTokenAddress?: InputMaybe<Scalars['Bytes']['input']>;
  paymentTokenAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  paymentTokenAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  paymentTokenAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  paymentTokenAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  paymentTokenAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  paymentTokenAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  paymentTokenAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  paymentTokenAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  paymentTokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  recipient?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  recipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  recoupmentAmount?: InputMaybe<Scalars['BigInt']['input']>;
  recoupmentAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  recoupmentAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  recoupmentAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  recoupmentAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  recoupmentAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  recoupmentAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  recoupmentAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  repaidAmount?: InputMaybe<Scalars['BigInt']['input']>;
  repaidAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  repaidAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  repaidAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  repaidAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  repaidAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  repaidAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  repaidAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  status?: InputMaybe<AdvanceStatus>;
  status_in?: InputMaybe<Array<AdvanceStatus>>;
  status_not?: InputMaybe<AdvanceStatus>;
  status_not_in?: InputMaybe<Array<AdvanceStatus>>;
  templateAddress?: InputMaybe<Scalars['Bytes']['input']>;
  templateAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  templateAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  templateAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  templateAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  templateAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  templateAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  templateAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  templateAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  templateAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export type AdvanceContract_OrderBy =
  | 'actualRepaid'
  | 'advanceAmount'
  | 'advanceContract'
  | 'advanceRepaid'
  | 'advanceRepaid__advanceContract'
  | 'advanceRepaid__id'
  | 'advanceRepaid__repaymentAmount'
  | 'advanceRepaid__timestamp'
  | 'advanceRepaid__transactionHash'
  | 'collateralReceiver'
  | 'collaterals'
  | 'creator'
  | 'expenses'
  | 'expirationDate'
  | 'feePpm'
  | 'id'
  | 'isPackAdvance'
  | 'offerDuration'
  | 'paymentTokenAddress'
  | 'recipient'
  | 'recoupmentAmount'
  | 'repaidAmount'
  | 'status'
  | 'templateAddress'
  | 'timestamp'
  | 'transactionHash';

export type AdvancePartiallyRepaid = {
  advanceContract: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  repaymentAmount: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type AdvancePartiallyRepaid_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  advanceContract?: InputMaybe<Scalars['Bytes']['input']>;
  advanceContract_contains?: InputMaybe<Scalars['Bytes']['input']>;
  advanceContract_gt?: InputMaybe<Scalars['Bytes']['input']>;
  advanceContract_gte?: InputMaybe<Scalars['Bytes']['input']>;
  advanceContract_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  advanceContract_lt?: InputMaybe<Scalars['Bytes']['input']>;
  advanceContract_lte?: InputMaybe<Scalars['Bytes']['input']>;
  advanceContract_not?: InputMaybe<Scalars['Bytes']['input']>;
  advanceContract_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  advanceContract_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<AdvancePartiallyRepaid_Filter>>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AdvancePartiallyRepaid_Filter>>>;
  repaymentAmount?: InputMaybe<Scalars['BigInt']['input']>;
  repaymentAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  repaymentAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  repaymentAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  repaymentAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  repaymentAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  repaymentAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  repaymentAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export type AdvancePartiallyRepaid_OrderBy =
  | 'advanceContract'
  | 'id'
  | 'repaymentAmount'
  | 'timestamp'
  | 'transactionHash';

export type AdvanceProvided = {
  advancer: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type AdvanceProvided_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  advancer?: InputMaybe<Scalars['Bytes']['input']>;
  advancer_contains?: InputMaybe<Scalars['Bytes']['input']>;
  advancer_gt?: InputMaybe<Scalars['Bytes']['input']>;
  advancer_gte?: InputMaybe<Scalars['Bytes']['input']>;
  advancer_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  advancer_lt?: InputMaybe<Scalars['Bytes']['input']>;
  advancer_lte?: InputMaybe<Scalars['Bytes']['input']>;
  advancer_not?: InputMaybe<Scalars['Bytes']['input']>;
  advancer_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  advancer_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<AdvanceProvided_Filter>>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AdvanceProvided_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export type AdvanceProvided_OrderBy =
  | 'advancer'
  | 'id'
  | 'timestamp'
  | 'transactionHash';

export type AdvanceRepaid = {
  advanceContract: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  repaymentAmount: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type AdvanceRepaid_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  advanceContract?: InputMaybe<Scalars['Bytes']['input']>;
  advanceContract_contains?: InputMaybe<Scalars['Bytes']['input']>;
  advanceContract_gt?: InputMaybe<Scalars['Bytes']['input']>;
  advanceContract_gte?: InputMaybe<Scalars['Bytes']['input']>;
  advanceContract_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  advanceContract_lt?: InputMaybe<Scalars['Bytes']['input']>;
  advanceContract_lte?: InputMaybe<Scalars['Bytes']['input']>;
  advanceContract_not?: InputMaybe<Scalars['Bytes']['input']>;
  advanceContract_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  advanceContract_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<AdvanceRepaid_Filter>>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AdvanceRepaid_Filter>>>;
  repaymentAmount?: InputMaybe<Scalars['BigInt']['input']>;
  repaymentAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  repaymentAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  repaymentAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  repaymentAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  repaymentAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  repaymentAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  repaymentAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export type AdvanceRepaid_OrderBy =
  | 'advanceContract'
  | 'id'
  | 'repaymentAmount'
  | 'timestamp'
  | 'transactionHash';

export type AdvanceRevoked = {
  advanceContract: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type AdvanceRevoked_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  advanceContract?: InputMaybe<Scalars['Bytes']['input']>;
  advanceContract_contains?: InputMaybe<Scalars['Bytes']['input']>;
  advanceContract_gt?: InputMaybe<Scalars['Bytes']['input']>;
  advanceContract_gte?: InputMaybe<Scalars['Bytes']['input']>;
  advanceContract_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  advanceContract_lt?: InputMaybe<Scalars['Bytes']['input']>;
  advanceContract_lte?: InputMaybe<Scalars['Bytes']['input']>;
  advanceContract_not?: InputMaybe<Scalars['Bytes']['input']>;
  advanceContract_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  advanceContract_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<AdvanceRevoked_Filter>>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AdvanceRevoked_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export type AdvanceRevoked_OrderBy =
  | 'advanceContract'
  | 'id'
  | 'timestamp'
  | 'transactionHash';

export type AdvanceStatus =
  | 'Active'
  | 'Expired'
  | 'Pending'
  | 'Recouped'
  | 'Revoked';

export type Aggregation_Interval =
  | 'day'
  | 'hour';

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Expense = {
  advanceContract: AdvanceContract;
  baseFeePerGas?: Maybe<Scalars['BigInt']['output']>;
  collaterals: Array<AdvanceContractCollateral>;
  cumulativeGasUsed?: Maybe<Scalars['BigInt']['output']>;
  from?: Maybe<Scalars['Bytes']['output']>;
  gasLimit: Scalars['BigInt']['output'];
  gasPrice: Scalars['BigInt']['output'];
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  id: Scalars['Bytes']['output'];
  kind: ExpenseKind;
  timestamp: Scalars['BigInt']['output'];
  totalCost: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
  value?: Maybe<Scalars['BigInt']['output']>;
};


export type ExpenseCollateralsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdvanceContractCollateral_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AdvanceContractCollateral_Filter>;
};

export type ExpenseKind =
  | 'AdvanceCreated'
  | 'AdvanceProvided'
  | 'AdvanceRepaid'
  | 'AdvanceRevoked'
  | 'ERC20Approve'
  | 'ERC20Transfer';

export type Expense_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  advanceContract?: InputMaybe<Scalars['String']['input']>;
  advanceContract_?: InputMaybe<AdvanceContract_Filter>;
  advanceContract_contains?: InputMaybe<Scalars['String']['input']>;
  advanceContract_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  advanceContract_ends_with?: InputMaybe<Scalars['String']['input']>;
  advanceContract_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  advanceContract_gt?: InputMaybe<Scalars['String']['input']>;
  advanceContract_gte?: InputMaybe<Scalars['String']['input']>;
  advanceContract_in?: InputMaybe<Array<Scalars['String']['input']>>;
  advanceContract_lt?: InputMaybe<Scalars['String']['input']>;
  advanceContract_lte?: InputMaybe<Scalars['String']['input']>;
  advanceContract_not?: InputMaybe<Scalars['String']['input']>;
  advanceContract_not_contains?: InputMaybe<Scalars['String']['input']>;
  advanceContract_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  advanceContract_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  advanceContract_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  advanceContract_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  advanceContract_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  advanceContract_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  advanceContract_starts_with?: InputMaybe<Scalars['String']['input']>;
  advanceContract_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<Expense_Filter>>>;
  baseFeePerGas?: InputMaybe<Scalars['BigInt']['input']>;
  baseFeePerGas_gt?: InputMaybe<Scalars['BigInt']['input']>;
  baseFeePerGas_gte?: InputMaybe<Scalars['BigInt']['input']>;
  baseFeePerGas_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  baseFeePerGas_lt?: InputMaybe<Scalars['BigInt']['input']>;
  baseFeePerGas_lte?: InputMaybe<Scalars['BigInt']['input']>;
  baseFeePerGas_not?: InputMaybe<Scalars['BigInt']['input']>;
  baseFeePerGas_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collaterals?: InputMaybe<Array<Scalars['String']['input']>>;
  collaterals_?: InputMaybe<AdvanceContractCollateral_Filter>;
  collaterals_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  collaterals_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  collaterals_not?: InputMaybe<Array<Scalars['String']['input']>>;
  collaterals_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  collaterals_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  cumulativeGasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeGasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeGasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeGasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeGasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeGasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeGasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  cumulativeGasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  gasLimit?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  kind?: InputMaybe<ExpenseKind>;
  kind_in?: InputMaybe<Array<ExpenseKind>>;
  kind_not?: InputMaybe<ExpenseKind>;
  kind_not_in?: InputMaybe<Array<ExpenseKind>>;
  or?: InputMaybe<Array<InputMaybe<Expense_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCost?: InputMaybe<Scalars['BigInt']['input']>;
  totalCost_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCost_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCost_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalCost_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalCost_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalCost_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalCost_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  value?: InputMaybe<Scalars['BigInt']['input']>;
  value_gt?: InputMaybe<Scalars['BigInt']['input']>;
  value_gte?: InputMaybe<Scalars['BigInt']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  value_lt?: InputMaybe<Scalars['BigInt']['input']>;
  value_lte?: InputMaybe<Scalars['BigInt']['input']>;
  value_not?: InputMaybe<Scalars['BigInt']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type Expense_OrderBy =
  | 'advanceContract'
  | 'advanceContract__actualRepaid'
  | 'advanceContract__advanceAmount'
  | 'advanceContract__advanceContract'
  | 'advanceContract__collateralReceiver'
  | 'advanceContract__creator'
  | 'advanceContract__expirationDate'
  | 'advanceContract__feePpm'
  | 'advanceContract__id'
  | 'advanceContract__isPackAdvance'
  | 'advanceContract__offerDuration'
  | 'advanceContract__paymentTokenAddress'
  | 'advanceContract__recipient'
  | 'advanceContract__recoupmentAmount'
  | 'advanceContract__repaidAmount'
  | 'advanceContract__status'
  | 'advanceContract__templateAddress'
  | 'advanceContract__timestamp'
  | 'advanceContract__transactionHash'
  | 'baseFeePerGas'
  | 'collaterals'
  | 'cumulativeGasUsed'
  | 'from'
  | 'gasLimit'
  | 'gasPrice'
  | 'gasUsed'
  | 'id'
  | 'kind'
  | 'timestamp'
  | 'totalCost'
  | 'transactionHash'
  | 'value';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  advanceContract?: Maybe<AdvanceContract>;
  advanceContractCollateral?: Maybe<AdvanceContractCollateral>;
  advanceContractCollaterals: Array<AdvanceContractCollateral>;
  advanceContracts: Array<AdvanceContract>;
  advancePartiallyRepaid?: Maybe<AdvancePartiallyRepaid>;
  advancePartiallyRepaids: Array<AdvancePartiallyRepaid>;
  advanceProvided?: Maybe<AdvanceProvided>;
  advanceProvideds: Array<AdvanceProvided>;
  advanceRepaid?: Maybe<AdvanceRepaid>;
  advanceRepaids: Array<AdvanceRepaid>;
  advanceRevoked?: Maybe<AdvanceRevoked>;
  advanceRevokeds: Array<AdvanceRevoked>;
  expense?: Maybe<Expense>;
  expenses: Array<Expense>;
  stats?: Maybe<Stats>;
  stats_collection: Array<Stats>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAdvanceContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAdvanceContractCollateralArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAdvanceContractCollateralsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdvanceContractCollateral_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AdvanceContractCollateral_Filter>;
};


export type QueryAdvanceContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdvanceContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AdvanceContract_Filter>;
};


export type QueryAdvancePartiallyRepaidArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAdvancePartiallyRepaidsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdvancePartiallyRepaid_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AdvancePartiallyRepaid_Filter>;
};


export type QueryAdvanceProvidedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAdvanceProvidedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdvanceProvided_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AdvanceProvided_Filter>;
};


export type QueryAdvanceRepaidArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAdvanceRepaidsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdvanceRepaid_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AdvanceRepaid_Filter>;
};


export type QueryAdvanceRevokedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAdvanceRevokedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdvanceRevoked_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AdvanceRevoked_Filter>;
};


export type QueryExpenseArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryExpensesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Expense_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Expense_Filter>;
};


export type QueryStatsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStats_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Stats_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Stats_Filter>;
};

export type Stats = {
  contractsCount: Scalars['BigInt']['output'];
  expensesCount: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
};

export type Stats_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Stats_Filter>>>;
  contractsCount?: InputMaybe<Scalars['BigInt']['input']>;
  contractsCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  contractsCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  contractsCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  contractsCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  contractsCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  contractsCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  contractsCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  expensesCount?: InputMaybe<Scalars['BigInt']['input']>;
  expensesCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  expensesCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  expensesCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  expensesCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  expensesCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  expensesCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  expensesCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Stats_Filter>>>;
};

export type Stats_OrderBy =
  | 'contractsCount'
  | 'expensesCount'
  | 'id';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';
