import type * as Types from './schema.types';

export type StatisticQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type StatisticQuery = { stats?: Types.Maybe<Pick<Types.Stats, 'id' | 'contractsCount' | 'expensesCount'>> };

export type AdvanceOffersListQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  skip?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  orderBy?: Types.InputMaybe<Types.AdvanceContract_OrderBy>;
  orderDirection?: Types.InputMaybe<Types.OrderDirection>;
}>;


export type AdvanceOffersListQuery = { advanceContracts: Array<(
    Pick<Types.AdvanceContract, 'id' | 'advanceContract' | 'creator' | 'recipient' | 'collateralReceiver' | 'isPackAdvance' | 'advanceAmount' | 'feePpm' | 'status' | 'timestamp' | 'transactionHash' | 'expirationDate'>
    & { collaterals: Array<Pick<Types.AdvanceContractCollateral, 'tokenAddress' | 'tokenId' | 'tokenAmount'>>, expenses: Array<Pick<Types.Expense, 'gasPrice' | 'totalCost'>> }
  )> };

export type AdvanceOfferQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type AdvanceOfferQuery = { advanceContract?: Types.Maybe<(
    Pick<Types.AdvanceContract, 'id' | 'advanceContract' | 'creator' | 'recipient' | 'collateralReceiver' | 'isPackAdvance' | 'advanceAmount' | 'feePpm' | 'status' | 'timestamp' | 'transactionHash' | 'expirationDate'>
    & { collaterals: Array<Pick<Types.AdvanceContractCollateral, 'tokenAddress' | 'tokenId' | 'tokenAmount'>>, expenses: Array<Pick<Types.Expense, 'gasPrice' | 'totalCost'>> }
  )> };

export type TransactionsListQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  skip?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  where?: Types.InputMaybe<Types.Expense_Filter>;
  orderBy?: Types.InputMaybe<Types.Expense_OrderBy>;
  orderDirection?: Types.InputMaybe<Types.OrderDirection>;
}>;


export type TransactionsListQuery = { expenses: Array<(
    Pick<Types.Expense, 'id' | 'transactionHash' | 'kind' | 'baseFeePerGas' | 'gasLimit' | 'gasPrice' | 'gasUsed' | 'cumulativeGasUsed' | 'totalCost' | 'timestamp'>
    & { advanceContract: Pick<Types.AdvanceContract, 'id'>, collaterals: Array<Pick<Types.AdvanceContractCollateral, 'tokenAddress'>> }
  )> };

export type TransactionQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type TransactionQuery = { expense?: Types.Maybe<(
    Pick<Types.Expense, 'id' | 'transactionHash' | 'kind' | 'baseFeePerGas' | 'gasLimit' | 'gasPrice' | 'gasUsed' | 'cumulativeGasUsed' | 'totalCost' | 'timestamp'>
    & { advanceContract: Pick<Types.AdvanceContract, 'id'>, collaterals: Array<Pick<Types.AdvanceContractCollateral, 'tokenAddress'>> }
  )> };
