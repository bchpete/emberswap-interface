import gql from 'graphql-tag'

export const poolsQuery = gql`
  query poolsQuery(
    $first: Int! = 1000
    $skip: Int! = 0
    $orderBy: String! = "id"
    $orderDirection: String! = "desc"
    $where: Pool_filter! = { allocPoint_gt: 0, accSushiPerShare_gt: 0 }
  ) {
    pools(first: $first, skip: $skip, orderBy: $orderBy, orderDirection: $orderDirection, where: $where) {
      id
      pair
      allocPoint
      lastRewardTimestamp
      accSushiPerShare
      balance
      userCount
      owner {
        id
        sushiPerBlock
        totalAllocPoint
      }
    }
  }
`

export const masterChefV1PairAddressesQuery = gql`
  query masterChefV1PairAddresses(
    $first: Int! = 1000
    $skip: Int! = 0
    $orderBy: String! = "id"
    $orderDirection: String! = "desc"
    $where: Pool_filter! = { allocPoint_gt: 0, accSushiPerShare_gt: 0 }
  ) {
    pools(first: $first, skip: $skip, orderBy: $orderBy, orderDirection: $orderDirection, where: $where) {
      id
      allocPoint
      accSushiPerShare
      pair {
        id
      }
    }
  }
`

export const masterChefV1TotalAllocPointQuery = gql`
  query masterChefV1TotalAllocPoint($id: String! = "0xc2edad668740f1aa35e4d8f227fb8e17dca888cd") {
    masterChef(id: $id) {
      id
      totalAllocPoint
    }
  }
`

export const masterChefV1SushiPerBlockQuery = gql`
  query masterChefV1SushiPerBlock($id: String! = "0xc2edad668740f1aa35e4d8f227fb8e17dca888cd") {
    masterChef(id: $id) {
      id
      sushiPerBlock
    }
  }
`
