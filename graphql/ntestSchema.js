import { gql } from 'apollo-server';

const typeDefs = `
  type Credit_Union {
    id: ID!
    contractNumber: String!
    creditUnionName: String!
    premiumReports: [Premium_Report]!
    premiumAdjustments: [Premium_Adjustment]!
    singlePremiumCertificateReturns: [Single_Premium_Certificate_Return]!
  }

  input Credit_UnionInput {
    id: ID!
    contractNumber: String!
    creditUnionName: String!
  }

  type Premium_Report {
    id: ID!
    productName: String!
    reportPeriod: String!
    status: String!
    lastUpdate: String!
    periodEnding: String!
    premiumReports: [Premium_Report]!
  }

  input Premium_ReportInput {
    id: ID!
    productName: String!
    reportPeriod: String!
    status: String!
    lastUpdate: String!
    periodEnding: String!
  }

  type Premium_Adjustment {
    id: ID!
    productName: String!
    reportPeriod: String!
    status: String!
    lastUpdate: String!
    periodEnding: String!
    adjustmentTypeToTheCreditUnion: String!
    comment: String!
    totalBorrowerFees: Float!
    CU_Retail_Rate: Float!
    protectedLoanAmount: Float!
    payRate: Float!
    premiumDue: Float!
    totalAmount: Float!
    premiumAdjustments: [Premium_Adjustment]!
  }

  input Premium_AdjustmentInput {
    id: ID!
    productName: String!
    reportPeriod: String!
    status: String!
    lastUpdate: String!
    periodEnding: String!
    adjustmentTypeToTheCreditUnion: String!
    comment: String!
    totalBorrowerFees: Float!
    CU_Retail_Rate: Float!
    protectedLoanAmount: Float!
    payRate: Float!
    premiumDue: Float!
    totalAmount: Float!
  }

  type Single_Premium_Certificate_Return {
    id: ID!
    singlePremiumCertificateReturns: [Single_Premium_Certificate_Return]!
  }

  input Single_Premium_Certificate_ReturnInput {
    id: ID!
  }

  type Query {
    getCreditUnion(id: ID!): Credit_Union
    getPremiumReport(id: ID!): Premium_Report
    getPremiumAdjustment(id: ID!): Premium_Adjustment
    getSinglePremiumCertificateReturn(id: ID!): Single_Premium_Certificate_Return
  }

  type Mutation {
    addCreditUnion(creditUnion: Credit_UnionInput!): Credit_Union
    updateCreditUnion(id: ID!, creditUnion: Credit_UnionInput!): Credit_Union
    deleteCreditUnion(id: ID!): Boolean

    addPremiumReport(premiumReport: Premium_ReportInput!): Premium_Report
    updatePremiumReport(id: ID!, premiumReport: Premium_ReportInput!): Premium_Report
    deletePremiumReport(id: ID!): Boolean

    addPremiumAdjustment(premiumAdjustment: Premium_AdjustmentInput!): Premium_Adjustment
    updatePremiumAdjustment(id: ID!, premiumAdjustment: Premium_AdjustmentInput!): Premium_Adjustment
    deletePremiumAdjustment(id: ID!): Boolean

    addSinglePremiumCertificateReturn(singlePremiumCertificateReturn: Single_Premium_Certificate_ReturnInput!): Single_Premium_Certificate_Return
    updateSinglePremiumCertificateReturn(id: ID!, singlePremiumCertificateReturn: Single_Premium_Certificate_ReturnInput!): Single_Premium_Certificate_Return
    deleteSinglePremiumCertificateReturn(id: ID!): Boolean
  }
`;

export default typeDefs;