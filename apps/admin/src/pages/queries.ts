import gql from 'graphql-tag';

export const STATISTICS_QUERY = gql`
  query Statistic($id: ID!) {
    stats(id: $id) {
      id
      contractsCount
      expensesCount
    }
  }
`;

export const ADVANCE_OFFERS_LIST_QUERY = gql`
  query AdvanceOffersList(
    $first: Int
    $skip: Int
    $orderBy: AdvanceContract_orderBy
    $orderDirection: OrderDirection
  ) {
    advanceContracts(
      first: $first
      skip: $skip
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      id
      advanceContract
      creator
      recipient
      collateralReceiver
      isPackAdvance
      collaterals {
        tokenAddress
        tokenId
        tokenAmount
      }
      advanceAmount
      feePpm
      status
      timestamp
      transactionHash
      expenses {
        gasPrice
        totalCost
      }
      expirationDate
    }
  }
`;

export const ADVANCE_OFFER_SHOW_QUERY = gql`
  query AdvanceOffer($id: ID!) {
    advanceContract(id: $id) {
      id
      advanceContract
      creator
      recipient
      collateralReceiver
      isPackAdvance
      collaterals {
        tokenAddress
        tokenId
        tokenAmount
      }
      advanceAmount
      feePpm
      status
      timestamp
      transactionHash
      expenses {
        gasPrice
        totalCost
      }
      expirationDate
    }
  }
`;

export const TRANSACTIONS_LIST_QUERY = gql`
  query TransactionsList(
    $first: Int
    $skip: Int
    $where: Expense_filter
    $orderBy: Expense_orderBy
    $orderDirection: OrderDirection
  ) {
    expenses(
      first: $first
      skip: $skip
      where: $where
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      id
      loanContract {
        id
      }
      collaterals {
        tokenAddress
      }
      transactionHash
      kind
      baseFeePerGas
      gasLimit
      gasPrice
      gasUsed
      cumulativeGasUsed
      totalCost
      timestamp
    }
  }
`;

export const TRANSACTION_SHOW_QUERY = gql`
  query Transaction($id: ID!) {
    expense(id: $id) {
      id
      advanceContract {
        id
      }
      collaterals {
        tokenAddress
      }
      transactionHash
      kind
      baseFeePerGas
      gasLimit
      gasPrice
      gasUsed
      cumulativeGasUsed
      totalCost
      timestamp
    }
  }
`;
