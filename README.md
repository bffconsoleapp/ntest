```graphql
# codegen-start

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

# codegen-end
```

```javascript
// codegen-start-resolver

const resolvers = {
  Query: {
    getCreditUnion: (_, { id }) => ({
      id,
      contractNumber: "123456",
      creditUnionName: "Sample Credit Union",
      premiumReports: [],
      premiumAdjustments: [],
      singlePremiumCertificateReturns: [],
    }),
    getPremiumReport: (_, { id }) => ({
      id,
      productName: "Sample Product",
      reportPeriod: "Q1 2023",
      status: "Active",
      lastUpdate: "2023-01-30",
      periodEnding: "2023-03-31",
      premiumReports: [],
    }),
    getPremiumAdjustment: (_, { id }) => ({
      id,
      productName: "Sample Product",
      reportPeriod: "Q1 2023",
      status: "Active",
      lastUpdate: "2023-01-30",
      periodEnding: "2023-03-31",
      adjustmentTypeToTheCreditUnion: "Type A",
      comment: "No comments",
      totalBorrowerFees: 1000.0,
      CU_Retail_Rate: 5.0,
      protectedLoanAmount: 5000.0,
      payRate: 1.5,
      premiumDue: 100.0,
      totalAmount: 5600.0,
      premiumAdjustments: [],
    }),
    getSinglePremiumCertificateReturn: (_, { id }) => ({
      id,
      singlePremiumCertificateReturns: [],
    }),
  },
  Mutation: {
    addCreditUnion: (_, { creditUnion }) => ({
      id: "generated-id",
      ...creditUnion,
    }),
    updateCreditUnion: (_, { id, creditUnion }) => ({
      id,
      ...creditUnion,
    }),
    deleteCreditUnion: (_, { id }) => true,

    addPremiumReport: (_, { premiumReport }) => ({
      id: "generated-id",
      ...premiumReport,
    }),
    updatePremiumReport: (_, { id, premiumReport }) => ({
      id,
      ...premiumReport,
    }),
    deletePremiumReport: (_, { id }) => true,

    addPremiumAdjustment: (_, { premiumAdjustment }) => ({
      id: "generated-id",
      ...premiumAdjustment,
    }),
    updatePremiumAdjustment: (_, { id, premiumAdjustment }) => ({
      id,
      ...premiumAdjustment,
    }),
    deletePremiumAdjustment: (_, { id }) => true,

    addSinglePremiumCertificateReturn: (_, { singlePremiumCertificateReturn }) => ({
      id: "generated-id",
      ...singlePremiumCertificateReturn,
    }),
    updateSinglePremiumCertificateReturn: (_, { id, singlePremiumCertificateReturn }) => ({
      id,
      ...singlePremiumCertificateReturn,
    }),
    deleteSinglePremiumCertificateReturn: (_, { id }) => true,
  },
};

// codegen-end-resolver
```