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

//

export default resolvers;